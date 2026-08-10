import React from "react";
import BlogPostCard from "./BlogPostCard";

const BlogResults = ({ posts }) => {
  if (posts.length === 0) {
    return <p className="text-stone text-center py-5">No entries match your search — try another keyword or category.</p>;
  }

  return (
    <div className="row g-4">
      {posts.map((post) => (
        <div className="col-sm-6 col-lg-4" key={post.id}>
          <BlogPostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogResults;
