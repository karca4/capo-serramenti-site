import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import type { BlogPost } from "../../config/types";
import { formatDate } from "../../lib/format";
import { blogPath } from "../../lib/routes";

/** Anteprima di un articolo: l'intera card porta alla pagina dell'articolo. */
const BlogCard = ({ post }: { post: BlogPost }) => {
  const { title, image, excerpt, tags, publishDate } = post;

  return (
    <Link
      href={blogPath(post)}
      className="group dark:bg-dark flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white transition-shadow duration-300 hover:shadow-lg dark:border-white/10"
    >
      <div className="relative aspect-16/9 w-full overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        {tags[0] && (
          <span className="bg-primary absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white">
            {tags[0]}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <time
          dateTime={publishDate}
          className="text-body-color dark:text-body-color-dark mb-2 text-sm"
        >
          {formatDate(publishDate)}
        </time>
        <h3 className="group-hover:text-primary mb-2 text-lg leading-snug font-bold text-black transition-colors sm:text-xl dark:text-white dark:group-hover:text-white">
          {title}
        </h3>
        <p className="text-body-color dark:text-body-color-dark line-clamp-3 text-base leading-relaxed">
          {excerpt}
        </p>
        <span className="text-primary mt-auto flex items-center gap-1 pt-4 text-sm font-semibold dark:text-white/80">
          Leggi l&apos;articolo
          <LuArrowRight
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
