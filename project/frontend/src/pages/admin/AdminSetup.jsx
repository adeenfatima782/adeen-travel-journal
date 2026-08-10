import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../api/client";

const AdminSetup = () => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [alreadyDone, setAlreadyDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get("/auth/setup-status")
      .then((data) => setAlreadyDone(data.setupDone))
      .catch(() => setAlreadyDone(false))
      .finally(() => setChecking(false));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm) {
      setError("Password and confirm password do not match.");
      return;
    }

    setLoading(true);
    try {
      const data = await api.post("/auth/setup", {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("admin", JSON.stringify(data.admin));
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Setup could not be completed");
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return <div className="container py-5 text-center"><p className="text-stone">Checking…</p></div>;
  }

  if (alreadyDone) {
    return (
      <div className="container py-5 d-flex justify-content-center">
        <div className="w-100 p-4 p-md-5 rounded-3 text-center" style={{ maxWidth: "26rem", background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
          <p className="text-stone mb-3">Setup is already complete — this page is now disabled.</p>
          <Link to="/admin/login" className="btn btn-gold">Log in</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="w-100 p-4 p-md-5 rounded-3" style={{ maxWidth: "28rem", background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
        <p className="font-mono text-gold-dark mb-2 text-center" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          One-Time Setup
        </p>
        <h1 className="font-display fw-semibold text-center mb-2">Create Your Admin Account</h1>
        <p className="text-stone small text-center mb-4">
          This form will work only once. It will be permanently disabled as soon as an account is created.
        </p>

        {error && <div className="alert alert-danger py-2 small">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label font-mono small text-stone">Name</label>
            <input required name="name" value={form.name} onChange={handleChange} className="form-control form-control-custom" />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono small text-stone">Email</label>
            <input required type="email" name="email" value={form.email} onChange={handleChange} className="form-control form-control-custom" />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono small text-stone">Password</label>
            <input required type="password" minLength={6} name="password" value={form.password} onChange={handleChange} className="form-control form-control-custom" />
          </div>
          <div className="mb-4">
            <label className="form-label font-mono small text-stone">Confirm Password</label>
            <input required type="password" name="confirm" value={form.confirm} onChange={handleChange} className="form-control form-control-custom" />
          </div>
          <button type="submit" className="btn btn-gold w-100" disabled={loading}>
            {loading ? "Creating…" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSetup;
