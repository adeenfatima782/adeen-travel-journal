import React from "react";

const PhotographySpots = ({ destination }) => {
  if (!destination || !destination.photoSpots) return null;
  const { sunrise, sunset, goldenHour, droneAllowed, cameraTip } = destination.photoSpots;

  return (
    <div className="p-4 rounded-3 h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
      <h3 className="font-display fw-semibold h5 mb-1">
        <i className="bi bi-camera me-2 text-gold-dark"></i>Photography Spots
      </h3>
      <p className="text-stone small mb-3">Best angles around {destination.name}.</p>
      <div className="d-flex flex-column gap-2 small">
        <p className="mb-0"><i className="bi bi-sunrise text-gold-dark me-2"></i><strong>Sunrise:</strong> {sunrise}</p>
        <p className="mb-0"><i className="bi bi-sunset text-gold-dark me-2"></i><strong>Sunset:</strong> {sunset}</p>
        <p className="mb-0"><i className="bi bi-brightness-high text-gold-dark me-2"></i><strong>Golden Hour:</strong> {goldenHour}</p>
        <p className="mb-0">
          <i className={`bi ${droneAllowed ? "bi-check-circle text-teal" : "bi-x-circle text-stone"} me-2`}></i>
          <strong>Drone Allowed:</strong> {droneAllowed ? "Yes" : "No / restricted"}
        </p>
      </div>
      <p className="text-stone small mt-3 mb-0 fst-italic">"{cameraTip}"</p>
    </div>
  );
};

export default PhotographySpots;
