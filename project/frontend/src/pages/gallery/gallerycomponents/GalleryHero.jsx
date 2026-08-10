import React from "react";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const GalleryHero = () => (
  <div className="text-center mb-5">
    <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
      Explore
    </p>
    <h1 className="font-display fw-semibold" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
      Photography Gallery
    </h1>
    <p className="text-stone mx-auto mb-4" style={{ maxWidth: "36rem" }}>
      A visual journal — no long captions, just the frames that stopped me in my tracks across
      Pakistan's northern valleys. Browse by album, or dive straight into the latest photos.
    </p>
    <div className="d-flex gap-3 justify-content-center flex-wrap">
      <button className="btn btn-gold" onClick={() => scrollTo("albums")}>View Albums</button>
      <button className="btn btn-outline-ink" onClick={() => scrollTo("photos")}>Explore Photos</button>
    </div>
  </div>
);

export default GalleryHero;
