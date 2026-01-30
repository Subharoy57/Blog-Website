"use client";
import { useMemo, useState } from "react";
import { BlogPost } from "../../types/blog";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ArticleCard from "./ArticleCard";
import ArticleModal from "./ArticleModal";

interface ArticleGridProps {
  blogs: BlogPost[];
}

export default function ArticleGrid({ blogs }: ArticleGridProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(blogs.map((b) => b.category).filter(Boolean))
    );
    return ["All", ...unique];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    const q = query.toLowerCase();

    return blogs.filter((b) => {
      const matchesQuery =
        b.title.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.content_text.toLowerCase().includes(q);

      const matchesCategory =
        category === "All" || b.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [blogs, query, category]);

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />

      <CategoryFilter
        categories={categories}
        active={category}
        setActive={setCategory}
      />

      <p className="mb-4 text-sm text-gray-600">
        {filteredBlogs.length} results found
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <ArticleCard
            key={blog.id}
            blog={blog}
            onClick={() => setSelectedBlog(blog)}
          />
        ))}
      </div>

      {selectedBlog && (
        <ArticleModal
          blog={selectedBlog}
          onClose={() => setSelectedBlog(null)}
        />
      )}
    </>
  );
}

