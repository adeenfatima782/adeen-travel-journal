import React from "react";

const BlogHero = () => (
  <div className="text-center mb-5">
    <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
      The Journal
    </p>
    <h1 className="font-display fw-semibold" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
      Travel Stories & Photography Tips
    </h1>
    <p className="text-stone mx-auto" style={{ maxWidth: "36rem" }}>
      Every travel diary, photography note, and photo essay — in one place. Think of this as a
      slow, personal magazine: read the stories, borrow the tips, and figure out where you're
      going next.
    </p>
  </div>
);

export default BlogHero;
