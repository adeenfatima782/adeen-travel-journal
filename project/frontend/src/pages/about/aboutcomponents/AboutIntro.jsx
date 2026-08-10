import React from "react";

const AboutIntro = () => (
  <div className="row align-items-center g-5 mb-5">
    <div className="col-md-5">
      <div className="polaroid" style={{ "--tilt": "-3deg" }}>
        <div className="card-img-wrap" style={{ background: "rgba(28,27,26,0.05)", aspectRatio: "4/5" }}>
          <img src="images\about2.jpeg" alt="Adeen Fatima" />
        </div>
        <p className="polaroid-caption mb-0">Somewhere in the north</p>
      </div>
    </div>
    <div className="col-md-7">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
        About
      </p>
      <h1 className="font-display fw-semibold mb-3">Hi, I'm Adeen Fatima.</h1>
      <p className="text-stone" style={{ fontSize: "1.05rem" }}>
        I'm a traveler and photographer based in Pakistan, and this journal is where I keep
        both halves of that — the roads I've taken and the photographs that made me stop
        walking long enough to notice where I was.
      </p>
      <p className="text-stone">
        I travel slow, on purpose. Most of what you'll find here are notes from the northern
        valleys — Hunza, Skardu, Swat — along with the gear, techniques, and quiet patience
        that photography has taught me.
      </p>
      <p className="text-stone">
        If you're planning a trip, chasing better light, or just enjoy wandering through
        someone else's photo diary, you're in the right place.
      </p>
    </div>
  </div>
);

export default AboutIntro;
