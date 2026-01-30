"use client";
import Image from "next/image";
import { BlogPost } from "../../types/blog";

interface Props {
  blog: BlogPost;
  onClick: () => void;
}

export default function ArticleCard({ blog, onClick }: Props) {
  const imageSrc = blog.photo_url || "/placeholder.png";

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") onClick();
  };

  return (
    <article
      tabIndex={0}
      role="button"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="cursor-pointer border rounded-lg overflow-hidden hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <Image
        src={imageSrc}
        alt={`Cover image for article titled "${blog.title}"`}
        width={400}
        height={250}
        className="w-full h-[220px] object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg">{blog.title}</h2>

        <p className="text-sm text-gray-600 mt-1">
          {blog.description}
        </p>

        <time
          className="block mt-2 text-xs text-gray-500"
          dateTime={blog.created_at}
        >
          {new Date(blog.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </div>
    </article>
  );
}
