import React from "react";
import { Link } from "react-router-dom";

const AboutTeaser = () => (
  <section className="row align-items-center py-5 g-5">
    <div className="col-md-4">
      <div className="polaroid" style={{ "--tilt": "3deg" }}>
        {/* Aspect ratio 3/4 kar diya hai taake frame vertical ho jaye */}
        <div className="card-img-wrap" style={{ background: "rgba(28,27,26,0.05)", aspectRatio: "3 / 4" }}>
          {/* objectPosition: "top center" se head aur hair properly top par align ho jayenge */}
          <img 
            src="/images/aboutme.jpeg" 
            alt="Adeen Fatima portrait" 
            className="w-100 h-100" 
            style={{ objectFit: "cover", objectPosition: "top center" }} 
          />
        </div>
        <p className="polaroid-caption mb-0">Somewhere, mid-journey</p>
      </div>
    </div>
    <div className="col-md-8">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>About Me</p>
      <h2 className="font-display fw-semibold mb-3">Hi, I'm Adeen.</h2>
      <p className="text-stone" style={{ maxWidth: "34rem" }}>
        I started this journal to keep a record of the places I've wandered through and the
        photographs that stopped me in my tracks. Half travel diary, half photography
        notebook — this is where both live together.
      </p>
      <Link to="/about" className="link-underline fw-semibold text-reset d-inline-block mt-2">More about me →</Link>
    </div>
  </section>
);

export default AboutTeaser;