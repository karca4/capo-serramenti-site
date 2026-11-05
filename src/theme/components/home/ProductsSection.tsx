import { site } from "../../config/site";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "../products/ProductCard";

const ProductsSection = () => {
  const intro = site.home.products;

  return (
    <section
      id="prodotti"
      className="bg-gray-light dark:bg-gray-dark py-14 md:py-20 lg:py-24"
    >
      <div className="container">
        <SectionTitle {...intro} />
        {/* Su smartphone due colonne compatte: tutta la gamma in poco spazio. */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {site.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
