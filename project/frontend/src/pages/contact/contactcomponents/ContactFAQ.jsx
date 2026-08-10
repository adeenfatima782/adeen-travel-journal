import React, { useState } from "react";

const faqs = [
  { q: "How quickly do you reply?", a: "Usually within 2-3 days — I read everything myself, no team behind this inbox." },
  { q: "Do you take brand collaborations?", a: "Yes, if the brand fits the kind of slow, honest travel content this site is built around." },
  { q: "Can I use one of your photos?", a: "Reach out first — happy to discuss licensing for the right use case." },
  { q: "Do you offer trip planning advice one-on-one?", a: "Sometimes, depending on the destination — mention it in your message and I'll let you know." },
];

const ContactFAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="mt-5 pt-5" style={{ borderTop: "1px solid rgba(28,27,26,0.1)" }}>
      <p className="font-mono text-gold-dark mb-3" style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Before You Write In
      </p>
      <div className="d-flex flex-column gap-2">
        {faqs.map((f, i) => (
          <div key={i} className="rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
            <button
              className="w-100 text-start p-3 bg-transparent border-0 d-flex justify-content-between align-items-center"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="fw-semibold small">{f.q}</span>
              <i className={`bi ${open === i ? "bi-dash" : "bi-plus"} text-gold-dark`}></i>
            </button>
            {open === i && <p className="px-3 pb-3 text-stone small mb-0">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactFAQ;
