import React from "react";

// Builds a short list of section labels from the post's paragraphs so long
// articles are easy to jump around in. Each paragraph gets an id in PostBody
// (section-0, section-1, ...) that these links scroll to.
const TableOfContents = ({ paragraphs }) => {
  if (!paragraphs || paragraphs.length < 3) return null;

  const items = paragraphs.map((para, i) => {
    const words = para.split(" ").slice(0, 6).join(" ");
    return { id: `section-${i}`, label: `${words}…` };
  });

  return (
    <nav className="mb-5 p-3 rounded-3" style={{ background: "var(--sand-deep)" }}>
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
        <i className="bi bi-list-ul me-1"></i>In This Article
      </p>
      <ol className="mb-0 ps-3" style={{ fontSize: "0.85rem" }}>
        {items.map((item) => (
          <li key={item.id} className="mb-1">
            <a href={`#${item.id}`} className="link-underline text-reset">{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;
