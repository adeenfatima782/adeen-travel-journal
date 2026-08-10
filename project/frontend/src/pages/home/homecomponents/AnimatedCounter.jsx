import React, { useEffect, useRef, useState } from "react";

// Animates from 0 to the numeric part of `value` when scrolled into view.
// Non-numeric values (e.g. "Countless") just render as-is.
const AnimatedCounter = ({ value, duration = 1400 }) => {
  const match = String(value).match(/[\d,]+/);
  const numeric = match ? parseInt(match[0].replace(/,/g, ""), 10) : null;
  const suffix = numeric !== null ? String(value).slice(match.index + match[0].length) : "";
  const prefix = numeric !== null ? String(value).slice(0, match.index) : "";

  const [display, setDisplay] = useState(numeric === null ? value : 0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (numeric === null) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setDisplay(Math.floor(progress * numeric));
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(numeric);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [numeric, duration]);

  return (
    <span ref={ref}>
      {prefix}{typeof display === "number" ? display.toLocaleString() : display}{suffix}
    </span>
  );
};

export default AnimatedCounter;
