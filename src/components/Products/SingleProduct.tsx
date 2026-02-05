import { Feature } from "@/types/feature";

const SingleProduct = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, featurePage } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <a href={featurePage ?? "#"} className="inline-block mb-6">
          <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md">
            {icon}
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
