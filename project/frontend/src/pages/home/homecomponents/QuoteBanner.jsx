import React from "react";

const QuoteBanner = ({ text }) => (
  <section className="text-center py-5 my-4">
    <i className="bi bi-quote text-gold" style={{ fontSize: "2.5rem", lineHeight: 0.5 }}></i>
    <p
      className="font-display fst-italic mx-auto mt-3"
      style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", maxWidth: "42rem", lineHeight: 1.4, color: "var(--ink)" }}
    >
      {text}
    </p>
    <p className="font-mono text-stone mt-3" style={{ fontSize: "0.78rem", letterSpacing: "0.1em" }}>— Adeen Fatima</p>
  </section>
);

export default QuoteBanner;
