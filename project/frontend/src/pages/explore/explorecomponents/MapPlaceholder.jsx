import React from "react";

const MapPlaceholder = ({ destination }) => (
  <section className="mb-5">
    <div
      className="rounded-4 d-flex flex-column align-items-center justify-content-center text-center p-5"
      style={{
        minHeight: "20rem",
        background:
          "repeating-linear-gradient(135deg, var(--sand-deep), var(--sand-deep) 10px, transparent 10px, transparent 20px), var(--sand)",
        border: "1px dashed rgba(28,27,26,0.25)",
      }}
    >
      <i className="bi bi-map text-gold-dark" style={{ fontSize: "2.4rem" }}></i>
      <h3 className="font-display fw-semibold h5 mt-3 mb-2">
        {destination ? `${destination.name} on the Map` : "Interactive Map"}
      </h3>
      {destination?.lat && destination?.lng ? (
        <p className="text-stone mb-0 font-mono" style={{ maxWidth: "26rem", fontSize: "0.85rem" }}>
          {destination.lat.toFixed(4)}° N, {destination.lng.toFixed(4)}° E — a full interactive map is coming soon.
        </p>
      ) : (
        <p className="text-stone mb-0" style={{ maxWidth: "26rem" }}>
          A live map of every destination on this page is coming soon — for now, browse the cards
          above to see where each place sits.
        </p>
      )}
    </div>
  </section>
);

export default MapPlaceholder;
