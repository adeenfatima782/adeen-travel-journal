import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/client";

const AdminGallery = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    try {
      const data = await api.get("/gallery/admin/all", { auth: true });
      setAlbums(data.albums || []);
    } catch (err) {
      setError(err.message || "Unable to load albums");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete the "${name}" album?`)) return;
    try {
      await api.delete(`/gallery/${id}`, { auth: true });
      setAlbums((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      alert(err.message || "Unable to delete");
    }
  };

  const togglePublish = async (album) => {
    try {
      const data = await api.put(`/gallery/${album.id}`, { published: !album.published }, { auth: true });
      setAlbums((prev) => prev.map((a) => (a.id === album.id ? data.album : a)));
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
          <h1 className="font-display fw-semibold mb-0">Gallery Albums</h1>
        </div>
        <Link to="/admin/gallery/new" className="btn btn-gold btn-sm">
          <i className="bi bi-plus-lg me-1"></i>New Album
        </Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {loading ? (
        <p className="text-stone">Loading…</p>
      ) : albums.length === 0 ? (
        <p className="text-stone">There are no albums yet.</p>
      ) : (
        <div className="row g-4">
          {albums.map((album) => (
            <div className="col-md-4" key={album.id}>
              <div className="rounded-3 overflow-hidden h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img src={album.cover} alt={album.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
                </div>
                <div className="p-3">
                  <p className="fw-semibold mb-1">{album.name}</p>
                  <p className="text-stone small mb-2">{album.photos?.length || 0} photos · {album.region}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      onClick={() => togglePublish(album)}
                      className={`badge border-0 ${album.published ? "bg-success-subtle text-success" : "bg-secondary-subtle text-secondary"}`}
                      style={{ cursor: "pointer" }}
                    >
                      {album.published ? "Published" : "Draft"}
                    </button>
                    <div>
                      <Link to={`/admin/gallery/${album.id}/edit`} className="btn btn-sm btn-outline-ink me-1">
                        <i className="bi bi-pencil"></i>
                      </Link>
                      <button onClick={() => handleDelete(album.id, album.name)} className="btn btn-sm btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminGallery;
