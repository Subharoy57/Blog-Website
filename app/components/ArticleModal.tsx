"use client";

import { useEffect } from "react";

export default function ArticleModal({ blog, onClose }: any) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) =>
      e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 max-w-2xl relative"
      >
        <button onClick={onClose} className="absolute top-2 right-2">
          ✕
        </button>
        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: blog.content_html }} />
      </div>
    </div>
  );
}
