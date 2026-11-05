import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/theme/components/blog/BlogArticle";
import { site } from "@/theme/config/site";
import { blogPath } from "@/theme/lib/routes";
import {
  blogPostingJsonLd,
  breadcrumbJsonLd,
  jsonLdScript,
} from "@/theme/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

// Solo gli articoli configurati: qualunque altro slug risponde 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return site.blog.map((p) => ({ slug: p.slug }));
}

function findPost(slug: string) {
  return site.blog.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};
  const title = post.seo?.title ?? post.title;
  const description = post.seo?.description ?? post.excerpt;
  const path = blogPath(post);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title,
      description,
      url: path,
      images: [post.image],
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate ?? post.publishDate,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  const path = blogPath(post);
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "News", path: "/blog" },
      { name: post.title, path },
    ]),
    blogPostingJsonLd(post, path),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
      <BlogArticle post={post} />
    </>
  );
}
