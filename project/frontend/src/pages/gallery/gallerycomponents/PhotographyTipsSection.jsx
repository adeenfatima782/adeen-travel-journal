import React from "react";
import { Link } from "react-router-dom";

const PhotographyTipsSection = ({ tips }) => (
  <section className="mb-5">
    <div className="text-center mb-4">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Learn
      </p>
      <h2 className="font-display fw-semibold h3 mb-0">Photography Tips</h2>
    </div>
    <div className="row g-3">
      {tips.map((tip) => (
        <div className="col-sm-6 col-lg-3" key={tip.title}>
          <Link to={`/post/${tip.slug}`} className="text-decoration-none text-reset d-block h-100">
            <div className="h-100 p-4 rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.08)" }}>
              <i className={`bi ${tip.icon} text-gold-dark`} style={{ fontSize: "1.6rem" }}></i>
              <h3 className="h6 font-display fw-semibold mt-3 mb-2">{tip.title}</h3>
              <p className="text-stone small mb-0">{tip.summary}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default PhotographyTipsSection;
