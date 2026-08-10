import React, { useState } from "react";

const ReaderQuestions = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mb-5">
      <div className="text-center mb-4">
        <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          <i className="bi bi-chat-square-text me-1"></i>Reader Questions
        </p>
        <h2 className="font-display fw-semibold h3 mb-0">Things People Ask Me</h2>
      </div>
      <div className="mx-auto" style={{ maxWidth: "40rem" }}>
        {questions.map((q, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={q.question} className="rounded-3 mb-2 overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.08)" }}>
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-100 d-flex justify-content-between align-items-center p-3 border-0 bg-transparent text-start"
              >
                <span className="fw-semibold" style={{ fontSize: "0.95rem" }}>{q.question}</span>
                <i className={`bi ${isOpen ? "bi-dash" : "bi-plus"} text-gold-dark`} style={{ fontSize: "1.2rem" }}></i>
              </button>
              {isOpen && (
                <p className="text-stone px-3 pb-3 mb-0" style={{ fontSize: "0.9rem" }}>{q.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ReaderQuestions;
