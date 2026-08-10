import React from "react";
import { Link } from "react-router-dom";
import { journeys } from "../../../data/journeys";

const RelatedJourneysSection = ({ groups }) => (
  <section className="mb-5">
    <div className="text-center mb-4">
      <span className="washi-tag">Related Journeys</span>
    </div>
    <div className="row g-4">
      {groups.map((group, i) => (
        <div className="col-sm-6 col-lg-4" key={group.region}>
          <div className="h-100 p-3 paper-card" style={{ "--tilt": `${(i % 2 === 0 ? -1 : 1) * 0.8}deg`, transform: "rotate(var(--tilt))" }}>
            <h3 className="h6 font-signature mb-2" style={{ fontSize: "1.4rem", color: "var(--teal)" }}>{group.region}</h3>
            <div className="d-flex flex-wrap gap-2">
              {group.slugs.map((slug) => {
                const j = journeys.find((x) => x.slug === slug);
                return (
                  <Link key={slug} to={`/journal/${slug}`} className="btn btn-sm btn-outline-ink rounded-pill">
                    {j ? j.place : slug}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default RelatedJourneysSection;
