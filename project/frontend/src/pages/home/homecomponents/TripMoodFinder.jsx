import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/client";

const moods = [
  { name: "Adventure", icon: "bi-compass", types: ["Mountains"] },
  { name: "Relaxing", icon: "bi-cup-hot", types: ["Lakes", "Plains"] },
  { name: "Budget-Friendly", icon: "bi-piggy-bank", types: ["Mountains", "Valleys"], budget: "Budget" },
  { name: "Photography", icon: "bi-camera", types: ["Lakes", "Mountains"] },
];

const TripMoodFinder = () => {
  const [activeMood, setActiveMood] = useState(moods[0]);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    api
      .get("/destinations?limit=100")
      .then((data) => setDestinations(data.destinations || []))
      .catch(() => setDestinations([]));
  }, []);

  const matches = destinations
    .filter((d) => activeMood.types.includes(d.type) && (!activeMood.budget || d.budget === activeMood.budget))
    .slice(0, 3);

  if (!destinations.length) return null;

  return (
    <section className="py-5 my-3">
      <div className="text-center mb-4">
        <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
          Find Your Trip
        </p>
        <h2 className="font-display fw-semibold h3 mb-2">What Kind of Trip Are You In The Mood For?</h2>
        <p className="text-stone mx-auto mb-0" style={{ maxWidth: "30rem" }}>
          Tap a mood and I'll pull up a few places from my own trips that match it.
        </p>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {moods.map((m) => (
          <button
            key={m.name}
            onClick={() => setActiveMood(m)}
            className={`btn btn-sm ${activeMood.name === m.name ? "btn-gold" : "btn-outline-ink"}`}
          >
            <i className={`bi ${m.icon} me-1`}></i>{m.name}
          </button>
        ))}
      </div>

      <div className="row g-3 justify-content-center">
        {matches.length === 0 ? (
          <p className="text-stone text-center">No matches yet for this mood — try another one.</p>
        ) : (
          matches.map((d) => (
            <div className="col-sm-6 col-lg-4" key={d.slug}>
              <Link to={`/explore?q=${encodeURIComponent(d.name)}`} className="text-decoration-none text-reset d-block h-100">
                <div className="rounded-3 overflow-hidden shadow-sm h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.08)" }}>
                  <div style={{ aspectRatio: "4/3" }}>
                    <img src={d.image} alt={d.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="p-3">
                    <h3 className="h6 font-display fw-semibold mb-1">{d.name}</h3>
                    <p className="font-mono text-stone mb-0" style={{ fontSize: "0.7rem" }}>
                      <i className="bi bi-star-fill text-gold-dark me-1"></i>{d.rating} · {d.bestTime}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default TripMoodFinder;
