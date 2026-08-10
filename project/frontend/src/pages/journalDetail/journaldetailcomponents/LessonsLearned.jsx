import React from "react";

const LessonsLearned = ({ lessons }) => (
  <section className="mb-4 paper-card p-4">
    <span className="washi-tag mb-3"><i className="bi bi-mortarboard"></i>Lessons Learned</span>
    <ul className="list-unstyled mb-0 mt-3">
      {lessons.map((l, i) => (
        <li key={i} className="mb-2 d-flex gap-2">
          <i className="bi bi-lightbulb text-gold-dark mt-1"></i>
          <span className="diary-quote" style={{ fontSize: "1.1rem" }}>{l}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default LessonsLearned;
