import React from "react";
import { Link } from "react-router-dom";
import { signatureQuotes } from "../../../data/samplePosts";

const JournalPreview = () => (
  <section className="py-5">
    <div className="rounded-3 overflow-hidden shadow-sm" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.08)" }}>
      <div className="row g-0 align-items-center">
        <div className="col-md-5">
          <div style={{ aspectRatio: "4/3" }}>
            <img src="https://picsum.photos/seed/journalpreview/700/525" alt="Latest adventure" className="w-100 h-100" style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className="col-md-7 p-4 p-md-5">
          <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            <i className="bi bi-journal-text me-1"></i>From the Travel Journal
          </p>
          <h2 className="font-display fw-semibold h3 mb-3">Read My Latest Adventure</h2>
          <p className="text-stone fst-italic mb-4">"{signatureQuotes[1]}"</p>
          <Link to="/travel-journal" className="btn btn-gold">Open the Journal</Link>
        </div>
      </div>
    </div>
  </section>
);

export default JournalPreview;
