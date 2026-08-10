import React, { useEffect, useMemo, useState } from "react";
import GalleryHero from "./gallerycomponents/GalleryHero";
import GalleryToolbar from "./gallerycomponents/GalleryToolbar";
import FeaturedAlbums from "./gallerycomponents/FeaturedAlbums";
import LatestPhotos from "./gallerycomponents/LatestPhotos";
import PopularAlbums from "./gallerycomponents/PopularAlbums";
import PhotographyCollections from "./gallerycomponents/PhotographyCollections";
import BestShotOfWeek from "./gallerycomponents/BestShotOfWeek";
import MostLikedPhotos from "./gallerycomponents/MostLikedPhotos";
import PhotoArchive from "./gallerycomponents/PhotoArchive";
import PhotographyTipsSection from "./gallerycomponents/PhotographyTipsSection";
import PhotographyGear from "./gallerycomponents/PhotographyGear";
import BehindTheShot from "./gallerycomponents/BehindTheShot";
import FavoriteCollections from "./gallerycomponents/FavoriteCollections";
import GalleryQuotes from "./gallerycomponents/GalleryQuotes";
import Newsletter from "../../components/Newsletter";
import {
  photographyCollections,
  favoriteCollections,
  shotOfTheWeek,
  photographyGear,
  behindTheShot,
  photographyQuotes,
} from "../../data/gallery";
import { photographyTips } from "../../data/samplePosts";
import { api } from "../../api/client";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState([]);
  const [galleryFilterCategories, setGalleryFilterCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get("/gallery?limit=100");
        setAlbums(data.albums || []);
      } catch (err) {
        setAlbums([]);
      } finally {
        setLoading(false);
      }
    };
    load();

    api
      .get("/categories?type=gallery")
      .then((data) => setGalleryFilterCategories((data.categories || []).map((c) => c.name)))
      .catch(() => {});
  }, []);

  const featuredAlbums = useMemo(() => [...albums].sort((a, b) => b.views - a.views).slice(0, 6), [albums]);

  const allPhotos = useMemo(
    () =>
      albums.flatMap((album) =>
        (album.photos || []).map((photo) => ({ ...photo, albumSlug: album.slug, albumName: album.name }))
      ),
    [albums]
  );

  const popularAlbums = useMemo(() => [...albums].sort((a, b) => b.views - a.views), [albums]);

  const mostLikedPhotos = useMemo(() => [...allPhotos].sort((a, b) => b.likes - a.likes).slice(0, 8), [allPhotos]);

  const filteredPhotos = useMemo(() => {
    return allPhotos.filter((photo) => {
      const matchesFilter = activeFilter === "all" || (photo.tags || []).includes(activeFilter);
      const q = query.toLowerCase();
      const matchesQuery =
        !query.trim() ||
        (photo.caption || "").toLowerCase().includes(q) ||
        (photo.location || "").toLowerCase().includes(q) ||
        (photo.albumName || "").toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [allPhotos, activeFilter, query]);

  const jumpToPhotos = (tag) => {
    setActiveFilter(tag);
    const el = document.getElementById("photos");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (loading) {
    return <div className="container py-5 text-center"><p className="text-stone">Loading…</p></div>;
  }

  return (
    <div className="container py-5">
      <GalleryHero />

      {albums.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-stone">No albums have been published yet — add your first album from the admin dashboard.</p>
        </div>
      ) : (
        <>
          <FeaturedAlbums albums={featuredAlbums} />

          <div id="photos-toolbar">
            <GalleryToolbar
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              query={query}
              setQuery={setQuery}
              galleryFilterCategories={galleryFilterCategories}
            />
            <LatestPhotos photos={filteredPhotos} />
          </div>

          <hr className="route-divider my-5" />

          <PopularAlbums albums={popularAlbums} />
          <PhotographyCollections collections={photographyCollections} onSelect={jumpToPhotos} />
          <BestShotOfWeek photo={shotOfTheWeek} />
          <MostLikedPhotos photos={mostLikedPhotos} />
          <PhotoArchive photos={allPhotos} />
        </>
      )}

      <PhotographyTipsSection tips={photographyTips} />
      <PhotographyGear gear={photographyGear} />
      <BehindTheShot photo={behindTheShot} />
      <FavoriteCollections collections={favoriteCollections} />
      <GalleryQuotes quotes={photographyQuotes} />

      <Newsletter />
    </div>
  );
};

export default Gallery;
