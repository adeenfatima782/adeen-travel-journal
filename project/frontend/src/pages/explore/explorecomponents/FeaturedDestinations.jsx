import React from "react";

const FeaturedDestinations = ({ destinations, onSelect, activeSlug }) => (
  <section className="mb-5">
    <p className="font-mono text-gold-dark mb-3 text-center" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
      Featured Destinations
    </p>
    <div className="d-flex gap-3 overflow-auto pb-2" style={{ scrollSnapType: "x mandatory" }}>
      {destinations.map((d) => (
        <button
          key={d.slug}
          onClick={() => onSelect(d.slug)}
          className="flex-shrink-0 rounded-3 overflow-hidden position-relative border-0 p-0"
          style={{
            width: "13rem",
            height: "9rem",
            scrollSnapAlign: "start",
            outline: activeSlug === d.slug ? "3px solid var(--gold)" : "none",
          }}
        >
          <img src={d.image} alt={d.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
          <div
            className="position-absolute bottom-0 start-0 end-0 p-2 text-start"
            style={{ background: "linear-gradient(to top, rgba(28,27,26,0.85), transparent)" }}
          >
            <p className="text-sand fw-semibold mb-0" style={{ fontSize: "0.9rem" }}>{d.name}</p>
            <p className="font-mono mb-0" style={{ fontSize: "0.65rem", color: "var(--sand)", opacity: 0.85 }}>
              <i className="bi bi-star-fill me-1"></i>{d.rating}
            </p>
          </div>
        </button>
      ))}
    </div>
  </section>
);

export default FeaturedDestinations;
