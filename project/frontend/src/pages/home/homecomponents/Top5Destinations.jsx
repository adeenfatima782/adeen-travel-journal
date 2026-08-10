import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/client";

const Top5Destinations = () => {
  const [top5, setTop5] = useState([]);

  useEffect(() => {
    api
      .get("/destinations?sort=-rating&limit=5")
      .then((data) => setTop5(data.destinations || []))
      .catch(() => setTop5([]));
  }, []);

  if (!top5.length) return null;

  return (
    <section className="py-5">
      <p className="font-mono text-gold-dark mb-4 text-center" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
        <i className="bi bi-trophy me-1"></i>Top 5 Destinations
      </p>
      <div className="d-flex flex-column gap-2">
        {top5.map((d, i) => (
          <Link
            key={d.slug}
            to={`/explore?q=${encodeURIComponent(d.name)}`}
            className="d-flex align-items-center gap-3 p-2 rounded-3 text-decoration-none text-reset"
          >
            <span className="font-display fw-semibold" style={{ fontSize: "1.5rem", width: "2rem", color: "var(--gold-dark)" }}>{i + 1}</span>
            <div className="rounded-3 overflow-hidden flex-shrink-0" style={{ width: "72px", height: "56px" }}>
              <img src={d.image} alt={d.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
            </div>
            <div className="flex-grow-1">
              <p className="fw-semibold mb-0">{d.name}</p>
              <p className="font-mono text-stone mb-0" style={{ fontSize: "0.7rem" }}>{d.type} · {d.bestTime}</p>
            </div>
            <span className="font-mono text-gold-dark small"><i className="bi bi-star-fill me-1"></i>{d.rating}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Top5Destinations;
