import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import type { Product } from "../../config/types";
import { productPath } from "../../lib/routes";

const ProductCard = ({ product }: { product: Product }) => {
  const { image, title, summary } = product;

  return (
    <Link
      href={productPath(product)}
      className="group dark:bg-dark flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white transition-shadow duration-300 hover:shadow-lg dark:border-white/10"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1200px) 25vw, (min-width: 992px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="bg-primary/5 h-full w-full" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-3.5 sm:p-5">
        <h3 className="group-hover:text-primary text-[0.95rem] leading-snug font-semibold text-black transition-colors sm:text-lg dark:text-white dark:group-hover:text-white">
          {title}
        </h3>
        <p className="text-body-color dark:text-body-color-dark mt-1.5 hidden text-sm leading-relaxed sm:line-clamp-3">
          {summary}
        </p>
        <span className="text-primary mt-auto flex items-center gap-1 pt-3 text-sm font-semibold dark:text-white/80">
          Scopri
          <LuArrowRight
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
