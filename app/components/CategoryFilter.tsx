"use client";

interface Props {
  categories: string[];
  active: string;
  setActive: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  setActive,
}: Props) {
  // Ensure "All" appears only once
  const uniqueCategories = Array.from(
    new Set(["All", ...categories])
  );

  return (
    <section aria-labelledby="category-filter" className="mb-6">
      <h3 id="category-filter" className="sr-only">
        Filter articles by category
      </h3>

      <div className="flex gap-2 flex-wrap">
        {uniqueCategories.map((category) => {
          const isActive = active === category;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(category)}
              className={`px-3 py-1 rounded border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
}
