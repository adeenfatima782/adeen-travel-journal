import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/client";
import ImageUploadField from "./ImageUploadField";

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  category: "Travel Diaries",
  location: "",
  cover: "",
  date: "",
  content: "",
  tags: "",
  quote: "",
  readingTime: 5,
  published: true,
};

const AdminPostForm = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
      .get("/categories?type=blog")
      .then((data) => setCategories(data.categories || []))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!isEdit) return;
    const load = async () => {
      try {
        // Search the admin list so both published and draft posts can be found
        const data = await api.get("/posts/admin/all", { auth: true });
        const post = (data.posts || []).find((p) => p.id === id);
        if (!post) {
          setError("Post not found");
          return;
        }
        setForm({
          title: post.title || "",
          slug: post.slug || "",
          excerpt: post.excerpt || "",
          category: post.category || "Travel Diaries",
          location: post.location || "",
          cover: post.cover || "",
          date: post.date ? post.date.slice(0, 10) : "",
          content: (post.content || []).join("\n\n"),
          tags: (post.tags || []).join(", "),
          quote: post.quote || "",
          readingTime: post.readingTime || 5,
          published: post.published,
        });
      } catch (err) {
        setError(err.message || "Unable to load");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    const payload = {
      ...form,
      readingTime: Number(form.readingTime) || 5,
      content: form.content
        .split("\n\n")
        .map((p) => p.trim())
        .filter(Boolean),
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };
    if (!payload.slug) delete payload.slug; // The backend will generate it from the title

    try {
      if (isEdit) {
        await api.put(`/posts/${id}`, payload, { auth: true });
      } else {
        await api.post("/posts", payload, { auth: true });
      }
      navigate("/admin/posts");
    } catch (err) {
      setError(err.message || "Unable to save");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-stone">Loading…</p>;

  return (
    <div>
      <p className="font-mono text-gold-dark mb-1" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        {isEdit ? "Edit" : "New"}
      </p>
      <h1 className="font-display fw-semibold mb-4">{isEdit ? "Edit Post" : "Create Post"}</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="p-4 rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
        <div className="row g-3">
          <div className="col-md-8">
            <label className="form-label font-mono small text-stone">Title</label>
            <input required name="title" value={form.title} onChange={handleChange} className="form-control form-control-custom" />
          </div>
          <div className="col-md-4">
            <label className="form-label font-mono small text-stone">Category</label>
            <select name="category" value={form.category} onChange={handleChange} className="form-select form-control-custom">
              {categories.length === 0 && <option>{form.category}</option>}
              {categories.map((cat) => (
                <option key={cat._id || cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
            <p className="form-text mb-0">
              Need a new category? Add it from the <a href="/admin/categories">Categories page</a>.
            </p>
          </div>

          <div className="col-md-6">
            <label className="form-label font-mono small text-stone">Slug (leave blank — it will be generated from the title)</label>
            <input name="slug" value={form.slug} onChange={handleChange} className="form-control form-control-custom" placeholder="auto-generated" />
          </div>
          <div className="col-md-6">
            <label className="form-label font-mono small text-stone">Location</label>
            <input name="location" value={form.location} onChange={handleChange} className="form-control form-control-custom" />
          </div>

          <div className="col-12">
            <label className="form-label font-mono small text-stone">Excerpt</label>
            <textarea required rows={2} name="excerpt" value={form.excerpt} onChange={handleChange} className="form-control form-control-custom"></textarea>
          </div>

          <div className="col-md-8">
            <ImageUploadField label="Cover image" value={form.cover} onChange={(url) => setForm((f) => ({ ...f, cover: url }))} required />
          </div>
          <div className="col-md-4">
            <label className="form-label font-mono small text-stone">Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} className="form-control form-control-custom" />
          </div>

          <div className="col-12">
            <label className="form-label font-mono small text-stone">
              Content — leave one blank line between each paragraph
            </label>
            <textarea required rows={10} name="content" value={form.content} onChange={handleChange} className="form-control form-control-custom"></textarea>
          </div>

          <div className="col-md-8">
            <label className="form-label font-mono small text-stone">Tags (separate with commas)</label>
            <input name="tags" value={form.tags} onChange={handleChange} className="form-control form-control-custom" placeholder="Hunza, Travel, Pakistan" />
          </div>
          <div className="col-md-4">
            <label className="form-label font-mono small text-stone">Reading time (minutes)</label>
            <input type="number" min="1" name="readingTime" value={form.readingTime} onChange={handleChange} className="form-control form-control-custom" />
          </div>

          <div className="col-12">
            <label className="form-label font-mono small text-stone">Pull quote (optional)</label>
            <input name="quote" value={form.quote} onChange={handleChange} className="form-control form-control-custom" />
          </div>

          <div className="col-12 d-flex align-items-center gap-2">
            <input type="checkbox" id="published" name="published" checked={form.published} onChange={handleChange} className="form-check-input mt-0" />
            <label htmlFor="published" className="form-check-label small text-stone">Published (uncheck for draft)</label>
          </div>
        </div>

        <button type="submit" className="btn btn-gold mt-4" disabled={saving}>
          {saving ? "Saving…" : isEdit ? "Save Changes" : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default AdminPostForm;
