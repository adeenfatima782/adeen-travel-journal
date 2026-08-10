import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../../../components/PostCard";

const RecentEntries = ({ posts }) => (
  <section className="py-4">
    <div className="d-flex justify-content-between align-items-end mb-5">
      <h2 className="font-display fw-semibold mb-0">Recent Entries</h2>
      <Link to="/blog" className="link-underline font-mono text-stone small">View all →</Link>
    </div>
    <div className="row g-5">
      {posts.map((post) => (
        <div className="col-sm-6 col-lg-4" key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  </section>
);

export default RecentEntries;
