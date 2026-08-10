import React from "react";

const PhotoGallery = ({ gallery }) => {
  if (!gallery || gallery.length === 0) return null;
  return (
    <section className="mb-5">
      <span className="washi-tag mb-4"><i className="bi bi-images"></i>Photo Gallery</span>
      <div className="row g-4 justify-content-center mt-1">
        {gallery.map((photo, i) => (
          <div className="col-6 col-md-5" key={i}>
            <div className="polaroid" style={{ "--tilt": `${(i % 2 === 0 ? -1 : 1) * (1.5 + (i % 3))}deg` }}>
              <img src={photo.src} alt={photo.caption} />
              <p className="polaroid-cap">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
