export async function fetchBlogs() {
  const res = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10",{ next:{revalidate:3600}});
  if(!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}