"use client";

import Image from "next/image";
import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LuChevronLeft, LuChevronRight, LuX, LuZoomIn } from "react-icons/lu";
import { useSearchParams } from "next/navigation";

export interface GalleryImage {
  url: string;
  publicId: string;
  width?: number;
  height?: number;
  title?: string;
  description?: string;
}

const PAGE_SIZE = 20;

// Varied skeleton heights so the loading state already reads as masonry.
const SKELETON_HEIGHTS = [240, 320, 200, 300, 260, 340, 220, 280];

/** Alt dell'immagine, con un testo di riserva se manca la didascalia. */
const noopSubscribe = () => () => {};

function altFor(img: GalleryImage, i: number, prefix: string): string {
  return img.description?.trim() || img.title?.trim() || `${prefix} ${i + 1}`;
}

export default function Gallery({ siteName }: { siteName: string }) {
  return (
    <Suspense fallback={<GallerySkeleton />}>
      <GalleryPageContent altPrefix={`Progetto ${siteName}`} />
    </Suspense>
  );
}

function MasonryShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="columns-2 gap-4 md:columns-3 lg:columns-4">{children}</div>
  );
}

function GallerySkeleton({ count = 10 }: { count?: number }) {
  return (
    <section className="overflow-hidden py-10 md:py-16 lg:py-20">
      <div className="container">
        <MasonryShell>
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="mb-4 animate-pulse rounded-2xl bg-gray-200 break-inside-avoid dark:bg-gray-800"
              style={{ height: SKELETON_HEIGHTS[i % SKELETON_HEIGHTS.length] }}
            />
          ))}
        </MasonryShell>
      </div>
    </section>
  );
}

function GalleryPageContent({ altPrefix }: { altPrefix: string }) {
  const searchParams = useSearchParams();
  const tagsKey = searchParams.getAll("imageTags").filter(Boolean).join(",");
  // Cambiare filtro rimonta la griglia, che riparte così da uno stato pulito.
  return <GalleryGrid key={tagsKey} tagsKey={tagsKey} altPrefix={altPrefix} />;
}

function GalleryGrid({
  tagsKey,
  altPrefix,
}: {
  tagsKey: string;
  altPrefix: string;
}) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [index, setIndex] = useState<number | null>(null);
  // Slide direction for the lightbox: 1 = forward, -1 = back, 0 = jump.
  const [direction, setDirection] = useState(0);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const inFlightRef = useRef(false);
  const abortRef = useRef<AbortController | null>(null);
  // Incrementato allo smontaggio, così le risposte in volo non scrivono
  // in uno stato ormai obsoleto.
  const genRef = useRef(0);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Lo stato si aggiorna solo nelle callback della promise, mai in modo
  // sincrono: così la funzione si può chiamare anche dal primo effect.
  const fetchPage = useCallback(
    (cursorArg: string | null) => {
      if (inFlightRef.current) return;
      const gen = genRef.current;
      inFlightRef.current = true;

      const controller = new AbortController();
      abortRef.current = controller;

      const params = new URLSearchParams({ max_results: String(PAGE_SIZE) });
      if (cursorArg) params.set("next_cursor", cursorArg);
      if (tagsKey) params.set("tags", tagsKey);

      fetch(`/api/gallery?${params}`, { signal: controller.signal })
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json() as Promise<{
            images: GalleryImage[];
            next_cursor: string | null;
          }>;
        })
        .then(({ images: incoming, next_cursor }) => {
          if (gen !== genRef.current) return;
          // The updater must be pure: React StrictMode invokes it twice in dev,
          // so dedup against `prev` itself rather than a mutable external Set —
          // otherwise the second run sees every id as "seen" and drops the page.
          setImages((prev) => {
            const existing = new Set(prev.map((im) => im.publicId || im.url));
            const fresh = (incoming || []).filter(
              (img) => img?.url && !existing.has(img.publicId || img.url),
            );
            return fresh.length ? [...prev, ...fresh] : prev;
          });
          setCursor(next_cursor || null);
          setHasMore(Boolean(next_cursor));
        })
        .catch((err: unknown) => {
          if (
            gen !== genRef.current ||
            (err instanceof DOMException && err.name === "AbortError")
          )
            return;
          setError("Impossibile caricare le immagini.");
          // Stop the observer from retrying in a loop; the button re-arms it.
          setHasMore(false);
        })
        .finally(() => {
          if (gen === genRef.current) {
            inFlightRef.current = false;
            setLoading(false);
          }
        });
    },
    [tagsKey],
  );

  // Primo caricamento. Il cleanup invalida le risposte ancora in volo
  // (anche nel doppio mount di StrictMode in sviluppo).
  useEffect(() => {
    fetchPage(null);
    return () => {
      genRef.current += 1;
      abortRef.current?.abort();
      inFlightRef.current = false;
    };
  }, [fetchPage]);

  const loadMore = useCallback(
    (cursorArg: string | null) => {
      if (inFlightRef.current) return;
      setLoading(true);
      setError(null);
      fetchPage(cursorArg);
    },
    [fetchPage],
  );

  // Infinite scroll. An observer on a sentinel replaces the scroll listener:
  // no work on every scroll frame, and it re-arms itself when `loading` flips
  // back to false while the sentinel is still on screen.
  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || !hasMore || loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore(cursor);
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [cursor, loadMore, hasMore, loading]);

  const retry = useCallback(() => {
    setHasMore(true);
    loadMore(cursor);
  }, [cursor, loadMore]);

  const isOpen = index !== null;
  const openAt = useCallback((i: number) => {
    setDirection(0);
    setIndex(i);
  }, []);
  const closeModal = useCallback(() => setIndex(null), []);
  const showNext = useCallback(() => {
    setDirection(1);
    setIndex((i) =>
      i === null || images.length === 0 ? i : (i + 1) % images.length,
    );
  }, [images.length]);
  const showPrev = useCallback(() => {
    setDirection(-1);
    setIndex((i) =>
      i === null || images.length === 0
        ? i
        : (i - 1 + images.length) % images.length,
    );
  }, [images.length]);
  const goTo = useCallback((i: number) => {
    setIndex((cur) => {
      setDirection(cur === null ? 0 : i > cur ? 1 : i < cur ? -1 : 0);
      return i;
    });
  }, []);

  return (
    <section id="gallery" className="overflow-hidden py-10 md:py-16 lg:py-20">
      <div className="container">
        <MasonryShell>
          {images.map((img, i) => (
            <button
              key={img.publicId || img.url}
              type="button"
              onClick={() => openAt(i)}
              aria-label={`Apri immagine: ${altFor(img, i, altPrefix)}`}
              className="group focus-visible:ring-primary relative mb-4 block w-full cursor-pointer overflow-hidden rounded-2xl bg-gray-100 shadow-sm ring-1 ring-black/5 break-inside-avoid transition-shadow duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:bg-gray-800"
            >
              <Image
                src={img.url}
                alt={altFor(img, i, altPrefix)}
                width={img.width || 800}
                height={img.height || 600}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                priority={i < 4}
                className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span
                aria-hidden
                className="text-primary pointer-events-none absolute bottom-3 left-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <LuZoomIn size={18} />
              </span>
            </button>
          ))}

          {loading &&
            Array.from({ length: images.length === 0 ? 10 : 4 }).map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="mb-4 animate-pulse rounded-2xl bg-gray-200 break-inside-avoid dark:bg-gray-800"
                style={{
                  height: SKELETON_HEIGHTS[i % SKELETON_HEIGHTS.length],
                }}
              />
            ))}
        </MasonryShell>

        {/* Sentinel drives infinite scroll; kept outside the grid so it never
            occupies a cell. */}
        <div ref={sentinelRef} aria-hidden="true" className="h-px w-full" />

        {error && (
          <div
            role="alert"
            className="mt-8 flex flex-col items-center gap-4 text-center"
          >
            <p className="text-body-color text-base">{error}</p>
            <button
              type="button"
              onClick={retry}
              className="bg-primary rounded-lg px-6 py-2 text-base font-medium text-white transition hover:bg-primary/90"
            >
              Riprova
            </button>
          </div>
        )}

        {!loading && !error && images.length === 0 && (
          <p className="text-body-color py-12 text-center text-base">
            Nessuna immagine disponibile al momento.
          </p>
        )}

        {!loading && !error && images.length > 0 && !hasMore && (
          <p className="text-body-color pt-10 text-center text-sm">
            Hai visto tutte e {images.length} le foto.
          </p>
        )}

        <Lightbox
          altPrefix={altPrefix}
          images={images}
          index={index}
          direction={direction}
          isOpen={isOpen}
          onClose={closeModal}
          onNext={showNext}
          onPrev={showPrev}
          onSelect={goTo}
        />
      </div>
    </section>
  );
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : dir < 0 ? -60 : 0,
    opacity: 0,
    scale: 0.97,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : dir < 0 ? 60 : 0,
    opacity: 0,
    scale: 0.97,
  }),
};

