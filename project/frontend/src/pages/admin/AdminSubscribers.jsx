import React, { useEffect, useState } from "react";
import { api } from "../../api/client";

const AdminSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadSubscribers = async () => {
    setLoading(true);
    try {
      const data = await api.get("/subscribers", { auth: true });
      setSubscribers(data.subscribers || []);
    } catch (err) {
      setError(err.message || "Unable to load subscribers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubscribers();
  }, []);

  const handleDelete = async (id, email) => {
    if (!window.confirm(`"${email}" ko subscribers list se hatana hai?`)) return;
    try {
      await api.delete(`/subscribers/${id}`, { auth: true });
      setSubscribers((prev) => prev.filter((s) => (s._id || s.id) !== id));
    } catch (err) {
      alert(err.message || "Unable to delete");
    }
  };

  return (
    <div>
      <p
        className="font-mono text-gold-dark mb-1"
        style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
      >
        Newsletter
      </p>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h1 className="font-display fw-semibold mb-0">Subscribers</h1>
        <span
          className="badge px-3 py-2"
          style={{ fontSize: "0.9rem", background: "var(--gold)", color: "var(--ink)" }}
        >
          {subscribers.length} total
        </span>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {loading ? (
        <p className="text-stone">Loading…</p>
      ) : subscribers.length === 0 ? (
        <p className="text-stone">No one has subscribed yet.</p>
      ) : (
        <div className="table-responsive rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
          <table className="table align-middle mb-0">
            <thead>
              <tr className="font-mono small text-stone" style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>
                <th className="px-3">Email</th>
                <th>Subscribed On</th>
                <th className="text-end px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((sub) => {
                const subId = sub._id || sub.id;
                return (
                  <tr key={subId}>
                    <td className="px-3">{sub.email}</td>
                    <td>
                      {new Date(sub.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="text-end px-3">
                      <button onClick={() => handleDelete(subId, sub.email)} className="btn btn-sm btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminSubscribers;
