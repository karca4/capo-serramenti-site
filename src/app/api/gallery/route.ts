import { NextResponse } from "next/server";
import { getGalleryImages } from "@/theme/lib/cloudinary";

const DEFAULT_PAGE_SIZE = 20;
const MAX_PAGE_SIZE = 50;
const MAX_TAGS = 10;

function parseIntParam(value: string | null, fallback: number): number {
  const n = Number.parseInt(value ?? "", 10);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}

function parseTags(raw: string | null): string[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean)
    .slice(0, MAX_TAGS);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const pageSize = Math.min(
    Math.max(
      parseIntParam(searchParams.get("max_results"), DEFAULT_PAGE_SIZE),
      1,
    ),
    MAX_PAGE_SIZE,
  );
  // Il cursore è un semplice offset sull'elenco in cache.
  const offset = parseIntParam(searchParams.get("next_cursor"), 0);
  const tags = parseTags(searchParams.get("tags"));

  try {
    const all = await getGalleryImages();
    const filtered = tags.length
      ? all.filter((img) =>
          img.tags.some((t) => tags.includes(t.toLowerCase())),
        )
      : all;

    const page = filtered.slice(offset, offset + pageSize);
    const nextOffset = offset + page.length;

    return NextResponse.json(
      {
        // I tag servono solo al filtro lato server: non vengono esposti.
        images: page.map(
          ({ url, publicId, width, height, title, description }) => ({
            url,
            publicId,
            width,
            height,
            title,
            description,
          }),
        ),
        next_cursor: nextOffset < filtered.length ? String(nextOffset) : null,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
        },
      },
    );
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : String(e);
    console.error("[api/gallery]", message);
    return NextResponse.json(
      { error: "Impossibile recuperare le immagini." },
      { status: 502 },
    );
  }
}
