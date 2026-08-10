import React, { useEffect, useMemo, useState } from "react";
import BlogHero from "./blogcomponents/BlogHero";
import CategoryShowcase from "./blogcomponents/CategoryShowcase";
import FeaturedSeries from "./blogcomponents/FeaturedSeries";
import FeaturedBlog from "./blogcomponents/FeaturedBlog";
import BlogToolbar from "./blogcomponents/BlogToolbar";
import BlogResults from "./blogcomponents/BlogResults";
import TrendingBlogs from "./blogcomponents/TrendingBlogs";
import MostRead from "./blogcomponents/MostRead";
import ReaderFavorites from "./blogcomponents/ReaderFavorites";
import ReaderQuestions from "./blogcomponents/ReaderQuestions";
import PopularTags from "./blogcomponents/PopularTags";
import RelatedBlogsStrip from "./blogcomponents/RelatedBlogsStrip";
import Newsletter from "../../components/Newsletter";
import { readerQuestions } from "../../data/samplePosts";
import { api } from "../../api/client";

const BlogPage = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await api.get("/posts?limit=100");
        setPosts(data.posts || []);
      } catch (err) {
        setError("Unable to load posts — please check whether the backend is running.");
      } finally {
        setLoading(false);
      }
    };
    loadPosts();

    api
      .get("/categories?type=blog")
      .then((data) => setCategories(data.categories || []))
      .catch(() => {});
  }, []);

  const featuredPost = useMemo(
    () => (posts.length ? [...posts].sort((a, b) => b.views - a.views)[0] : null),
    [posts]
  );

  const byViews = useMemo(() => [...posts].sort((a, b) => b.views - a.views), [posts]);
  const trendingPosts = useMemo(() => byViews.slice(0, 6), [byViews]);
  const mostReadPosts = useMemo(() => byViews.slice(0, 5), [byViews]);
  const favoritePosts = useMemo(() => [...posts].sort((a, b) => b.likes - a.likes).slice(0, 4), [posts]);
  const relatedPosts = useMemo(
    () =>
      featuredPost
        ? [...posts].filter((p) => p.id !== featuredPost.id).sort(() => 0.5 - Math.random()).slice(0, 3)
        : [],
    [posts, featuredPost]
  );

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.category === categories.find((c) => c.slug === activeCategory)?.name;
      const q = query.toLowerCase();
      const matchesQuery =
        !query.trim() ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        (post.location || "").toLowerCase().includes(q) ||
        (post.tags || []).some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, activeCategory]);

  const jumpToResults = (keyword) => {
    setActiveCategory("all");
    setQuery(keyword);
    const el = document.getElementById("blog-results");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <p className="text-stone">Loading posts…</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <BlogHero />
      <CategoryShowcase onSelect={jumpToResults} />
      <FeaturedSeries onSelect={jumpToResults} />

      {error && <div className="alert alert-warning">{error}</div>}

      {!posts.length && !error ? (
        <div className="text-center py-5">
          <p className="text-stone">No posts have been published yet — add your first post from the admin dashboard.</p>
        </div>
      ) : (
        <>
          <FeaturedBlog post={featuredPost} />

          <div id="blog-results">
            <BlogToolbar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              query={query}
              setQuery={setQuery}
              categories={categories}
            />
            <BlogResults posts={filtered} />
          </div>

          <hr className="route-divider my-5" />

          <TrendingBlogs posts={trendingPosts} />
          <MostRead posts={mostReadPosts} />

          <ReaderFavorites posts={favoritePosts} />
          <ReaderQuestions questions={readerQuestions} />

          <PopularTags onSelect={jumpToResults} />
          <RelatedBlogsStrip posts={relatedPosts} />
        </>
      )}

      <Newsletter />
    </div>
  );
};

export default BlogPage;
