import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import JourneyHero from "./journaldetailcomponents/JourneyHero";
import RouteMap from "./journaldetailcomponents/RouteMap";
import QuickFacts from "./journaldetailcomponents/QuickFacts";
import CompleteStory from "./journaldetailcomponents/CompleteStory";
import PhotoGallery from "./journaldetailcomponents/PhotoGallery";
import VideoGallery from "./journaldetailcomponents/VideoGallery";
import TravelHighlights from "./journaldetailcomponents/TravelHighlights";
import BestMoments from "./journaldetailcomponents/BestMoments";
import LocalFood from "./journaldetailcomponents/LocalFood";
import TravelTipsList from "./journaldetailcomponents/TravelTipsList";
import LessonsLearned from "./journaldetailcomponents/LessonsLearned";
import TravelExpenses from "./journaldetailcomponents/TravelExpenses";
import ThingsLoved from "./journaldetailcomponents/ThingsLoved";
import RecommendVerdict from "./journaldetailcomponents/RecommendVerdict";
import JourneyPrevNext from "./journaldetailcomponents/JourneyPrevNext";
import RelatedJourneysStrip from "./journaldetailcomponents/RelatedJourneysStrip";
import { relatedJourneyGroups } from "../../data/journeys";
import { api } from "../../api/client";

const JournalDetail = () => {
  const { slug } = useParams();
  const [journey, setJourney] = useState(null);
  const [allJourneys, setAllJourneys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setNotFound(false);

    const load = async () => {
      try {
        const [journeyData, listData] = await Promise.all([
          api.get(`/journeys/${slug}`),
          api.get("/journeys?limit=100"),
        ]);
        if (!isMounted) return;
        setJourney(journeyData.journey);
        setAllJourneys(listData.journeys || []);
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

  if (notFound || !journey) {
    return (
      <div className="container text-center py-5">
        <p className="text-stone">Journey not found.</p>
        <Link to="/travel-journal" className="link-underline fw-semibold">Back to travel journal</Link>
      </div>
    );
  }

  const chronological = [...allJourneys].sort((a, b) => new Date(a.date) - new Date(b.date));
  const idx = chronological.findIndex((j) => j.slug === slug);
  const prev = idx > 0 ? chronological[idx - 1] : null;
  const next = idx !== -1 && idx < chronological.length - 1 ? chronological[idx + 1] : null;
  const group = relatedJourneyGroups.find((g) => g.slugs.includes(slug));

  return (
    <div className="journal-theme journal-paper py-5">
      <article className="container" style={{ maxWidth: "52rem" }}>
        <JourneyHero journey={journey} />
        <RouteMap journey={journey} />
        <QuickFacts facts={journey.quickFacts} />
        <CompleteStory story={journey.story} />
        <PhotoGallery gallery={journey.gallery} />
        <VideoGallery videoCount={journey.videoCount} />

        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <TravelHighlights highlights={journey.highlights} />
            <LocalFood food={journey.localFood} />
            <LessonsLearned lessons={journey.lessonsLearned} />
          </div>
          <div className="col-md-6">
            <BestMoments moments={journey.bestMoments} />
            <TravelTipsList tips={journey.travelTips} />
            <TravelExpenses expenses={journey.expenses} />
          </div>
        </div>

        <ThingsLoved things={journey.thingsLoved} />
        <RecommendVerdict recommend={journey.recommend} />

        <JourneyPrevNext prev={prev} next={next} />
        <RelatedJourneysStrip group={group} currentSlug={slug} />
      </article>
    </div>
  );
};

export default JournalDetail;
