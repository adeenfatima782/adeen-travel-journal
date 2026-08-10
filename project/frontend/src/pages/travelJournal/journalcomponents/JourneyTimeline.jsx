import React from "react";
import { Link } from "react-router-dom";
import { journeyYears, journeys } from "../../../data/journeys";

const JourneyTimeline = () => (
  <section id="timeline" className="mb-5 pt-2">
    <div className="text-center mb-5">
      <span className="washi-tag mb-2">
        <i className="bi bi-signpost-split"></i>Trail Log
      </span>
      <h2 className="font-display fw-semibold h3 mt-3 mb-0">Journey Timeline</h2>
    </div>

    <div className="d-flex flex-column gap-5">
      {journeyYears.map((year) => {
        const places = journeys.filter((j) => j.year === year);
        return (
          <div key={year} className="position-relative ps-5">
            <div className="timeline-rail"></div>
            <span
              className="timeline-year-marker position-absolute"
              style={{ left: 0, top: "-0.4rem", color: "var(--teal)" }}
            >
              {year}
            </span>
            <div className="d-flex flex-wrap gap-3 pt-2">
              {places.map((p, i) => (
                <Link
                  key={p.slug}
                  to={`/journal/${p.slug}`}
                  className="postmark text-decoration-none"
                  style={{
                    position: "relative",
                    top: 0,
                    right: "auto",
                    transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (4 + (i % 3))}deg)`,
                  }}
                  title={p.place}
                >
                  <span className="postmark-value">{p.place.split(" ")[0]}</span>
                  <span className="postmark-label">{p.date.split(" ")[0]}</span>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default JourneyTimeline;
