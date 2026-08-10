import React from "react";
import AboutIntro from "./aboutcomponents/AboutIntro";
import AboutPassion from "./aboutcomponents/AboutPassion";
import AboutTimeline from "./aboutcomponents/AboutTimeline";
import AboutStats from "./aboutcomponents/AboutStats";
import Quote from "../../components/Quote";
import { signatureQuotes } from "../../data/samplePosts";

const About = () => (
  <div className="container py-5">
    <AboutIntro />
    <hr className="route-divider my-5" />
    <AboutPassion />
    <Quote text={signatureQuotes[2]} />
    <hr className="route-divider my-5" />
    <AboutTimeline />
    <hr className="route-divider my-5" />
    <AboutStats />
  </div>
);

export default About;
