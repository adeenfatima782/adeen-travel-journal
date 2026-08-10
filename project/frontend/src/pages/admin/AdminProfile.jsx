import React, { useEffect, useState } from "react";
import { api } from "../../api/client";

const AdminProfile = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    api
      .get("/auth/me", { auth: true })
      .then((data) => setForm({ name: data.admin.name, email: data.admin.email }))
      .catch((err) => setError(err.message || "Unable to load"))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);
    try {
      const data = await api.put("/auth/me", form, { auth: true });
      localStorage.setItem("admin", JSON.stringify(data.admin));
      setSuccess("Profile updated.");
    } catch (err) {
      setError(err.message || "Unable to update");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-stone">Loading…</p>;

  return (
    <div>
      <p className="font-mono text-gold-dark mb-1" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Account
      </p>
      <h1 className="font-display fw-semibold mb-4">Profile</h1>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit} className="p-4 rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)", maxWidth: "30rem" }}>
        <div className="mb-3">
          <label className="form-label font-mono small text-stone">Name</label>
          <input required name="name" value={form.name} onChange={handleChange} className="form-control form-control-custom" />
        </div>
        <div className="mb-4">
          <label className="form-label font-mono small text-stone">Email</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} className="form-control form-control-custom" />
        </div>
        <button type="submit" className="btn btn-gold" disabled={saving}>
          {saving ? "Saving…" : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default AdminProfile;
