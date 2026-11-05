import { unstable_cache } from "next/cache";
import { site } from "../config/site";

// Massimo consentito dalla Search API per singola richiesta.
const SEARCH_PAGE_SIZE = 500;
// Tetto di sicurezza: 10 pagine = 5000 immagini.
const MAX_SEARCH_PAGES = 10;
const REVALIDATE_SECONDS = 60 * 60;

export interface GalleryImage {
  url: string;
  publicId: string;
  width?: number;
  height?: number;
  title: string;
  description: string;
  tags: string[];
}

interface CloudinaryResource {
  secure_url: string;
  public_id: string;
  width?: number;
  height?: number;
  tags?: string[];
  context?: { custom?: { caption?: string; alt?: string } };
}

interface CloudinarySearchResponse {
  resources?: CloudinaryResource[];
  next_cursor?: string;
}

function toGalleryImage(img: CloudinaryResource): GalleryImage {
  const caption = img.context?.custom?.caption?.trim() || "";
  return {
    url: img.secure_url,
    publicId: img.public_id,
    width: img.width,
    height: img.height,
    // Vuoto se non impostato: il public_id è rumore della fotocamera
    // ("IMG-20250520-WA0015") e darebbe un alt peggiore del fallback.
    title: caption,
    description: img.context?.custom?.alt?.trim() || caption,
    tags: img.tags ?? [],
  };
}

async function searchFolder(): Promise<GalleryImage[]> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Credenziali Cloudinary non impostate");
  }

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`;
  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");
  const images: GalleryImage[] = [];
  let cursor: string | undefined;

  for (let page = 0; page < MAX_SEARCH_PAGES; page++) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        expression: `folder:${site.gallery.cloudinaryFolder}`,
        max_results: SEARCH_PAGE_SIZE,
        // Senza with_field la Search API omette context e tag.
        with_field: ["context", "tags"],
        sort_by: [{ created_at: "desc" }],
        ...(cursor ? { next_cursor: cursor } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Cloudinary search failed: HTTP ${res.status}`);
    }
    const data = (await res.json()) as CloudinarySearchResponse;
    images.push(...(data.resources ?? []).map(toGalleryImage));
    cursor = data.next_cursor;
    if (!cursor) break;
  }

  return images;
}

/**
 * Elenco completo della cartella, in cache lato server per un'ora.
 *
 * La paginazione verso il browser avviene su questo elenco in memoria: le
 * chiamate alla Admin API di Cloudinary (soggetta a rate limit) restano al
 * massimo una all'ora, qualunque parametro arrivi dall'esterno.
 */
export const getGalleryImages = unstable_cache(searchFolder, ["gallery"], {
  revalidate: REVALIDATE_SECONDS,
  tags: ["gallery"],
});
