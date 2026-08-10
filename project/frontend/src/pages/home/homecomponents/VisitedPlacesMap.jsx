import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { api } from "../../../api/client";

// Custom gold pin (avoids the classic broken-default-marker-icon issue with
// Vite + Leaflet, and matches the site's brand colours instead of the
// default blue Leaflet marker).
const goldPin = L.divIcon({
  className: "",
  html: `<div style="
      width:16px;height:16px;border-radius:50% 50% 50% 0;
      background:#D98E2B;border:2px solid #FAF6EE;
      transform:rotate(-45deg);box-shadow:0 2px 6px rgba(28,27,26,0.4);
    "></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 16],
  popupAnchor: [0, -18],
});

const VisitedPlacesMap = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    api
      .get("/journeys?limit=100")
      .then((data) => setPlaces((data.journeys || []).filter((j) => j.lat && j.lng)))
      .catch(() => setPlaces([]));
  }, []);

  if (!places.length) return null;

  return (
    <section className="py-5" id="visited-map">
      <div className="text-center mb-4">
        <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
          <i className="bi bi-pin-map-fill me-1"></i>Visited Places
        </p>
        <h2 className="font-display fw-semibold">Everywhere I've Been (So Far)</h2>
        <p className="text-stone mx-auto" style={{ maxWidth: "34rem" }}>
          Every marker is a real trip. Click one to see the photo, the story, and where to read more.
        </p>
      </div>

      <div className="rounded-3 overflow-hidden shadow" style={{ border: "1px solid rgba(28,27,26,0.1)" }}>
        <MapContainer
          center={[places[0].lat, places[0].lng]}
          zoom={7}
          scrollWheelZoom={false}
          style={{ height: "480px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {places.map((place) => (
            <Marker key={place.slug} position={[place.lat, place.lng]} icon={goldPin}>
              <Popup>
                <div style={{ width: "180px", fontFamily: "var(--font-body)" }}>
                  <img src={place.cover} alt={place.place} style={{ width: "100%", height: "100px", objectFit: "cover", borderRadius: "6px" }} />
                  <p style={{ fontWeight: 600, margin: "8px 0 4px", fontFamily: "var(--font-display)" }}>{place.place}</p>
                  <p style={{ fontSize: "0.78rem", color: "var(--stone)", margin: "0 0 8px" }}>{(place.story || [])[0] || ""}</p>
                  <Link to={`/journal/${place.slug}`} style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--gold-dark)" }}>
                    Read the story →
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
        {places.map((place) => (
          <span key={place.slug} className="badge rounded-pill" style={{ background: "var(--sand-deep)", color: "var(--stone)", border: "1px solid rgba(28,27,26,0.08)" }}>
            <i className="bi bi-geo-alt-fill me-1 text-gold-dark"></i>{place.place}
          </span>
        ))}
      </div>
    </section>
  );
};

export default VisitedPlacesMap;
