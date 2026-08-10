import React, { useEffect, useState } from "react";
import Hero from "./homecomponents/Hero";
import SearchDestination from "./homecomponents/SearchDestination";
import CategoryStrip from "./homecomponents/CategoryStrip";
import FeatureHighlights from "./homecomponents/FeatureHighlights";
import FeaturedStory from "./homecomponents/FeaturedStory";
import JournalPreview from "./homecomponents/JournalPreview";
import RecentEntries from "./homecomponents/RecentEntries";
import FeaturedPhotoOfWeek from "./homecomponents/FeaturedPhotoOfWeek";
import QuoteBanner from "./homecomponents/QuoteBanner";
import StatsBar from "./homecomponents/StatsBar";
import GalleryStrip from "./homecomponents/GalleryStrip";
import PopularDestinations from "./homecomponents/PopularDestinations";
import Top5Destinations from "./homecomponents/Top5Destinations";
import VisitedPlacesMap from "./homecomponents/VisitedPlacesMap";
import TravelTips from "./homecomponents/TravelTips";
import WhereIveBeen from "./homecomponents/WhereIveBeen";
import OnThisDay from "./homecomponents/OnThisDay";
import TripMoodFinder from "./homecomponents/TripMoodFinder";
import AboutTeaser from "./homecomponents/AboutTeaser";
import PartnersStrip from "./homecomponents/PartnersStrip";
import Newsletter from "../../components/Newsletter";
import { signatureQuotes } from "../../data/samplePosts";
import { api } from "../../api/client";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [galleryPhotos, setGalleryPhotos] = useState([]);

  useEffect(() => {
    api
      .get("/posts?sort=-date&limit=7")
      .then((data) => setPosts(data.posts || []))
      .catch(() => setPosts([]));

    api
      .get("/gallery?sort=-views&limit=6")
      .then((data) => {
        const photos = (data.albums || [])
          .flatMap((a) => (a.photos || []).map((p) => p.src))
          .slice(0, 8);
        setGalleryPhotos(photos);
      })
      .catch(() => setGalleryPhotos([]));
  }, []);

  const [featured, ...rest] = posts;

  return (
    <div>
      <Hero />
      <main className="container">
        <div className="pt-5">
          <SearchDestination />
        </div>
        <CategoryStrip />
        <FeatureHighlights />
        <hr className="route-divider my-5" />
        {featured && <FeaturedStory post={featured} />}
        <JournalPreview />
        <hr className="route-divider my-5" />
        {rest.length > 0 && <RecentEntries posts={rest.slice(0, 6)} />}
        <FeaturedPhotoOfWeek />
        <QuoteBanner text={signatureQuotes[0]} />
        <StatsBar />
        {galleryPhotos.length > 0 && <GalleryStrip photos={galleryPhotos} />}
        <PopularDestinations />
        <Top5Destinations />
        <VisitedPlacesMap />
        <TravelTips />
        <WhereIveBeen />
        <OnThisDay />
        <TripMoodFinder />
        <AboutTeaser />
        <PartnersStrip />
        <div className="pb-5 mb-4">
          <Newsletter />
        </div>
      </main>
    </div>
  );
};

export default Home;
