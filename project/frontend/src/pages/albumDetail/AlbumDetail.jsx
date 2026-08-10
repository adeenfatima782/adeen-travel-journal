import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AlbumHero from "./albumdetailcomponents/AlbumHero";
import AlbumStats from "./albumdetailcomponents/AlbumStats";
import AlbumPhotoGrid from "./albumdetailcomponents/AlbumPhotoGrid";
import RelatedAlbums from "./albumdetailcomponents/RelatedAlbums";
import { api } from "../../api/client";

const AlbumDetail = () => {
  const { slug } = useParams();
  const [album, setAlbum] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setNotFound(false);

    const load = async () => {
      try {
        const [albumData, listData] = await Promise.all([
          api.get(`/gallery/${slug}`),
          api.get("/gallery?limit=100"),
        ]);
        if (!isMounted) return;
        setAlbum(albumData.album);
        const all = listData.albums || [];
        setRelated(
          all
            .filter((a) => a.slug !== slug && (a.tags || []).some((t) => (albumData.album.tags || []).includes(t)))
            .slice(0, 4)
        );
      } catch (err) {
        if (isMounted) setNotFound(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();

    return () => { isMounted = false; };
  }, [slug]);

  if (loading) {
    return <div className="container text-center py-5"><p className="text-stone">Loading…</p></div>;
  }

  if (notFound || !album) {
    return (
      <div className="container text-center py-5">
        <p className="text-stone">Album not found.</p>
        <Link to="/gallery" className="link-underline fw-semibold">Back to gallery</Link>
      </div>
    );
  }

  return (
    <article className="container py-5" style={{ maxWidth: "58rem" }}>
      <AlbumHero album={album} />
      <AlbumStats album={album} />
      <p className="text-stone mb-4" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>{album.description}</p>

      <div className="d-flex flex-wrap gap-3 mb-5">
        {album.journeyLink && (
          <Link to={album.journeyLink} className="btn btn-gold">
            <i className="bi bi-journal-text me-2"></i>View Journal
          </Link>
        )}
        {album.destinationLink && (
          <Link to={album.destinationLink} className="btn btn-outline-ink">
            <i className="bi bi-compass me-2"></i>Explore Destination
          </Link>
        )}
      </div>

      <AlbumPhotoGrid album={album} />
      <RelatedAlbums albums={related} />
    </article>
  );
};

export default AlbumDetail;
