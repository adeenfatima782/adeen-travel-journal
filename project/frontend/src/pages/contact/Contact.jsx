import React from "react";
import ContactChannels from "./contactcomponents/ContactChannels";
import ContactForm from "./contactcomponents/ContactForm";
import ContactFAQ from "./contactcomponents/ContactFAQ";

const Contact = () => (
  <div className="container py-5">
    <div className="text-center mb-5">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
        Get in touch
      </p>
      <h1 className="font-display fw-semibold" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>Let's work together</h1>
      <p className="text-stone mx-auto" style={{ maxWidth: "34rem" }}>
        For collaborations, brand partnerships, travel features, or just to say hello — reach
        out through the form or any of the channels below.
      </p>
    </div>

    <div className="row g-5">
      <div className="col-lg-5">
        <ContactChannels />
      </div>
      <div className="col-lg-7">
        <ContactForm />
      </div>
    </div>

    <div className="mx-auto" style={{ maxWidth: "40rem" }}>
      <ContactFAQ />
    </div>
  </div>
);

export default Contact;
