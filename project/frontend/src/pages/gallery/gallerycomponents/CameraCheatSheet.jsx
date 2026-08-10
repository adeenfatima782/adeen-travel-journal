import React from "react";

const scenes = [
  { scene: "Mountains & Wide Landscapes", icon: "bi-triangle", iso: "ISO 100–200", aperture: "f/8–f/11", shutter: "1/125s+", note: "Smaller aperture keeps the whole scene sharp, foreground to peak." },
  { scene: "Lakes & Reflections", icon: "bi-droplet", iso: "ISO 100", aperture: "f/8–f/10", shutter: "1/125–1/250s", note: "Shoot early — wind picks up by mid-morning and breaks the reflection." },
  { scene: "Waterfalls", icon: "bi-cloud-drizzle", iso: "ISO 100", aperture: "f/11–f/16", shutter: "1/8–1s (tripod)", note: "A slower shutter turns fast water silky — bring a small tripod." },
  { scene: "Low Light & Night", icon: "bi-moon-stars", iso: "ISO 800–3200", aperture: "f/1.8–f/2.8", shutter: "1/60s or slower", note: "Widest aperture your lens allows, and brace against something still." },
];

const CameraCheatSheet = () => (
  <section className="mb-5">
    <div className="text-center mb-4">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        <i className="bi bi-sliders me-1"></i>Quick Reference
      </p>
      <h2 className="font-display fw-semibold h3 mb-0">Camera Settings Cheat Sheet</h2>
      <p className="text-stone mx-auto mt-2" style={{ maxWidth: "32rem" }}>
        The starting points I actually use in the field for each type of scene — adjust from here based on the light.
      </p>
    </div>
    <div className="row g-3">
      {scenes.map((s) => (
        <div className="col-sm-6 col-lg-3" key={s.scene}>
          <div className="h-100 p-4 rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.08)" }}>
            <i className={`bi ${s.icon} text-gold-dark`} style={{ fontSize: "1.4rem" }}></i>
            <h3 className="h6 font-display fw-semibold mt-3 mb-2">{s.scene}</h3>
            <div className="font-mono text-stone mb-2" style={{ fontSize: "0.72rem", lineHeight: 1.8 }}>
              <div>ISO: <span className="text-ink fw-semibold">{s.iso}</span></div>
              <div>Aperture: <span className="text-ink fw-semibold">{s.aperture}</span></div>
              <div>Shutter: <span className="text-ink fw-semibold">{s.shutter}</span></div>
            </div>
            <p className="text-stone small mb-0">{s.note}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CameraCheatSheet;
