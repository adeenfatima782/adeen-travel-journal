import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/client";

const AdminPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await api.get("/posts/admin/all", { auth: true });
      setPosts(data.posts || []);
    } catch (err) {
      setError(err.message || "Unable to load posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) return;
    try {
      await api.delete(`/posts/${id}`, { auth: true });
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      alert(err.message || "Unable to delete");
    }
  };

  const togglePublish = async (post) => {
    try {
      const data = await api.put(`/posts/${post.id}`, { published: !post.published }, { auth: true });
      setPosts((prev) => prev.map((p) => (p.id === post.id ? data.post : p)));
    } catch (err) {
      alert(err.message || "Unable to update");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <p className="font-mono text-gold-dark mb-1" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Manage
          </p>
          <h1 className="font-display fw-semibold mb-0">Posts</h1>
        </div>
        <Link to="/admin/posts/new" className="btn btn-gold btn-sm">
          <i className="bi bi-plus-lg me-1"></i>New Post
        </Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {loading ? (
        <p className="text-stone">Loading…</p>
      ) : posts.length === 0 ? (
        <p className="text-stone">There are no posts yet. Create your first post with "New Post".</p>
      ) : (
        <div className="table-responsive rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
          <table className="table align-middle mb-0">
            <thead>
              <tr className="font-mono small text-stone" style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>
                <th className="px-3">Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Views</th>
                <th>Likes</th>
                <th className="text-end px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td className="px-3">
                    <p className="fw-semibold mb-0">{post.title}</p>
                    <p className="text-stone small mb-0">{post.slug}</p>
                  </td>
                  <td>{post.category}</td>
                  <td>
                    <button
                      onClick={() => togglePublish(post)}
                      className={`badge border-0 ${post.published ? "bg-success-subtle text-success" : "bg-secondary-subtle text-secondary"}`}
                      style={{ cursor: "pointer" }}
                    >
                      {post.published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td>{post.views}</td>
                  <td>{post.likes}</td>
                  <td className="text-end px-3">
                    <Link to={`/admin/posts/${post.id}/edit`} className="btn btn-sm btn-outline-ink me-2">
                      <i className="bi bi-pencil"></i>
                    </Link>
                    <button onClick={() => handleDelete(post.id, post.title)} className="btn btn-sm btn-outline-danger">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPosts;
