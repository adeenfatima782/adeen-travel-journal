import React from "react";
import { useParams, Link } from "react-router-dom";
import PhotoInfo from "./photodetailcomponents/PhotoInfo";
import MoreFromGallery from "./photodetailcomponents/MoreFromGallery";
import { explorePhotos } from "../../data/samplePosts";

const PhotoDetail = () => {
  const { id } = useParams();
  const photo = explorePhotos.find((p) => p.id === id);

  if (!photo) {
    return (
      <div className="container text-center py-5">
        <p className="text-stone">Photo not found.</p>
        <Link to="/gallery" className="link-underline fw-semibold">Back to gallery</Link>
      </div>
    );
  }

  return (
    <article className="container py-5" style={{ maxWidth: "50rem" }}>
      <div className="rounded-3 overflow-hidden shadow">
        <img src={photo.src} alt={photo.caption} className="w-100" style={{ maxHeight: "70vh", objectFit: "cover" }} />
      </div>
      <PhotoInfo photo={photo} />
      <MoreFromGallery photos={explorePhotos} currentId={photo.id} />
    </article>
  );
};

export default PhotoDetail;
