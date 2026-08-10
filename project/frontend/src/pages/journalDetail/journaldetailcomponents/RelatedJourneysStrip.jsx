import React from "react";
import { Link } from "react-router-dom";
import { journeys } from "../../../data/journeys";

const RelatedJourneysStrip = ({ group, currentSlug }) => {
  if (!group) return null;
  const related = group.slugs
    .map((slug) => journeys.find((j) => j.slug === slug))
    .filter((j) => j && j.slug !== currentSlug)
    .slice(0, 4);
  if (related.length === 0) return null;

  return (
    <section className="mt-5 pt-5" style={{ borderTop: "2px dashed rgba(31,75,76,0.25)" }}>
      <span className="washi-tag mb-4">More From {group.region}</span>
      <div className="row g-4 mt-1">
        {related.map((j, i) => (
          <div className="col-6 col-md-3" key={j.slug}>
            <Link to={`/journal/${j.slug}`} className="text-decoration-none d-block">
              <div className="polaroid" style={{ "--tilt": `${(i % 2 === 0 ? -1 : 1) * 2}deg` }}>
                <img src={j.cover} alt={j.place} />
                <p className="polaroid-cap mb-0">{j.place}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedJourneysStrip;
