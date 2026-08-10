import React from "react";
import Quote from "../../../components/Quote";

const AboutPassion = () => (
  <div className="row g-5 mb-5 align-items-center">
    <div className="col-md-7 order-2 order-md-1">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
        Why I Do This
      </p>
      <h2 className="font-display fw-semibold mb-3">Travel and photography aren't a side project — they're the whole point.</h2>
      <p className="text-stone">
        Travelling is the thing I look forward to more than almost anything else. Give me a
        rough map, an unfamiliar road, and a few days with nowhere I have to be, and I'm happy.
        It's less about ticking off places and more about the feeling of being somewhere new
        long enough to actually understand it.
      </p>
      <p className="text-stone">
        Photography grew out of that, almost by accident. I started taking pictures just to
        remember places, and somewhere along the way it turned into the thing I care about
        most. These days I genuinely can't imagine travelling without a camera in my hand —
        taking my own photos isn't just something I do on trips, it's become my actual passion.
      </p>
      <p className="text-stone">
        I edit my own photos, write my own stories, and every single image on this site was
        taken by me, on the road, exactly where it says it was. Nothing here is borrowed.
      </p>
    </div>
    <div className="col-md-5 order-1 order-md-2">
      <div className="polaroid" style={{ "--tilt": "2deg" }}>
        <div className="card-img-wrap" style={{ background: "rgba(28,27,26,0.05)" }}>
          <img src="images\about.jpeg" alt="Adeen Fatima with her camera" />
        </div>
        <p className="polaroid-caption mb-0">Camera never leaves the bag empty</p>
      </div>
    </div>
  </div>
);

export default AboutPassion;
