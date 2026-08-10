import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="d-flex align-items-center justify-content-center rounded-circle shadow"
      style={{
        position: "fixed", bottom: "28px", right: "28px", width: "48px", height: "48px",
        background: "var(--gold)", color: "var(--ink)", border: "none", zIndex: 40,
      }}
    >
      <i className="bi bi-arrow-up" style={{ fontSize: "1.2rem" }}></i>
    </button>
  );
};

export default BackToTop;
