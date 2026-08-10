import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/client";

const PopularDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    api
      .get("/destinations?sort=-rating&limit=4")
      .then((data) => setDestinations(data.destinations || []))
      .catch(() => setDestinations([]));
  }, []);

  if (!destinations.length) return null;

  return (
    <section className="py-5">
      <div className="text-center mb-5">
        <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
          Popular Destinations
        </p>
        <h2 className="font-display fw-semibold">Where to start, if you're new here</h2>
      </div>
      <div className="row g-4">
        {destinations.map((d) => (
          <div className="col-6 col-md-3" key={d.slug}>
            <Link
              to={`/explore?q=${encodeURIComponent(d.name)}`}
              className="d-block text-decoration-none text-reset position-relative rounded-3 overflow-hidden shadow-sm"
              style={{ aspectRatio: "3/4" }}
            >
              <img src={d.image} alt={d.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
              <div
                className="position-absolute bottom-0 start-0 end-0 p-3"
                style={{ background: "linear-gradient(to top, rgba(28,27,26,0.85), transparent)" }}
              >
                <p className="fw-semibold mb-0" style={{ color: "var(--sand)" }}>{d.name}</p>
                <p className="font-mono mb-0" style={{ fontSize: "0.7rem", color: "var(--gold)" }}>
                  <i className="bi bi-star-fill me-1"></i>{d.rating}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
