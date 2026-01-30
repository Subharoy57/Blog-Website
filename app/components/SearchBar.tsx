"use client";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
}

export default function SearchBar({
  query,
  setQuery,
}: SearchBarProps) {
  return (
    <div className="mb-4">
      <label htmlFor="search" className="sr-only">
        Search articles
      </label>

      <input
        id="search"
        type="search"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
