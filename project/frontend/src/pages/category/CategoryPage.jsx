import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/PostCard";
import CategoryHeader from "./categorycomponents/CategoryHeader";
import { api } from "../../api/client";

const CategoryPage = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const catData = await api.get("/categories?type=blog");
        const match = (catData.categories || []).find((c) => c.slug === slug);
        setCategory(match || null);
        if (match) {
          const data = await api.get(`/posts?category=${encodeURIComponent(match.name)}&limit=100`);
          setPosts(data.posts || []);
        } else {
          setPosts([]);
        }
      } catch (err) {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug]);

  return (
    <div className="container py-5">
      <CategoryHeader name={category?.name} />
      {loading ? (
        <p className="text-stone">Loading…</p>
      ) : (
        <>
          <div className="row g-5">
            {posts.map((post) => (
              <div className="col-sm-6 col-lg-4" key={post.id}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
          {posts.length === 0 && <p className="text-stone">More entries coming soon.</p>}
        </>
      )}
    </div>
  );
};

export default CategoryPage;
