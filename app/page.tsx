import { fetchBlogs } from "../lib/api";
import Hero from "./components/Hero";
import ArticleGrid from "./components/ArticleGrid";

export default async function HomePage() {
  const data = await fetchBlogs();
   
  return (
    <>
      <Hero />
      <section className="container mx-auto px-4 py-8">
        <ArticleGrid blogs={data.blogs} />
       
      </section>
    </>
  );
}
