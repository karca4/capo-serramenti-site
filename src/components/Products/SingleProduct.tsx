import {Feature} from "@/types/feature";
import Image from "next/image";

const SingleProduct = ({feature}: { feature: Feature }) => {
  const {image, title, paragraph, featurePage} = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <a href={featurePage ?? "#"} className="inline-block mb-12">
          <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-full items-center justify-center rounded-md">
            <Image
              src={image}
              alt="immagine"
              width={740}
              height={340}
              className="w-full mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"/>
          </div>
        </a>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
