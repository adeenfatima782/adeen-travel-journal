import React from "react";

const contactChannels = [
  { label: "Email", value: "adeenf033@gmail.com", href: "mailto:adeenf033@gmail.com", icon: "bi-envelope" },
  { label: "Instagram", value: "@adeenfatima9349", href: "https://instagram.com/adeenfatima9349", icon: "bi-instagram" },
  { label: "Twitter", value: "@AdeenFatima03", href: "https://twitter.com/AdeenFatima03", icon: "bi-twitter-x" },
  { label: "LinkedIn", value: "Adeen Fatima", href: "https://www.linkedin.com/in/adeen-fatima-216168394", icon: "bi-linkedin" },
  { label: "GitHub", value: "adeenfatima782", href: "https://github.com/adeenfatima782", icon: "bi-github" },
];

const ContactChannels = () => (
  <div className="d-flex flex-column gap-3">
    {contactChannels.map((c) => (
      <a
        key={c.label}
        href={c.href}
        target="_blank"
        rel="noreferrer"
        className="d-flex align-items-center gap-3 p-3 rounded-3 text-decoration-none text-reset"
        style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}
      >
        <span
          className="d-flex align-items-center justify-content-center rounded-circle"
          style={{ width: "42px", height: "42px", background: "var(--sand-deep)", color: "var(--gold-dark)", fontSize: "1.1rem" }}
        >
          <i className={`bi ${c.icon}`}></i>
        </span>
        <span>
          <span className="d-block font-mono text-stone" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            {c.label}
          </span>
          <span className="fw-semibold">{c.value}</span>
        </span>
      </a>
    ))}
  </div>
);

export default ContactChannels;
