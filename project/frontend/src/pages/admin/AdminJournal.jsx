import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/client";

const AdminJournal = () => {
  const [journeys, setJourneys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    try {
      const data = await api.get("/journeys/admin/all", { auth: true });
      setJourneys(data.journeys || []);
    } catch (err) {
      setError(err.message || "Unable to load journal entries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id, place) => {
    if (!window.confirm(`Delete the "${place}" entry?`)) return;
    try {
      await api.delete(`/journeys/${id}`, { auth: true });
      setJourneys((prev) => prev.filter((j) => j.id !== id));
    } catch (err) {
      alert(err.message || "Unable to delete");
    }
  };

  const togglePublish = async (journey) => {
    try {
      const data = await api.put(`/journeys/${journey.id}`, { published: !journey.published }, { auth: true });
      setJourneys((prev) => prev.map((j) => (j.id === journey.id ? data.journey : j)));
    } catch (err) {
      alert(err.message || "Unable to update");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <p className="font-mono text-gold-dark mb-1" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Manage
          </p>
          <h1 className="font-display fw-semibold mb-0">Travel Journal</h1>
        </div>
        <Link to="/admin/journal/new" className="btn btn-gold btn-sm">
          <i className="bi bi-plus-lg me-1"></i>New Entry
        </Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {loading ? (
        <p className="text-stone">Loading…</p>
      ) : journeys.length === 0 ? (
        <p className="text-stone">There are no journal entries yet.</p>
      ) : (
        <div className="table-responsive rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
          <table className="table align-middle mb-0">
            <thead>
              <tr className="font-mono small text-stone" style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>
                <th className="px-3">Place</th>
                <th>Year</th>
                <th>Days</th>
                <th>Status</th>
                <th className="text-end px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {journeys.map((j) => (
                <tr key={j.id}>
                  <td className="px-3">
                    <p className="fw-semibold mb-0">{j.place}</p>
                    <p className="text-stone small mb-0">{j.region}</p>
                  </td>
                  <td>{j.year}</td>
                  <td>{j.days}</td>
                  <td>
                    <button
                      onClick={() => togglePublish(j)}
                      className={`badge border-0 ${j.published ? "bg-success-subtle text-success" : "bg-secondary-subtle text-secondary"}`}
                      style={{ cursor: "pointer" }}
                    >
                      {j.published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="text-end px-3">
                    <Link to={`/admin/journal/${j.id}/edit`} className="btn btn-sm btn-outline-ink me-2">
                      <i className="bi bi-pencil"></i>
                    </Link>
                    <button onClick={() => handleDelete(j.id, j.place)} className="btn btn-sm btn-outline-danger">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminJournal;
