import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/client";

const OnThisDay = () => {
  const [journeys, setJourneys] = useState([]);

  useEffect(() => {
    api
      .get("/journeys?limit=100")
      .then((data) => setJourneys(data.journeys || []))
      .catch(() => setJourneys([]));
  }, []);

  const { matches, closest } = useMemo(() => {
    if (!journeys.length) return { matches: [], closest: null };

    const today = new Date();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();

    const withDayDiff = journeys.map((j) => {
      const d = new Date(j.date);
      let diff = (d.getMonth() * 31 + d.getDate()) - (todayMonth * 31 + todayDate);
      if (diff < 0) diff += 372;
      return { journey: j, diff, sameDay: d.getMonth() === todayMonth && d.getDate() === todayDate };
    });

    const exact = withDayDiff.filter((w) => w.sameDay).map((w) => w.journey);
    const nearest = [...withDayDiff].sort((a, b) => a.diff - b.diff)[0]?.journey;

    return { matches: exact, closest: nearest };
  }, [journeys]);

  const featured = matches.length > 0 ? matches : closest ? [closest] : [];
  if (featured.length === 0) return null;

  return (
    <section className="mb-5">
      <div className="text-center mb-4">
        <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          <i className="bi bi-calendar-heart me-1"></i>On This Day
        </p>
        <h2 className="font-display fw-semibold h3 mb-0">
          {matches.length > 0 ? "Somewhere I was, on this exact date" : "Coming up in the journal"}
        </h2>
      </div>
      <div className="d-flex justify-content-center">
        {featured.map((j) => (
          <div style={{ maxWidth: "380px", width: "100%" }} key={j.slug}>
            <Link to={`/journal/${j.slug}`} className="text-decoration-none text-reset d-block">
              {/* Vertical Card with Soft Cream Background */}
              <div 
                className="rounded-4 overflow-hidden border p-3 text-center" 
                style={{ 
                  background: "#FAF6EE", 
                  borderColor: "rgba(28, 27, 26, 0.1)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.04)"
                }}
              >
                {/* Top Image */}
                <div className="rounded-3 overflow-hidden mb-3" style={{ height: "240px" }}>
                  <img src={j.cover} alt={j.place} className="w-100 h-100" style={{ objectFit: "cover" }} />
                </div>
                {/* Bottom Content */}
                <div className="py-2">
                  <p className="font-mono text-gold-dark mb-1" style={{ fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {new Date(j.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                  <h3 className="h4 font-display fw-semibold mb-2">{j.place}</h3>
                  <p className="link-underline font-mono text-stone small mb-0">Revisit this entry →</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnThisDay;