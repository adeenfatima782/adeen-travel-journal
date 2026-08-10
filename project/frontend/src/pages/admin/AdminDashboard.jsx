import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/client";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("admin") || "null");
  const [stats, setStats] = useState({ posts: 0, albums: 0, journeys: 0, destinations: 0, messages: 0, unread: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [postsData, albumsData, journeysData, destinationsData, contactsData] = await Promise.all([
          api.get("/posts/admin/all", { auth: true }),
          api.get("/gallery/admin/all", { auth: true }),
          api.get("/journeys/admin/all", { auth: true }),
          api.get("/destinations/admin/all", { auth: true }),
          api.get("/contact", { auth: true }),
        ]);
        setStats({
          posts: (postsData.posts || []).length,
          albums: (albumsData.albums || []).length,
          journeys: (journeysData.journeys || []).length,
          destinations: (destinationsData.destinations || []).length,
          messages: (contactsData.contacts || []).length,
          unread: (contactsData.contacts || []).filter((m) => !m.isRead).length,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const cards = [
    { label: "Blog Posts", value: stats.posts, to: "/admin/posts", icon: "bi-journal-text" },
    { label: "Gallery Albums", value: stats.albums, to: "/admin/gallery", icon: "bi-images" },
    { label: "Journal Entries", value: stats.journeys, to: "/admin/journal", icon: "bi-book" },
    { label: "Destinations", value: stats.destinations, to: "/admin/explore", icon: "bi-compass" },
    {
      label: "Contact Messages",
      value: `${stats.messages}${stats.unread ? ` (${stats.unread} unread)` : ""}`,
      to: "/admin/messages",
      icon: "bi-envelope",
    },
  ];

  return (
    <div>
      <p className="font-mono text-gold-dark mb-1" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Admin Dashboard
      </p>
      <h1 className="font-display fw-semibold mb-4">Welcome, {user?.name || "Admin"}</h1>

      {loading ? (
        <p className="text-stone">Loading…</p>
      ) : (
        <div className="row g-4">
          {cards.map((c) => (
            <div className="col-md-4" key={c.to}>
              <Link to={c.to} className="d-block p-4 rounded-3 text-decoration-none text-reset h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
                <p className="font-mono small text-stone mb-1"><i className={`bi ${c.icon} me-2`}></i>{c.label}</p>
                <h2 className="font-display fw-semibold">{c.value}</h2>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
