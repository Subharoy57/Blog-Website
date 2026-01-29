"use client";

export default function CategoryFilter({
  categories,
  active,
  setActive,
}: any) {
  return (
    <div className="flex gap-2 flex-wrap mb-4">
      {categories.map((c: string) => (
        <button
          key={c}
          onClick={() => setActive(c)}
          className={`px-3 py-1 border rounded ${
            active === c ? "bg-black text-white" : ""
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}


