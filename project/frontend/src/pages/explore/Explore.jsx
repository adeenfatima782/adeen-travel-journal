import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ExploreHero from "./explorecomponents/ExploreHero";
import DestinationFilters from "./explorecomponents/DestinationFilters";
import FeaturedDestinations from "./explorecomponents/FeaturedDestinations";
import DestinationGrid from "./explorecomponents/DestinationGrid";
import CategoryExplorer from "./explorecomponents/CategoryExplorer";
import MapPlaceholder from "./explorecomponents/MapPlaceholder";
import SpotlightSelector from "./explorecomponents/SpotlightSelector";
import PopularAttractions from "./explorecomponents/PopularAttractions";
import BestTimeToVisit from "./explorecomponents/BestTimeToVisit";
import EstimatedBudget from "./explorecomponents/EstimatedBudget";
import AITripPlanner from "./explorecomponents/AITripPlanner";
import PhotographySpots from "./explorecomponents/PhotographySpots";
import PackingChecklist from "./explorecomponents/PackingChecklist";
import BudgetCalculator from "./explorecomponents/BudgetCalculator";
import WeatherCard from "./explorecomponents/WeatherCard";
import TravelTimeline from "./explorecomponents/TravelTimeline";
import SafetyDifficulty from "./explorecomponents/SafetyDifficulty";
import LocalFood from "./explorecomponents/LocalFood";
import HotelsList from "./explorecomponents/HotelsList";
import NearbyPlaces from "./explorecomponents/NearbyPlaces";
import RouteInformation from "./explorecomponents/RouteInformation";
import DistanceCalculator from "./explorecomponents/DistanceCalculator";
import LocalCulture from "./explorecomponents/LocalCulture";
import EmergencyContacts from "./explorecomponents/EmergencyContacts";
import ThingsToAvoid from "./explorecomponents/ThingsToAvoid";
import { api } from "../../api/client";

const Explore = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [activeType, setActiveType] = useState("All");
  const [activeBudget, setActiveBudget] = useState("All");
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [spotlightSlug, setSpotlightSlug] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get("/destinations?limit=100");
        const list = data.destinations || [];
        setDestinations(list);
        if (list.length) setSpotlightSlug(list[0].slug);
      } catch (err) {
        setDestinations([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const matchesType = activeType === "All" || d.type === activeType;
      const matchesBudget = activeBudget === "All" || d.budget === activeBudget;
      const matchesQuery = !query.trim() || d.name.toLowerCase().includes(query.toLowerCase());
      return matchesType && matchesBudget && matchesQuery;
    });
  }, [destinations, query, activeType, activeBudget]);

  const uniqueDestinations = useMemo(() => {
    const seen = new Set();
    return destinations.filter((d) => (seen.has(d.slug) ? false : (seen.add(d.slug), true)));
  }, [destinations]);

  const featured = useMemo(
    () => [...uniqueDestinations].sort((a, b) => b.rating - a.rating).slice(0, 4),
    [uniqueDestinations]
  );
  const spotlight = destinations.find((d) => d.slug === spotlightSlug) || destinations[0] || null;

  const selectSpotlight = (slug) => {
    setSpotlightSlug(slug);
    const el = document.getElementById("spotlight-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (loading) {
    return <div className="container py-5 text-center"><p className="text-stone">Loading…</p></div>;
  }

  return (
    <div className="container py-5">
      <ExploreHero query={query} setQuery={setQuery} />

      {destinations.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-stone">No destinations have been published yet — add your first destination from the admin dashboard.</p>
        </div>
      ) : (
        <>
          <FeaturedDestinations destinations={featured} onSelect={selectSpotlight} activeSlug={spotlightSlug} />

          <DestinationFilters
            activeType={activeType}
            setActiveType={setActiveType}
            activeBudget={activeBudget}
            setActiveBudget={setActiveBudget}
          />
          <div className="mb-5">
            <DestinationGrid destinations={filtered} onSelect={selectSpotlight} />
          </div>

          <CategoryExplorer setActiveType={setActiveType} />
          <MapPlaceholder destination={spotlight} />

          <hr className="route-divider my-5" />

          <section id="spotlight-section" className="mb-5">
            <div className="text-center mb-4">
              <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                Destination Spotlight
              </p>
              <h2 className="font-display fw-semibold">A Closer Look</h2>
              <p className="text-stone mx-auto" style={{ maxWidth: "34rem" }}>
                Pick a place to see attractions, food, hotels, and photo spots specific to it.
              </p>
            </div>
            <SpotlightSelector destinations={uniqueDestinations} activeSlug={spotlightSlug} onSelect={setSpotlightSlug} />

            <div className="row g-4 mb-4">
              <div className="col-md-6 col-lg-3">
                <PopularAttractions destination={spotlight} />
              </div>
              <div className="col-md-6 col-lg-3">
                <PhotographySpots destination={spotlight} />
              </div>
              <div className="col-md-6 col-lg-3">
                <WeatherCard destination={spotlight} />
              </div>
              <div className="col-md-6 col-lg-3">
                <SafetyDifficulty destination={spotlight} />
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-6">
                <TravelTimeline destination={spotlight} />
              </div>
              <div className="col-lg-6">
                <AITripPlanner />
              </div>
            </div>

            <div className="row g-4 mt-1">
              <div className="col-md-6 col-lg-3">
                <NearbyPlaces destination={spotlight} />
              </div>
              <div className="col-md-6 col-lg-3">
                <EmergencyContacts />
              </div>
              <div className="col-md-6 col-lg-3">
                <RouteInformation destination={spotlight} />
              </div>
              <div className="col-md-6 col-lg-3">
                <DistanceCalculator />
              </div>
            </div>
          </section>

          <LocalFood destination={spotlight} />
          <HotelsList destination={spotlight} />
        </>
      )}

      <LocalCulture />
      <ThingsToAvoid />

      <BestTimeToVisit destination={spotlight} />
      <EstimatedBudget />

      <hr className="route-divider my-5" />

      <div className="text-center mb-5">
        <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
          Trip Planning Tools
        </p>
        <h2 className="font-display fw-semibold">Plan Before You Pack</h2>
      </div>
      <div className="row g-4">
        <div className="col-md-6">
          <BudgetCalculator />
        </div>
        <div className="col-md-6">
          <PackingChecklist />
        </div>
      </div>
    </div>
  );
};

export default Explore;
