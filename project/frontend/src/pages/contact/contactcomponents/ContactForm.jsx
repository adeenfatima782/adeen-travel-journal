import React, { useState } from "react";
import { api } from "../../../api/client";

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await api.post("/contact", form);
      setSent(true);
    } catch (err) {
      setError(err.message || "There was a problem sending the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="p-5 rounded-3 text-center" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
        <p className="text-teal fw-semibold mb-0">Thanks for reaching out — I'll reply soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 p-md-5 rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
      {error && <div className="alert alert-danger py-2 small">{error}</div>}
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label font-mono small text-stone">Your name</label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control form-control-custom"
            placeholder="Full name"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label font-mono small text-stone">Your email</label>
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
        <div className="col-12">
          <label className="form-label font-mono small text-stone">Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="form-control form-control-custom"
            placeholder="What's this about?"
          />
        </div>
        <div className="col-12">
          <label className="form-label font-mono small text-stone">Message</label>
          <textarea
            required
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            className="form-control form-control-custom"
            placeholder="Tell me a bit more…"
          ></textarea>
        </div>
      </div>
      <button type="submit" className="btn btn-gold mt-4" disabled={loading}>
        {loading ? "Sending…" : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
