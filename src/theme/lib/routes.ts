import type { BlogPost, Product } from "../config/types";

export function productPath(product: Pick<Product, "id">): string {
  return `/product-details/${product.id}`;
}

/** Galleria, filtrata sul prodotto se ha un tag Cloudinary associato. */
export function galleryPath(product?: Pick<Product, "galleryTag">): string {
  return product?.galleryTag
    ? `/gallery?imageTags=${encodeURIComponent(product.galleryTag)}`
    : "/gallery";
}

export function blogPath(post: Pick<BlogPost, "slug">): string {
  return `/blog/${post.slug}`;
}
