import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container text-center py-5" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
    <p className="font-display" style={{ fontSize: "4.5rem" }}>404</p>
    <p className="text-stone mb-4">Looks like this trail doesn't lead anywhere.</p>
    <Link to="/" className="link-underline fw-semibold">Back to the homepage →</Link>
  </div>
);

export default NotFound;
