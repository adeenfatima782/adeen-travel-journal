import React from "react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="hero-section">
    <img src="https://picsum.photos/seed/adeenhero/1800/1200" alt="Adeen Fatima travelling through the northern mountains" />
    <div className="hero-overlay"></div>
    <div className="container hero-content">
      <p className="font-mono text-gold animate-float mb-3" style={{ fontSize: "0.85rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
        ✦ Currently chasing light in Northern Pakistan
      </p>
      <p className="font-signature mb-1" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--gold)", lineHeight: 1 }}>
        Adeen Fatima
      </p>
      <h1 className="font-display fw-semibold mb-3" style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", lineHeight: 1.05, maxWidth: "16ch" }}>
        Stories from the road,<br /><span className="text-gold fst-italic">seen through a lens.</span>
      </h1>
      <p className="mb-4" style={{ maxWidth: "34rem", opacity: 0.9, fontSize: "1.05rem" }}>
        I'm Adeen — I travel slow, shoot on instinct, and write down everything the photos can't quite say. Welcome to my journal.
      </p>
      <div className="d-flex flex-wrap gap-3">
        <Link to="/blog" className="btn btn-gold">Read the Diaries</Link>
        <Link to="/gallery" className="btn btn-outline-sand">View the Gallery</Link>
      </div>
    </div>
  </section>
);

export default Hero;
