import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PhotoExif from "./albumphotodetailcomponents/PhotoExif";
import PhotoPrevNext from "./albumphotodetailcomponents/PhotoPrevNext";
import RelatedPhotos from "./albumphotodetailcomponents/RelatedPhotos";
import { api } from "../../api/client";

const AlbumPhotoDetail = () => {
  const { slug, photoId } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    api
      .get(`/gallery/${slug}`)
      .then((data) => {
        if (isMounted) setAlbum(data.album);
      })
      .catch(() => {
        if (isMounted) setAlbum(null);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => { isMounted = false; };
  }, [slug]);

  if (loading) {
    return <div className="container text-center py-5"><p className="text-stone">Loading…</p></div>;
  }

  const photos = album?.photos || [];
  const idx = photos.findIndex((p) => p.id === photoId || p._id === photoId);
  const photo = idx !== -1 ? photos[idx] : null;
  const prev = idx > 0 ? photos[idx - 1] : null;
  const next = idx !== -1 && idx < photos.length - 1 ? photos[idx + 1] : null;

  if (!album || !photo) {
    return (
      <div className="container text-center py-5">
        <p className="text-stone">Photo not found.</p>
        <Link to="/gallery" className="link-underline fw-semibold">Back to gallery</Link>
      </div>
    );
  }

  return (
    <article className="container py-5" style={{ maxWidth: "50rem" }}>
      <Link to={`/gallery/album/${album.slug}`} className="link-underline font-mono text-stone small d-inline-block mb-3">
        <i className="bi bi-arrow-left me-1"></i>{album.name}
      </Link>
      <div className="rounded-3 overflow-hidden shadow">
        <img src={photo.src} alt={photo.caption} className="w-100" style={{ maxHeight: "70vh", objectFit: "cover" }} />
      </div>
      <PhotoExif photo={photo} albumId={album.id} />
      <PhotoPrevNext album={album} prev={prev} next={next} />
      <RelatedPhotos album={album} currentId={photo.id || photo._id} />
    </article>
  );
};

export default AlbumPhotoDetail;
