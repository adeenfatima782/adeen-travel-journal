import React, { useEffect, useState } from "react";
import { api } from "../../api/client";

// Blog, Travel Journal, and Gallery — categories for all three pages are managed
// The selected category type loads when the tab changes.
const TABS = [
  { key: "blog", label: "Blog" },
  { key: "journal", label: "Travel Journal" },
  { key: "gallery", label: "Gallery" },
];

const AdminCategories = () => {
  const [activeTab, setActiveTab] = useState("blog");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newName, setNewName] = useState("");
  const [saving, setSaving] = useState(false);

  const loadCategories = async (type) => {
    setLoading(true);
    setError("");
    try {
      const data = await api.get(`/categories?type=${type}`);
      setCategories(data.categories || []);
    } catch (err) {
      setError(err.message || "Unable to load categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories(activeTab);
  }, [activeTab]);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    setSaving(true);
    try {
      const data = await api.post("/categories", { name: newName.trim(), type: activeTab }, { auth: true });
      setCategories((prev) => [...prev, data.category].sort((a, b) => a.name.localeCompare(b.name)));
      setNewName("");
    } catch (err) {
      alert(err.message || "Unable to add category");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`"${name}" category delete karni hai?`)) return;
    try {
      await api.delete(`/categories/${id}`, { auth: true });
      setCategories((prev) => prev.filter((c) => (c._id || c.id) !== id));
    } catch (err) {
      alert(err.message || "Unable to delete");
    }
  };

  return (
    <div>
      <p
        className="font-mono text-gold-dark mb-1"
        style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
      >
        Manage
      </p>
      <h1 className="font-display fw-semibold mb-4">Categories</h1>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`btn btn-sm ${activeTab === tab.key ? "btn-gold" : "btn-outline-ink"}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleAdd} className="d-flex gap-2 mb-4" style={{ maxWidth: "26rem" }}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Nayi category ka naam…"
          className="form-control"
        />
        <button type="submit" className="btn btn-gold" disabled={saving}>
          {saving ? "Adding…" : "Add"}
        </button>
      </form>

      {error && <div className="alert alert-danger">{error}</div>}

      {loading ? (
        <p className="text-stone">Loading…</p>
      ) : categories.length === 0 ? (
        <p className="text-stone">There are no categories for this page yet.</p>
      ) : (
        <div className="d-flex flex-wrap gap-2">
          {categories.map((cat) => {
            const catId = cat._id || cat.id;
            return (
              <span
                key={catId}
                className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}
              >
                {cat.name}
                <button
                  onClick={() => handleDelete(catId, cat.name)}
                  className="btn btn-sm p-0 border-0 text-danger"
                  style={{ lineHeight: 1 }}
                  title="Delete"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminCategories;
