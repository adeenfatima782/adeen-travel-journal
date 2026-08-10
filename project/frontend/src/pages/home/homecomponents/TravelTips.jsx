import React from "react";

const tips = [
  { icon: "bi-wallet2", title: "Budget Tips", text: "How to travel the north without overspending on the obvious tourist traps." },
  { icon: "bi-shield-check", title: "Safety Tips", text: "What I actually do differently when travelling solo, especially as a woman." },
  { icon: "bi-camera", title: "Camera Tips", text: "Small habits that improved my photography more than any piece of gear." },
  { icon: "bi-bag-check", title: "Packing Tips", text: "What's always in my bag, and what I've learned to stop bringing." },
];

const TravelTips = () => (
  <section className="py-5">
    <div className="text-center mb-5">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
        Travel Tips
      </p>
      <h2 className="font-display fw-semibold">Little Things That Help</h2>
    </div>
    <div className="row g-4">
      {tips.map((t) => (
        <div className="col-6 col-md-3" key={t.title}>
          <div className="h-100 p-3 rounded-3 text-center" style={{ background: "var(--sand-deep)" }}>
            <i className={`bi ${t.icon} text-gold-dark mb-2 d-block`} style={{ fontSize: "1.6rem" }}></i>
            <p className="fw-semibold small mb-1">{t.title}</p>
            <p className="text-stone mb-0" style={{ fontSize: "0.78rem" }}>{t.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TravelTips;
