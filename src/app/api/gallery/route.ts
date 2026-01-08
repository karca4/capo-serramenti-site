import {NextResponse} from "next/server";
import axios from "axios";

export interface CloudinaryResource {
  secure_url: string;
  public_id: string;
  context?: {
    custom?: {
      caption?: string;
    };
  };
}

// Cloudinary config from env
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;
const FOLDER_NAME = "CAPOSERRAMENTI";

export async function GET(req: Request) {
  if (!API_KEY || !API_SECRET || !CLOUD_NAME) {
    return NextResponse.json({error: "Cloudinary credentials not set"}, {status: 500});
  }

  const {searchParams} = new URL(req.url);
  const max_results = parseInt(searchParams.get("max_results") || "30", 10);
  const next_cursor = searchParams.get("next_cursor") || undefined;
  const tagsParam = searchParams.get("tags");
  let expression = `folder:${FOLDER_NAME}`;
  if (tagsParam) {
    const tags = tagsParam.split(",").map(t => t.trim()).filter(Boolean);
    if (tags.length > 0) {
      expression += ` AND tags=(${tags.join(" OR ")})`;
    }
  }

  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`;
  const dataBody: { expression: string, max_results: number, next_cursor?: string } = {
    expression,
    max_results,
  };
  if (next_cursor) dataBody.next_cursor = next_cursor;

  try {
    const res = await axios.post(url, dataBody, {
      auth: {
        username: API_KEY,
        password: API_SECRET,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = res.data;
    const images = (data.resources || []).map((img: CloudinaryResource) => ({
      url: img.secure_url,
      title: img.public_id,
      description: img.context?.custom?.caption || "",
    }));

    return NextResponse.json({images, next_cursor: data.next_cursor || null});

  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : String(e);
    return NextResponse.json({error: message}, {status: 500});
  }
}
