import React from "react";
import { Link } from "react-router-dom";

// One representative frame per month across every album, in chronological
// order — a scrollable "contact sheet" of the year rather than a repeat
// of the masonry grid above.
const PhotoArchive = ({ photos }) => {
  const byMonth = {};
  [...photos]
    .filter((p) => p.date) // Skip photos without a date to prevent a crash
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .forEach((p) => {
      const key = p.date.slice(0, 7);
      if (!byMonth[key]) byMonth[key] = p;
    });
  const monthly = Object.values(byMonth);
  if (monthly.length === 0) return null;

  const monthLabel = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" });

  return (
    <section className="mb-5">
      <div className="text-center mb-4">
        <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          <i className="bi bi-archive me-1"></i>Contact Sheet
        </p>
        <h2 className="font-display fw-semibold h3 mb-0">Photo Archive</h2>
        <p className="text-stone small mb-0">One frame per month, in the order they were taken.</p>
      </div>
      <div className="d-flex gap-3 overflow-auto pb-2" style={{ scrollSnapType: "x mandatory" }}>
        {monthly.map((photo) => (
          <Link
            key={photo.id}
            to={`/gallery/album/${photo.albumSlug}/${photo.id}`}
            className="text-decoration-none text-reset flex-shrink-0 position-relative rounded-3 overflow-hidden"
            style={{ width: "10rem", aspectRatio: "3/4", scrollSnapAlign: "start" }}
          >
            <img src={photo.src} alt={photo.caption} className="w-100 h-100" style={{ objectFit: "cover", filter: "grayscale(15%)" }} />
            <span
              className="position-absolute bottom-0 start-0 end-0 py-1 text-center font-mono"
              style={{ background: "rgba(28,27,26,0.75)", color: "var(--sand)", fontSize: "0.65rem" }}
            >
              {monthLabel(photo.date)}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PhotoArchive;
