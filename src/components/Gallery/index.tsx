"use client";

import Image from "next/image";
import {Suspense, useCallback, useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ChevronLeft, ChevronRight, X} from "lucide-react";
import axios from "axios";
import {useSearchParams} from "next/navigation";
import SectionTitle from "@/components/Common/SectionTitle";

export interface GalleryImage {
  url: string;
  title?: string;
  description?: string;
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<div>Loading gallery...</div>}>
      <GalleryPageContent/>
    </Suspense>
  );
}

function GalleryPageContent() {
  const searchParams = useSearchParams();
  const tagsParam = searchParams.getAll("imageTags");
  const imageTags = tagsParam ? tagsParam : undefined;

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [index, setIndex] = useState<number | null>(null);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  // Prevent double fetch in dev/StrictMode
  const didFetchOnMount = useRef(false);
  // Ref to store scroll position and lazy loading flag
  const scrollYRef = useRef<number | null>(null);

  // Funzione per recuperare le immagini, supporta imageTags
  const fetchImages = useCallback(
    async (cursor?: string) => {
      if (loading || !hasMore) return;
      setLoading(true);
      try {
        const params: { max_results: number; next_cursor?: string; tags?: string } = {
          max_results: 20,
        };
        if (cursor) params.next_cursor = cursor;
        if (imageTags && imageTags.length > 0) params.tags = imageTags.join(",");
        const res = await axios.get("/api/gallery", {params});
        const {images: newImages, next_cursor} = res.data;
        setImages((prev) => [...prev, ...newImages]);
        setNextCursor(next_cursor || null);
        setHasMore(!!next_cursor);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    },
    [loading, hasMore, imageTags]
  );

  // Fetch images on mount or when imageTags changes
  useEffect(() => {
    if (didFetchOnMount.current) return;
    didFetchOnMount.current = true;
    fetchImages().then(() => {
    });
  }, [fetchImages]);

  // Lazy loading on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        hasMore &&
        !loading
      ) {
        scrollYRef.current = window.scrollY;
        fetchImages(nextCursor || undefined).then(v => v);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchImages, hasMore, loading, nextCursor]);

  useEffect(() => {
    if (scrollYRef.current !== null) {
      window.scrollTo(0, scrollYRef.current);
      scrollYRef.current = null;
    }
  }, [images]);

  const closeModal = () => setIndex(null);
  const showNext = useCallback(
    () => index !== null && setIndex((index + 1) % images.length),
    [index, images.length]
  );
  const showPrev = useCallback(
    () =>
      index !== null && setIndex((index - 1 + images.length) % images.length),
    [index, images.length]
  );

  // Gestione tastiera
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, showNext, showPrev]);

  if (loading) return <div>Loading images...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section id="gallery" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div id="company-history" className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{scale: 1.02}}
              className="cursor-pointer overflow-hidden rounded-xl shadow-sm"
              onClick={() => setIndex(i)}
            >
              <Image
                src={img.url}
                alt={img.title || img.description || `Image ${i + 1}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>

      {/* Modal con navigazione */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh]"
              initial={{scale: 0.9}}
              animate={{scale: 1}}
              exit={{scale: 0.9}}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[index].url}
                alt={images[index].title || images[index].description || `Image ${index + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl max-h-[80vh] object-contain"
              />

              {/* Chiudi */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 p-2 rounded-full bg-white text-black hover:bg-gray-100"
                aria-label="Chiudi"
              >
                <X size={24}/>
              </button>

              {/* Freccia sinistra */}
              <button
                onClick={showPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white text-black hover:bg-gray-100"
                aria-label="Precedente"
              >
                <ChevronLeft size={28}/>
              </button>

              {/* Freccia destra */}
              <button
                onClick={showNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white text-black hover:bg-gray-100"
                aria-label="Successivo"
              >
                <ChevronRight size={28}/>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
}
