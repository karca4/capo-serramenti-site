import Image from "next/image";
import Link from "next/link";
import { LuCheck, LuChevronRight } from "react-icons/lu";
import { site } from "../../config/site";
import type { ArticleBlock, BlogPost } from "../../config/types";
import { formatDate } from "../../lib/format";
import CtaBand from "../common/CtaBand";
import SectionTitle from "../common/SectionTitle";
import BlogCard from "./BlogCard";

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="pt-4 text-2xl leading-tight font-bold text-black md:text-[1.75rem] dark:text-white">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="pt-2 text-xl leading-snug font-bold text-black md:text-2xl dark:text-white">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="bg-accent mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs text-black">
                <LuCheck aria-hidden />
              </span>
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return <p>{block.text}</p>;
  }
}

/** Pagina di un articolo del blog: percorso, copertina, testo e altri articoli. */
const BlogArticle = ({ post }: { post: BlogPost }) => {
  const others = site.blog.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="pt-24 pb-14 md:pt-32 md:pb-20">
        <div className="container">
          <div className="mx-auto max-w-[760px]">
            <nav aria-label="Percorso" className="mb-4">
              <ol className="text-body-color dark:text-body-color-dark flex flex-wrap items-center gap-1.5 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-primary dark:hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden>
                  <LuChevronRight />
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-primary dark:hover:text-white"
                  >
                    News
                  </Link>
                </li>
                <li aria-hidden>
                  <LuChevronRight />
                </li>
                <li
                  aria-current="page"
                  className="text-primary line-clamp-1 font-medium dark:text-white"
                >
                  {post.title}
                </li>
              </ol>
            </nav>

            <h1 className="mb-4 text-3xl leading-tight font-bold text-black md:text-[2.75rem] dark:text-white">
              {post.title}
            </h1>
            <div className="text-body-color dark:text-body-color-dark mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <time dateTime={post.publishDate}>
                {formatDate(post.publishDate)}
              </time>
              {post.author && <span>di {post.author.name}</span>}
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold dark:bg-white/10 dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Su smartphone la copertina va da bordo a bordo. */}
          <div className="relative -mx-4 mb-10 aspect-16/9 overflow-hidden sm:mx-auto sm:max-w-[960px] sm:rounded-2xl">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="(min-width: 992px) 960px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="text-body-color dark:text-body-color-dark mx-auto max-w-[760px] space-y-5 text-base leading-relaxed md:text-lg">
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="bg-gray-light dark:bg-gray-dark py-14 md:py-20">
          <div className="container">
            <SectionTitle eyebrow="Continua a leggere" title="Altri articoli" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {others.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
};

export default BlogArticle;
