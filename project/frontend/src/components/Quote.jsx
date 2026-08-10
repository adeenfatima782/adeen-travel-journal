import React from "react";

// A styled pull-quote used across post detail pages and the About/Home pages.
// Attributed to Adeen herself — original lines, not sourced from anyone else.
const Quote = ({ text, author = "Adeen Fatima" }) => (
  <blockquote
    className="my-5 py-4 px-4 px-md-5 position-relative"
    style={{ borderLeft: "3px solid var(--gold)", background: "var(--sand-deep)", borderRadius: "0 0.75rem 0.75rem 0" }}
  >
    <i className="bi bi-quote text-gold" style={{ fontSize: "1.8rem", lineHeight: 0.5 }}></i>
    <p className="font-display fst-italic mb-2" style={{ fontSize: "1.35rem", lineHeight: 1.5, color: "var(--ink)" }}>
      {text}
    </p>
    <footer className="font-mono text-stone" style={{ fontSize: "0.75rem", letterSpacing: "0.08em" }}>
      — {author}
    </footer>
  </blockquote>
);

export default Quote;
