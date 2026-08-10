import React, { useState } from "react";
import Quote from "../../../components/Quote";
import TableOfContents from "./TableOfContents";

const PostBody = ({ post }) => {
  const paragraphs = post.content && post.content.length ? post.content : [post.excerpt];
  const midpoint = Math.ceil(paragraphs.length / 2);
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <img src={post.cover} alt={post.title} className="w-100 rounded-3 mt-4 shadow" />

      <TableOfContents paragraphs={paragraphs} />

      <div className="mt-4" style={{ fontSize: "1.12rem", lineHeight: 1.8 }}>
        {paragraphs.map((para, i) => (
          <React.Fragment key={i}>
            <p id={`section-${i}`} className="mb-4">{para}</p>
            {i === midpoint - 1 && post.quote && <Quote text={post.quote} />}
          </React.Fragment>
        ))}
      </div>

      {post.gallery && post.gallery.length > 0 && (
        <section className="mt-5 pt-3">
          <p className="font-mono text-gold-dark mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            More from this trip
          </p>
          <div className="row g-3">
            {post.gallery.map((item, i) => (
              <div className="col-6 col-md-4" key={i}>
                <button
                  onClick={() => setLightbox(item)}
                  className="border-0 p-0 w-100 rounded-3 overflow-hidden shadow-sm"
                  style={{ aspectRatio: "4/3", cursor: "zoom-in" }}
                >
                  <img src={item.src} alt={item.caption} className="w-100 h-100" style={{ objectFit: "cover" }} />
                </button>
                <p className="font-mono text-stone mt-2 mb-0" style={{ fontSize: "0.72rem", lineHeight: 1.4 }}>
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(28,27,26,0.92)", zIndex: 60,
            display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", cursor: "zoom-out",
          }}
        >
          <div style={{ maxWidth: "900px", width: "100%" }}>
            <img src={lightbox.src} alt={lightbox.caption} className="w-100 rounded-3" style={{ maxHeight: "80vh", objectFit: "contain" }} />
            <p className="text-center mt-3 mb-0" style={{ color: "var(--sand)" }}>{lightbox.caption}</p>
          </div>
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="btn-close btn-close-white"
            style={{ position: "fixed", top: "20px", right: "20px" }}
          ></button>
        </div>
      )}
    </>
  );
};

export default PostBody;