function Lightbox({
  altPrefix,
  images,
  index,
  direction,
  isOpen,
  onClose,
  onNext,
  onPrev,
  onSelect,
}: {
  altPrefix: string;
  images: GalleryImage[];
  index: number | null;
  direction: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (i: number) => void;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const activeThumbRef = useRef<HTMLButtonElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const isClient = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  const current = index !== null ? images[index] : undefined;

  // Neighbours are rendered hidden so next/image fetches them through the same
  // optimizer URL the modal will request, making arrow navigation instant.
  const neighbours = useMemo(() => {
    if (index === null || images.length < 2) return [];
    const next = images[(index + 1) % images.length];
    const prev = images[(index - 1 + images.length) % images.length];
    return [next, prev].filter(
      (img, i, arr) =>
        img && img.url !== current?.url && arr.indexOf(img) === i,
    ) as GalleryImage[];
  }, [index, images, current?.url]);

  // Lock the page behind the modal, compensating for the scrollbar so the
  // layout doesn't shift when it disappears.
  useEffect(() => {
    if (!isOpen) return;
    const { body, documentElement } = document;
    const scrollbar = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
    };
  }, [isOpen]);

  // Move focus into the dialog and hand it back to the thumbnail on close.
  useEffect(() => {
    if (!isOpen) return;
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    const restoreTo = lastFocusedRef.current;
    return () => restoreTo?.focus?.();
  }, [isOpen]);

  // Keep the active thumbnail centred in the filmstrip as you navigate.
  useEffect(() => {
    if (!isOpen) return;
    activeThumbRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [index, isOpen, prefersReducedMotion]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev();
      } else if (e.key === "Tab") {
        const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
          "button:not([disabled])",
        );
        if (!focusables?.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, onNext, onPrev]);

  // Il lightbox va in un portal su <body>: così resta sopra all'header anche
  // se un antenato crea un nuovo stacking context.
  // Il portal si monta solo nel browser, dopo l'idratazione.
  if (!isClient) return null;
  return createPortal(
    <AnimatePresence>
      {isOpen && current && index !== null && (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={altFor(current, index, altPrefix)}
          className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          {/* Top bar */}
          <div
            className="relative z-10 flex items-center justify-between px-4 py-4 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            {images.length > 1 ? (
              <span
                aria-live="polite"
                className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white tabular-nums"
              >
                {index + 1} / {images.length}
              </span>
            ) : (
              <span />
            )}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="focus-visible:ring-primary flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2"
              aria-label="Chiudi"
            >
              <LuX size={22} />
            </button>
          </div>

          {/* Stage */}
          <div
            className="relative flex flex-1 items-center justify-center overflow-hidden px-4 sm:px-20"
            onClick={onClose}
          >
            <AnimatePresence
              custom={direction}
              mode="popLayout"
              initial={false}
            >
              <motion.div
                key={index}
                custom={direction}
                variants={prefersReducedMotion ? undefined : slideVariants}
                initial={prefersReducedMotion ? { opacity: 0 } : "enter"}
                animate={prefersReducedMotion ? { opacity: 1 } : "center"}
                exit={prefersReducedMotion ? { opacity: 0 } : "exit"}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                drag={images.length > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) onNext();
                  else if (info.offset.x > 80) onPrev();
                }}
                onClick={(e) => e.stopPropagation()}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={current.url}
                  alt={altFor(current, index, altPrefix)}
                  width={current.width || 1200}
                  height={current.height || 800}
                  sizes="(min-width: 1024px) 1000px, 100vw"
                  priority
                  className="max-h-[74vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                  className="focus-visible:ring-primary absolute top-1/2 left-2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 sm:left-5 sm:h-12 sm:w-12"
                  aria-label="Precedente"
                >
                  <LuChevronLeft size={26} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  className="focus-visible:ring-primary absolute top-1/2 right-2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 sm:right-5 sm:h-12 sm:w-12"
                  aria-label="Successivo"
                >
                  <LuChevronRight size={26} />
                </button>
              </>
            )}
          </div>

          {/* Caption */}
          {current.description && (
            <p
              className="px-6 pt-1 pb-2 text-center text-sm text-white/80"
              onClick={(e) => e.stopPropagation()}
            >
              {current.description}
            </p>
          )}

          {/* Thumbnail filmstrip */}
          {images.length > 1 && (
            <div
              className="relative z-10 border-t border-white/10 bg-black/40"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3">
                {images.map((img, i) => {
                  const active = i === index;
                  return (
                    <button
                      key={img.publicId || img.url}
                      ref={active ? activeThumbRef : null}
                      onClick={() => onSelect(i)}
                      aria-label={`Vai all'immagine ${i + 1}`}
                      aria-current={active}
                      className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-md ring-2 transition-all duration-200 sm:h-16 sm:w-24 ${
                        active
                          ? "ring-white"
                          : "opacity-50 ring-transparent hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img.url}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Preload neighbours for instant arrow navigation. */}
          <div className="hidden" aria-hidden="true">
            {neighbours.map((img) => (
              <Image
                key={img.publicId || img.url}
                src={img.url}
                alt=""
                width={img.width || 1200}
                height={img.height || 800}
                sizes="(min-width: 1024px) 1000px, 100vw"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
