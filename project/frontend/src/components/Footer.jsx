import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer-custom">
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-4">
          <p className="brand-mark mb-2">Adeen Fatima</p>
          <p className="text-stone small" style={{ maxWidth: "22rem" }}>
            Travel stories and photographs from the road — told slowly, one valley at a time.
          </p>
        </div>
        <div className="col-md-4">
          <p className="font-mono text-stone mb-3" style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Explore</p>
          <ul className="list-unstyled small d-flex flex-column gap-2">
            <li><Link to="/blog" className="link-underline">Blogs</Link></li>
            <li><Link to="/explore" className="link-underline">Explore Destinations</Link></li>
            <li><Link to="/gallery" className="link-underline">Photography Gallery</Link></li>
            <li><Link to="/travel-journal" className="link-underline">Travel Journal</Link></li>
            <li><Link to="/about" className="link-underline">About</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>
        <div className="col-md-4">
          <p className="font-mono text-stone mb-3" style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Find Me</p>
          <ul className="list-unstyled small d-flex flex-column gap-2">
            <li><a href="https://instagram.com/adeenfatima9349" target="_blank" rel="noreferrer" className="link-underline"><i className="bi bi-instagram me-2"></i>Instagram</a></li>
            <li><a href="https://twitter.com/AdeenFatima03" target="_blank" rel="noreferrer" className="link-underline"><i className="bi bi-twitter-x me-2"></i>Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/adeen-fatima-216168394" target="_blank" rel="noreferrer" className="link-underline"><i className="bi bi-linkedin me-2"></i>LinkedIn</a></li>
            <li><a href="https://github.com/adeenfatima782" target="_blank" rel="noreferrer" className="link-underline"><i className="bi bi-github me-2"></i>GitHub</a></li>
            <li><a href="mailto:adeenf033@gmail.com" className="link-underline"><i className="bi bi-envelope me-2"></i>adeenf033@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <hr className="route-divider my-4" />
      <p className="font-signature text-center mb-2" style={{ fontSize: "1.3rem", color: "var(--gold-dark)" }}>
        Thanks for reading — see you on the next trail.
      </p>
      <p className="text-center text-stone small font-mono mb-0">
        © {new Date().getFullYear()} Adeen Fatima. All photographs and words are her own.
      </p>
    </div>
  </footer>
);

export default Footer;
