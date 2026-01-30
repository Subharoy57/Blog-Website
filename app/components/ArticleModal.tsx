"use client";
import { useEffect, useRef } from "react";
import { BlogPost } from "../../types/blog";


interface Props {
  blog: BlogPost;
  onClose: () => void;
}

export default function ArticleModal({ blog, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          "button, a, input, textarea"
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative rounded"
      >
        <button
          onClick={onClose}
          aria-label="Close article"
          className="absolute top-2 right-2 text-xl"
        >
          ✕
        </button>

        <h2 id="article-title" className="text-xl font-bold mb-4">
          {blog.title}
        </h2>

        <article
          dangerouslySetInnerHTML={{ __html: blog.content_html }}
        />
      </div>
    </div>
  );
}

