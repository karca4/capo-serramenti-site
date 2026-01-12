import Image from "next/image";
import Link from "next/link";

const RelatedProduct = ({
                          image,
                          title,
                          link,
                          paragraph,
                        }: {
  image: string;
  title: string;
  link: string;
  paragraph: string;
}) => {
  return (
    <div className="flex items-center lg:block xl:flex">
      <div className="mr-5 lg:mb-3 xl:mb-0">
        <div className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]">
          <Image src={image} alt={title} fill/>
        </div>
      </div>
      <div className="w-full">
        <h5>
          <Link
            href={link}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title}
          </Link>
          <span>{paragraph}</span>
        </h5>
      </div>
    </div>
  );
};

export default RelatedProduct;
