import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import {Metadata} from "next";

export const metadata: Metadata = {
  title: "News e Novità | Capo Serramenti – Aggiornamenti su Serramenti e Infissi",
  description: "Resta aggiornato con le ultime novità di Capo Serramenti: nuovi prodotti, progetti realizzati, consigli su serramenti, infissi e zanzariere su misura a Capaccio Paestum.",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="News"
        description="Novità, progetti, consigli e aggiornamenti su serramenti, infissi e zanzariere su misura a Capaccio Paestum e Salerno."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
