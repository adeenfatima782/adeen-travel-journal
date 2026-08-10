import React, { useState } from "react";
import { api } from "../api/client";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setError("");
    try {
      await api.post("/subscribers", { email: email.trim() });
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Unable to subscribe — please try again.");
    }
  };

  return (
    <section className="newsletter-box text-center">
      <p className="font-mono text-gold mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
        Join the journey
      </p>
      <h3 className="font-display fw-semibold mb-4" style={{ maxWidth: "34rem", margin: "0 auto" }}>
        New stories and photos, straight from the road — no spam, just postcards.
      </h3>

      {status === "success" ? (
        <p className="text-gold mb-0">You're on the list — thank you for coming along.</p>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row gap-3 justify-content-center" style={{ maxWidth: "28rem", margin: "0 auto" }}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="form-control flex-grow-1"
              style={{ borderRadius: "999px", border: "none", padding: "0.75rem 1.25rem" }}
            />
            <button type="submit" className="btn btn-gold" disabled={status === "loading"}>
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
          {status === "error" && (
            <p className="text-gold mb-0 mt-2" style={{ fontSize: "0.85rem" }}>{error}</p>
          )}
        </>
      )}
    </section>
  );
};

export default Newsletter;
