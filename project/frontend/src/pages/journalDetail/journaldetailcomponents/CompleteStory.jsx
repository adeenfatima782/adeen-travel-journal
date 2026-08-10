import React from "react";

const CompleteStory = ({ story }) => (
  <section className="mb-5">
    <span className="washi-tag mb-3"><i className="bi bi-journal-text"></i>Complete Story</span>
    <div className="mt-3">
      {story.map((para, i) =>
        i === 0 ? (
          <p key={i} className="diary-quote mb-4" style={{ fontSize: "1.4rem", lineHeight: 1.5 }}>{para}</p>
        ) : (
          <p key={i} className="mb-3" style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--ink)" }}>{para}</p>
        )
      )}
    </div>
  </section>
);

export default CompleteStory;
