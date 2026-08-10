import React from "react";

// Deliberately text-only (no photo grid) — this is the one section on the
// site that just points people to the account instead of embedding it.
const InstagramNote = () => (
  <section className="mb-5 text-center">
    <span className="washi-tag mb-3"><i className="bi bi-instagram"></i>Instagram</span>
    <p className="mx-auto mb-2 mt-3" style={{ maxWidth: "34rem", fontSize: "1.05rem" }}>
      This is the account where I actually post while I'm out there — day-to-day activities, behind-the-scenes
      clicks, and the little moments that don't always make it into a full journal entry.
    </p>
    <a href="https://instagram.com/adeenfatima9349" target="_blank" rel="noreferrer" className="link-underline font-mono text-stone small">
      @adeenfatima9349 →
    </a>
  </section>
);

export default InstagramNote;
