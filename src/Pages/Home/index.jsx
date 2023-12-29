import Navigation from "../../Components/Navigation/Index";
import BlogCard from "../../Components/BlogCard";
import { useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([
    "Blog 1",
    "Blog 2",
    "Blog 3",
    "Blog 4",
    "Blog 5",
    "Blog 6",
    "Blog 7",
    "Blog 8",
  ]);
  return (
    <div className="container">
      <Navigation />
      <div className="row row-gap-3" id="blog-listing-container">
        {blogs.map((blog, index) => (
          <BlogCard key={`blog-${index}`} />
        ))}
      </div>
    </div>
  );
}
