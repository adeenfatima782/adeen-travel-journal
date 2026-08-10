import React, { useEffect, useMemo, useState } from "react";
import JournalHero from "./journalcomponents/JournalHero";
import JournalToolbar from "./journalcomponents/JournalToolbar";
import JourneyTimeline from "./journalcomponents/JourneyTimeline";
import FeaturedJourney from "./journalcomponents/FeaturedJourney";
import RecentJourneys from "./journalcomponents/RecentJourneys";
import JourneyCards from "./journalcomponents/JourneyCards";
import TravelStatistics from "./journalcomponents/TravelStatistics";
import BestTravelMemories from "./journalcomponents/BestTravelMemories";
import PakistanBucketList from "./journalcomponents/PakistanBucketList";
import TravelGoals from "./journalcomponents/TravelGoals";
import JournalGallery from "./journalcomponents/JournalGallery";
import JournalQuotes from "./journalcomponents/JournalQuotes";
import RelatedJourneysSection from "./journalcomponents/RelatedJourneysSection";
import TravelCompanions from "./journalcomponents/TravelCompanions";
import InstagramNote from "./journalcomponents/InstagramNote";
import Newsletter from "../../components/Newsletter";
import {
  travelStatistics,
  bestTravelMemories,
  pakistanBucketList,
  travelGoals,
  relatedJourneyGroups,
  travelCompanions,
} from "../../data/journeys";
import { signatureQuotes } from "../../data/samplePosts";
import { api } from "../../api/client";

const TravelJournal = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeYear, setActiveYear] = useState("all");
  const [query, setQuery] = useState("");
  const [journeys, setJourneys] = useState([]);
  const [journalCategories, setJournalCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get("/journeys?limit=100");
        setJourneys(data.journeys || []);
      } catch (err) {
        setJourneys([]);
      } finally {
        setLoading(false);
      }
    };
    load();

    api
      .get("/categories?type=journal")
      .then((data) => setJournalCategories((data.categories || []).map((c) => c.name)))
      .catch(() => {});
  }, []);

  const journeysChronological = useMemo(
    () => [...journeys].sort((a, b) => new Date(a.date) - new Date(b.date)),
    [journeys]
  );

  const latestJourney = journeysChronological[journeysChronological.length - 1];
  const featuredJourney = useMemo(() => [...journeys].sort((a, b) => b.rating - a.rating)[0], [journeys]);
  const recentJourneys = useMemo(() => [...journeysChronological].reverse().slice(0, 6), [journeysChronological]);

  const galleryPhotos = useMemo(
    () => journeys.flatMap((j) => (j.gallery || []).map((g) => ({ ...g, slug: j.slug }))).slice(0, 12),
    [journeys]
  );

  const filteredJourneys = useMemo(() => {
    return journeys.filter((j) => {
      const matchesCategory = activeCategory === "all" || (j.category || []).includes(activeCategory);
      const matchesYear = activeYear === "all" || j.year === activeYear;
      const q = query.toLowerCase();
      const matchesQuery =
        !query.trim() ||
        j.place.toLowerCase().includes(q) ||
        (j.region || "").toLowerCase().includes(q) ||
        (j.date || "").includes(q);
      return matchesCategory && matchesYear && matchesQuery;
    });
  }, [journeys, activeCategory, activeYear, query]);

  if (loading) {
    return <div className="journal-theme journal-paper py-5 text-center"><p className="text-stone">Loading…</p></div>;
  }

  return (
    <div className="journal-theme journal-paper py-5">
      <div className="container">
        <JournalHero latestJourney={latestJourney} />

        {journeys.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-stone">No journal entries have been published yet — add your first entry from the admin dashboard.</p>
          </div>
        ) : (
          <>
            <JourneyTimeline />
            <FeaturedJourney journey={featuredJourney} />
            <RecentJourneys journeys={recentJourneys} />

            <div id="journey-cards">
              <JournalToolbar
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                activeYear={activeYear}
                setActiveYear={setActiveYear}
                query={query}
                setQuery={setQuery}
                journalCategories={journalCategories}
              />
              <JourneyCards journeys={filteredJourneys} />
            </div>

            <hr className="stitch-divider" />

            <JournalGallery photos={galleryPhotos} />
          </>
        )}

        <TravelStatistics stats={travelStatistics} />
        <BestTravelMemories memories={bestTravelMemories} />
        <PakistanBucketList places={pakistanBucketList} />
        <TravelGoals goals={travelGoals} />
        <TravelCompanions companions={travelCompanions} />
        <InstagramNote />
        <JournalQuotes quotes={signatureQuotes} />
        <RelatedJourneysSection groups={relatedJourneyGroups} />

        <Newsletter />
      </div>
    </div>
  );
};

export default TravelJournal;
