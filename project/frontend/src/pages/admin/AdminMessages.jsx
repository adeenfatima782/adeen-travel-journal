import React, { useEffect, useState } from "react";
import { api } from "../../api/client";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadMessages = async () => {
    setLoading(true);
    try {
      const data = await api.get("/contact", { auth: true });
      setMessages(data.contacts || []);
    } catch (err) {
      setError(err.message || "Unable to load messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const markRead = async (id) => {
    try {
      await api.patch(`/contact/${id}/read`, {}, { auth: true });
      setMessages((prev) => prev.map((m) => (m._id === id || m.id === id ? { ...m, isRead: true } : m)));
    } catch (err) {
      alert(err.message || "Unable to update");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    try {
      await api.delete(`/contact/${id}`, { auth: true });
      setMessages((prev) => prev.filter((m) => (m._id || m.id) !== id));
    } catch (err) {
      alert(err.message || "Unable to delete");
    }
  };

  return (
    <div>
      <p className="font-mono text-gold-dark mb-1" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Inbox
      </p>
      <h1 className="font-display fw-semibold mb-4">Contact Messages</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      {loading ? (
        <p className="text-stone">Loading…</p>
      ) : messages.length === 0 ? (
        <p className="text-stone">No messages have arrived yet.</p>
      ) : (
        <div className="d-flex flex-column gap-3">
          {messages.map((msg) => {
            const msgId = msg._id || msg.id;
            return (
              <div
                key={msgId}
                className="p-4 rounded-3"
                style={{
                  background: "#fff",
                  border: msg.isRead ? "1px solid rgba(28,27,26,0.1)" : "1px solid var(--gold)",
                }}
              >
                <div className="d-flex justify-content-between align-items-start mb-2 flex-wrap gap-2">
                  <div>
                    <p className="fw-semibold mb-0">
                      {msg.name} {!msg.isRead && <span className="badge ms-2" style={{ background: "var(--gold)", color: "var(--ink)" }}>New</span>}
                    </p>
                    <p className="text-stone small mb-0">{msg.email}</p>
                    {msg.subject && <p className="fw-semibold small mt-1 mb-0">{msg.subject}</p>}
                  </div>
                  <p className="text-stone small mb-0">
                    {new Date(msg.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </p>
                </div>
                <p className="text-stone mb-3" style={{ whiteSpace: "pre-wrap" }}>{msg.message}</p>
                <div className="d-flex gap-2">
                  {!msg.isRead && (
                    <button onClick={() => markRead(msgId)} className="btn btn-sm btn-outline-ink">
                      Mark as read
                    </button>
                  )}
                  <button onClick={() => handleDelete(msgId)} className="btn btn-sm btn-outline-danger">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
