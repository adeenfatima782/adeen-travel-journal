import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/client";

const AdminExplore = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    try {
      const data = await api.get("/destinations/admin/all", { auth: true });
      setDestinations(data.destinations || []);
    } catch (err) {
      setError(err.message || "Unable to load destinations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete "${name}"?`)) return;
    try {
      await api.delete(`/destinations/${id}`, { auth: true });
      setDestinations((prev) => prev.filter((d) => d.id !== id));
    } catch (err) {
      alert(err.message || "Unable to delete");
    }
  };

  const togglePublish = async (dest) => {
    try {
      const data = await api.put(`/destinations/${dest.id}`, { published: !dest.published }, { auth: true });
      setDestinations((prev) => prev.map((d) => (d.id === dest.id ? data.destination : d)));
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
          <h1 className="font-display fw-semibold mb-0">Explore Destinations</h1>
        </div>
        <Link to="/admin/explore/new" className="btn btn-gold btn-sm">
          <i className="bi bi-plus-lg me-1"></i>New Destination
        </Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {loading ? (
        <p className="text-stone">Loading…</p>
      ) : destinations.length === 0 ? (
        <p className="text-stone">There are no destinations yet.</p>
      ) : (
        <div className="table-responsive rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
          <table className="table align-middle mb-0">
            <thead>
              <tr className="font-mono small text-stone" style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>
                <th className="px-3">Name</th>
                <th>Type</th>
                <th>Budget</th>
                <th>Rating</th>
                <th>Status</th>
                <th className="text-end px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {destinations.map((d) => (
                <tr key={d.id}>
                  <td className="px-3">
                    <p className="fw-semibold mb-0">{d.name}</p>
                    <p className="text-stone small mb-0">{d.country}</p>
                  </td>
                  <td>{d.type}</td>
                  <td>{d.budget}</td>
                  <td>{d.rating}</td>
                  <td>
                    <button
                      onClick={() => togglePublish(d)}
                      className={`badge border-0 ${d.published ? "bg-success-subtle text-success" : "bg-secondary-subtle text-secondary"}`}
                      style={{ cursor: "pointer" }}
                    >
                      {d.published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="text-end px-3">
                    <Link to={`/admin/explore/${d.id}/edit`} className="btn btn-sm btn-outline-ink me-2">
                      <i className="bi bi-pencil"></i>
                    </Link>
                    <button onClick={() => handleDelete(d.id, d.name)} className="btn btn-sm btn-outline-danger">
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

export default AdminExplore;
