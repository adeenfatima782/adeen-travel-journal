import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../api/client";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [setupDone, setSetupDone] = useState(true);

  useEffect(() => {
    api
      .get("/auth/setup-status")
      .then((data) => setSetupDone(data.setupDone))
      .catch(() => setSetupDone(true));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await api.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("admin", JSON.stringify(data.admin));
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="w-100 p-4 p-md-5 rounded-3" style={{ maxWidth: "26rem", background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
        <p className="font-mono text-gold-dark mb-2 text-center" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Admin Access
        </p>
        <h1 className="font-display fw-semibold text-center mb-4">Log In</h1>

        {!setupDone && (
          <div className="alert alert-warning small">
            No admin account has been created yet — <Link to="/admin/setup" className="fw-semibold">create an account first</Link>.
          </div>
        )}

        {error && <div className="alert alert-danger py-2 small">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label font-mono small text-stone">Email</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control form-control-custom"
              placeholder="you@email.com"
            />
          </div>
          <div className="mb-4">
            <label className="form-label font-mono small text-stone">Password</label>
            <input
              required
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="form-control form-control-custom"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="btn btn-gold w-100" disabled={loading}>
            {loading ? "Logging in…" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
