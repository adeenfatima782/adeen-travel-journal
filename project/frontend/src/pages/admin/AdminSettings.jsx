import React, { useState } from "react";
import { api } from "../../api/client";

const AdminSettings = () => {
  const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.newPassword !== form.confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    setSaving(true);
    try {
      await api.put(
        "/auth/change-password",
        { currentPassword: form.currentPassword, newPassword: form.newPassword },
        { auth: true }
      );
      setSuccess("Password changed.");
      setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err) {
      setError(err.message || "Password could not be changed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <p className="font-mono text-gold-dark mb-1" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Account
      </p>
      <h1 className="font-display fw-semibold mb-4">Settings</h1>

      <div className="p-4 rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)", maxWidth: "30rem" }}>
        <h2 className="h6 font-mono text-stone mb-3">Change Password</h2>

        {error && <div className="alert alert-danger py-2 small">{error}</div>}
        {success && <div className="alert alert-success py-2 small">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label font-mono small text-stone">Current password</label>
            <input required type="password" name="currentPassword" value={form.currentPassword} onChange={handleChange} className="form-control form-control-custom" />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono small text-stone">New password</label>
            <input required type="password" minLength={6} name="newPassword" value={form.newPassword} onChange={handleChange} className="form-control form-control-custom" />
          </div>
          <div className="mb-4">
            <label className="form-label font-mono small text-stone">Confirm new password</label>
            <input required type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} className="form-control form-control-custom" />
          </div>
          <button type="submit" className="btn btn-gold" disabled={saving}>
            {saving ? "Saving…" : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSettings;
