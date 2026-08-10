import React from "react";

const milestones = [
  { year: "2023", title: "First camera, first trip", text: "Picked up a second-hand camera before a short trip to Murree, mostly to remember the trees. Came back home and hadn't stopped thinking about it since." },
  { year: "2024", title: "First solo journey", text: "Took the first solo trip up north — Hunza — with more nervousness than gear. That trip is the reason this whole journal exists." },
  { year: "2025", title: "Started sharing the journey", text: "Began writing these travel diaries properly, pairing every story with the photographs that were taken alongside it." },
  { year: "2026", title: "This journal, properly", text: "Brought everything together into one place — travel diaries, photography notes, and a growing gallery from every trip since." },
];

const AboutTimeline = () => (
  <div className="mb-5">
    <p className="font-mono text-gold-dark mb-4 text-center" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
      The Journey So Far
    </p>
    <div className="d-flex flex-column gap-4">
      {milestones.map((m, i) => (
        <div className="d-flex gap-4" key={m.year}>
          <div className="text-center flex-shrink-0" style={{ width: "70px" }}>
            <span className="font-display fw-semibold" style={{ fontSize: "1.1rem", color: "var(--gold-dark)" }}>{m.year}</span>
            {i !== milestones.length - 1 && (
              <div className="mx-auto mt-2" style={{ width: "1px", height: "100%", minHeight: "40px", background: "rgba(28,27,26,0.15)" }}></div>
            )}
          </div>
          <div className="pb-2">
            <h3 className="font-display fw-semibold h6 mb-1">{m.title}</h3>
            <p className="text-stone small mb-0">{m.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AboutTimeline;
