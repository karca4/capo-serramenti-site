import { site } from "../../config/site";
import BlogCard from "../blog/BlogCard";
import SectionTitle from "../common/SectionTitle";

/** Sezione news della home (ultimi 3 articoli): nascosta finché non ce ne sono. */
const BlogSection = () => {
  if (site.blog.length === 0) return null;
  const intro = site.home.blog;

  return (
    <section id="blog" className="py-14 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle {...intro} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {site.blog.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
