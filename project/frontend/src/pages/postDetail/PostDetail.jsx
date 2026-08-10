import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReadingProgressBar from "./postdetailcomponents/ReadingProgressBar";
import PostHeader from "./postdetailcomponents/PostHeader";
import PostBody from "./postdetailcomponents/PostBody";
import PrevNextNav from "./postdetailcomponents/PrevNextNav";
import RecommendedReading from "./postdetailcomponents/RecommendedReading";
import { api } from "../../api/client";

const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setNotFound(false);

    const load = async () => {
      try {
        const [postData, listData] = await Promise.all([
          api.get(`/posts/${slug}`),
          api.get("/posts?limit=100"),
        ]);
        if (!isMounted) return;
        setPost(postData.post);
        setAllPosts(listData.posts || []);
      } catch (err) {
        if (isMounted) setNotFound(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return <div className="container text-center py-5"><p className="text-stone">Loading…</p></div>;
  }

  if (notFound || !post) {
    return (
      <div className="container text-center py-5">
        <p className="text-stone">Post not found.</p>
        <Link to="/" className="link-underline fw-semibold">Back home</Link>
      </div>
    );
  }

  const index = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = allPosts.length ? allPosts[(index - 1 + allPosts.length) % allPosts.length] : null;
  const nextPost = allPosts.length ? allPosts[(index + 1) % allPosts.length] : null;
  const recommended = allPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  return (
    <article className="container py-5" style={{ maxWidth: "48rem" }}>
      <ReadingProgressBar />
      <PostHeader post={post} />
      <PostBody post={post} />
      <PrevNextNav prevPost={prevPost} nextPost={nextPost} />
      <RecommendedReading posts={recommended} />
    </article>
  );
};

export default PostDetail;
