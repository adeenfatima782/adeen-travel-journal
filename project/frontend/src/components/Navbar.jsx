import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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

// Bootstrap ki JS Offcanvas plugin pe depend nahi karte — bundling/cache ki
// wajah se unreliable ho raha tha. Yahan poora menu React ke apne state se
// control hota hai, isliye open/close/navigate hamesha turant kaam karega.
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  // Menu khula ho to peeche wala page scroll na ho
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light travel-navbar sticky-top">
      <div className="container-fluid px-4 px-lg-5">
        {/* Logo / Brand */}
        <NavLink to="/" className="navbar-brand travel-brand" end>
          <div className="brand-name">Adeen Fatima</div>
          <span className="brand-subtitle">Travel & Photography</span>
        </NavLink>

        {/* Mobile Hamburger */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={openMenu}
          aria-label="Open navigation menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Navigation */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto gap-lg-1">
            {navItems.map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => `nav-link px-3 ${isActive ? "active fw-semibold" : ""}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="d-flex align-items-center">
            <div className="d-flex gap-3">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="social-icon">
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Backdrop — menu khule hote hi peeche dim overlay, click se band ho jaye */}
        {isOpen && <div className="mobile-nav-backdrop" onClick={closeMenu}></div>}

        {/* ================= MOBILE SIDE MENU ================= */}
        <div className={`mobile-nav ${isOpen ? "mobile-nav-open" : ""}`}>
          <div className="mobile-nav-header d-flex align-items-center justify-content-between">
            <div>
              <div className="mobile-brand-name">Adeen Fatima</div>
              <div className="mobile-brand-subtitle">Travel & Photography</div>
            </div>
            <button type="button" className="btn-close shadow-none" onClick={closeMenu} aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <div className="mobile-menu-links">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
                >
                  <span className="mobile-nav-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </span>
                  <span>{item.label}</span>
                  <i className="bi bi-chevron-right mobile-arrow"></i>
                </NavLink>
              ))}
            </div>

            {/* Social Icons */}
            <div className="mobile-social-section">
              <div className="mobile-social-title">FOLLOW THE JOURNEY</div>
              <div className="mobile-social-icons">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="mobile-social-icon">
                    <i className={`bi ${s.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;