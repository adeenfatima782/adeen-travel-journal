import React from "react";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/", icon: "bi-house" },
  { label: "Blogs", to: "/blog", icon: "bi-journal-text" },
  { label: "Explore", to: "/explore", icon: "bi-compass" },
  { label: "Gallery", to: "/gallery", icon: "bi-images" },
  { label: "Travel Journal", to: "/travel-journal", icon: "bi-book" },
  { label: "About", to: "/about", icon: "bi-person" },
  { label: "Contact", to: "/contact", icon: "bi-envelope" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/adeenfatima9349", icon: "bi-instagram" },
  { label: "Twitter", href: "https://twitter.com/AdeenFatima03", icon: "bi-twitter-x" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adeen-fatima-216168394", icon: "bi-linkedin" },
  { label: "GitHub", href: "https://github.com/adeenfatima782", icon: "bi-github" },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top py-3">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-baseline gap-2">
          <span className="brand-mark">Adeen Fatima</span>
          <span className="d-none d-xl-inline font-mono text-gold-dark" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Travel & Photography
          </span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto gap-lg-1 mt-3 mt-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `nav-link px-2 ${isActive ? "active fw-semibold" : ""}`}
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <div className="d-flex gap-3 ps-lg-2">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="social-icon">
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
