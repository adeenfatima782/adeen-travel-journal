import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api, uploadImage } from "../../api/client";
import ImageUploadField from "./ImageUploadField";

const emptyForm = {
  name: "",
  slug: "",
  region: "",
  cover: "",
  description: "",
  tags: "",
  journeyLink: "",
  destinationLink: "",
  photosJson: "[]",
  published: true,
};

const photoExample = `[
  { "src": "https://...", "caption": "Karimabad rooftops", "location": "Hunza", "date": "2024-05-14", "camera": "Sony A7III", "tags": ["Sunset"] }
]`;

const AdminGalleryForm = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [photoUploading, setPhotoUploading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isEdit) return;
    const load = async () => {
      try {
        const data = await api.get("/gallery/admin/all", { auth: true });
        const album = (data.albums || []).find((a) => a.id === id);
        if (!album) {
          setError("Album not found");
          return;
        }
        setForm({
          name: album.name || "",
          slug: album.slug || "",
          region: album.region || "",
          cover: album.cover || "",
          description: album.description || "",
          tags: (album.tags || []).join(", "),
          journeyLink: album.journeyLink || "",
          destinationLink: album.destinationLink || "",
          photosJson: JSON.stringify(album.photos || [], null, 2),
          published: album.published,
        });
      } catch (err) {
        setError(err.message || "Unable to load");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPhotoUploading(true);
    try {
      const url = await uploadImage(file);
      let current;
      try {
        current = JSON.parse(form.photosJson || "[]");
        if (!Array.isArray(current)) current = [];
      } catch {
        current = [];
      }
      current.push({ src: url, caption: "", tags: [] });
      setForm((f) => ({ ...f, photosJson: JSON.stringify(current, null, 2) }));
    } catch (err) {
      alert(err.message || "Upload failed");
    } finally {
      setPhotoUploading(false);
      e.target.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    let photos;
    try {
      photos = JSON.parse(form.photosJson || "[]");
      if (!Array.isArray(photos)) throw new Error();
    } catch (err) {
      setError("The Photos field must contain a valid JSON array — see the example below.");
      return;
    }

    setSaving(true);
    const payload = {
      name: form.name,
      slug: form.slug || undefined,
      region: form.region,
      cover: form.cover,
      description: form.description,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      journeyLink: form.journeyLink,
      destinationLink: form.destinationLink,
      photos,
      published: form.published,
    };
    if (!payload.slug) delete payload.slug;

    try {
      if (isEdit) {
        await api.put(`/gallery/${id}`, payload, { auth: true });
      } else {
        await api.post("/gallery", payload, { auth: true });
      }
      navigate("/admin/gallery");
    } catch (err) {
      setError(err.message || "Unable to save");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-stone">Loading…</p>;

  return (
    <div>
      <p className="font-mono text-gold-dark mb-1" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        {isEdit ? "Edit" : "New"}
      </p>
      <h1 className="font-display fw-semibold mb-4">{isEdit ? "Edit Album" : "Create Album"}</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="p-4 rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label font-mono small text-stone">Album name</label>
            <input required name="name" value={form.name} onChange={handleChange} className="form-control form-control-custom" />
          </div>
          <div className="col-md-6">
            <label className="form-label font-mono small text-stone">Slug (leave blank — generated automatically)</label>
            <input name="slug" value={form.slug} onChange={handleChange} className="form-control form-control-custom" />
          </div>

          <div className="col-md-6">
            <label className="form-label font-mono small text-stone">Region</label>
            <input name="region" value={form.region} onChange={handleChange} className="form-control form-control-custom" />
          </div>
          <div className="col-md-6">
            <ImageUploadField label="Cover image" value={form.cover} onChange={(url) => setForm((f) => ({ ...f, cover: url }))} required />
          </div>

          <div className="col-12">
            <label className="form-label font-mono small text-stone">Description</label>
            <textarea rows={2} name="description" value={form.description} onChange={handleChange} className="form-control form-control-custom"></textarea>
          </div>

          <div className="col-md-4">
            <label className="form-label font-mono small text-stone">Tags (comma separated)</label>
            <input name="tags" value={form.tags} onChange={handleChange} className="form-control form-control-custom" placeholder="Mountains, Sunset" />
          </div>
          <div className="col-md-4">
            <label className="form-label font-mono small text-stone">Related journey link (optional)</label>
            <input name="journeyLink" value={form.journeyLink} onChange={handleChange} className="form-control form-control-custom" placeholder="/post/four-days-in-hunza" />
          </div>
          <div className="col-md-4">
            <label className="form-label font-mono small text-stone">Destination link (optional)</label>
            <input name="destinationLink" value={form.destinationLink} onChange={handleChange} className="form-control form-control-custom" placeholder="/explore" />
          </div>

          <div className="col-12">
            <label className="form-label font-mono small text-stone">
              Photos — JSON array (src is required for each photo; all other fields are optional)
            </label>
            <div className="d-flex align-items-center gap-2 mb-2">
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handlePhotoUpload}
                className="form-control form-control-custom"
                style={{ maxWidth: "280px" }}
              />
              {photoUploading && <span className="text-stone small">Uploading…</span>}
            </div>
            <p className="text-stone small mb-2">When a photo is uploaded, its entry will be added to the JSON below automatically — you can edit the caption, location, and other details afterward.</p>
            <textarea
              rows={10}
              name="photosJson"
              value={form.photosJson}
              onChange={handleChange}
              className="form-control form-control-custom font-mono"
              style={{ fontSize: "0.8rem" }}
              placeholder={photoExample}
            ></textarea>
            <p className="text-stone small mt-1 mb-0">Example format: {photoExample}</p>
          </div>

          <div className="col-12 d-flex align-items-center gap-2">
            <input type="checkbox" id="published" name="published" checked={form.published} onChange={handleChange} className="form-check-input mt-0" />
            <label htmlFor="published" className="form-check-label small text-stone">Published</label>
          </div>
        </div>

        <button type="submit" className="btn btn-gold mt-4" disabled={saving}>
          {saving ? "Saving…" : isEdit ? "Save Changes" : "Create Album"}
        </button>
      </form>
    </div>
  );
};

export default AdminGalleryForm;
