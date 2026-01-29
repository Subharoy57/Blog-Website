"use client";
import Image from "next/image";

export default function ArticleCard({ blog, onClick }: any) {
  if (!blog?.photo_url) return null;

  return (
    <article
      tabIndex={0}
      onClick={onClick}
      className="cursor-pointer border rounded-lg overflow-hidden hover:shadow-lg transition"
    >
      <Image
        src={blog.photo_url}
        alt={blog.title}
        width={400}
        height={250}
        className="w-full h-[220px] object-cover"
        priority={false}
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{blog.title}</h2>
        <p className="text-sm text-gray-600 mt-1">{blog.description}</p>
        <time className="block mt-2 text-xs text-gray-500">
          {new Date(blog.created_at).toDateString()}
        </time>
      </div>
    </article>
  );
}
