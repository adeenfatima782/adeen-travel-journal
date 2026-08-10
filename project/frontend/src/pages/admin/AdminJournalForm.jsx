import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/client";
import ImageUploadField from "./ImageUploadField";

const emptyForm = {
  place: "",
  slug: "",
  region: "",
  year: "",
  date: "",
  days: 1,
  rating: 4.5,
  category: "",
  weatherCondition: "",
  weatherHigh: "",
  weatherLow: "",
  lat: "",
  lng: "",
  cover: "",
  videoCount: 0,
  altitude: "",
  distance: "",
  difficulty: "",
  bestTime: "",
  story: "",
  highlights: "",
  bestMoments: "",
  travelTips: "",
  lessonsLearned: "",
  thingsLoved: "",
  recommendRating: 5,
  recommendVerdict: "",
  galleryJson: "[]",
  localFoodJson: "[]",
  expensesJson: "[]",
  published: true,
};

const lines = (str) => str.split("\n").map((s) => s.trim()).filter(Boolean);

const AdminJournalForm = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isEdit) return;
    const load = async () => {
      try {
        const data = await api.get("/journeys/admin/all", { auth: true });
        const j = (data.journeys || []).find((x) => x.id === id);
        if (!j) {
          setError("Entry not found");
          return;
        }
        setForm({
          place: j.place || "",
          slug: j.slug || "",
          region: j.region || "",
          year: j.year || "",
          date: j.date ? j.date.slice(0, 10) : "",
          days: j.days || 1,
          rating: j.rating || 4.5,
          category: (j.category || []).join(", "),
          weatherCondition: j.weather?.condition || "",
          weatherHigh: j.weather?.high ?? "",
          weatherLow: j.weather?.low ?? "",
          lat: j.lat ?? "",
          lng: j.lng ?? "",
          cover: j.cover || "",
          videoCount: j.videoCount || 0,
          altitude: j.quickFacts?.altitude || "",
          distance: j.quickFacts?.distance || "",
          difficulty: j.quickFacts?.difficulty || "",
          bestTime: j.quickFacts?.bestTime || "",
          story: (j.story || []).join("\n\n"),
          highlights: (j.highlights || []).join("\n"),
          bestMoments: (j.bestMoments || []).join("\n"),
          travelTips: (j.travelTips || []).join("\n"),
          lessonsLearned: (j.lessonsLearned || []).join("\n"),
          thingsLoved: (j.thingsLoved || []).join("\n"),
          recommendRating: j.recommend?.rating || 5,
          recommendVerdict: j.recommend?.verdict || "",
          galleryJson: JSON.stringify(j.gallery || [], null, 2),
          localFoodJson: JSON.stringify(j.localFood || [], null, 2),
          expensesJson: JSON.stringify(j.expenses || [], null, 2),
          published: j.published,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    let gallery, localFood, expenses;
    try {
      gallery = JSON.parse(form.galleryJson || "[]");
      localFood = JSON.parse(form.localFoodJson || "[]");
      expenses = JSON.parse(form.expensesJson || "[]");
    } catch (err) {
      setError("Gallery / Local Food / Expenses mein se kisi ek ka JSON invalid hai.");
      return;
    }

    setSaving(true);
    const payload = {
      place: form.place,
      slug: form.slug || undefined,
      region: form.region,
      year: Number(form.year) || undefined,
      date: form.date || undefined,
      days: Number(form.days) || 1,
      rating: Number(form.rating) || 4.5,
      category: form.category.split(",").map((c) => c.trim()).filter(Boolean),
      weather: {
        condition: form.weatherCondition,
        high: form.weatherHigh ? Number(form.weatherHigh) : undefined,
        low: form.weatherLow ? Number(form.weatherLow) : undefined,
      },
      lat: form.lat ? Number(form.lat) : undefined,
      lng: form.lng ? Number(form.lng) : undefined,
      cover: form.cover,
      videoCount: Number(form.videoCount) || 0,
      quickFacts: {
        altitude: form.altitude,
        distance: form.distance,
        difficulty: form.difficulty,
        bestTime: form.bestTime,
      },
      story: form.story.split("\n\n").map((s) => s.trim()).filter(Boolean),
      highlights: lines(form.highlights),
      bestMoments: lines(form.bestMoments),
      travelTips: lines(form.travelTips),
      lessonsLearned: lines(form.lessonsLearned),
      thingsLoved: lines(form.thingsLoved),
      recommend: { rating: Number(form.recommendRating) || 5, verdict: form.recommendVerdict },
      gallery,
      localFood,
      expenses,
      published: form.published,
    };
    if (!payload.slug) delete payload.slug;

    try {
      if (isEdit) {
        await api.put(`/journeys/${id}`, payload, { auth: true });
      } else {
        await api.post("/journeys", payload, { auth: true });
      }
      navigate("/admin/journal");
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
      <h1 className="font-display fw-semibold mb-4">{isEdit ? "Edit Journal Entry" : "Create Journal Entry"}</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="p-4 rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
        <h2 className="h6 font-mono text-stone mb-3">Basics</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-4"><label className="form-label small text-stone">Place</label><input required name="place" value={form.place} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-4"><label className="form-label small text-stone">Slug (auto if blank)</label><input name="slug" value={form.slug} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-4"><label className="form-label small text-stone">Region</label><input name="region" value={form.region} onChange={handleChange} className="form-control form-control-custom" /></div>

          <div className="col-md-3"><label className="form-label small text-stone">Year</label><input type="number" name="year" value={form.year} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-3"><label className="form-label small text-stone">Date</label><input type="date" name="date" value={form.date} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-3"><label className="form-label small text-stone">Days</label><input type="number" name="days" value={form.days} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-3"><label className="form-label small text-stone">Rating (0-5)</label><input type="number" step="0.1" name="rating" value={form.rating} onChange={handleChange} className="form-control form-control-custom" /></div>

          <div className="col-md-6"><label className="form-label small text-stone">Categories (comma separated)</label><input name="category" value={form.category} onChange={handleChange} className="form-control form-control-custom" placeholder="Mountains, Family Trips" /></div>
          <div className="col-md-6"><ImageUploadField label="Cover image" value={form.cover} onChange={(url) => setForm((f) => ({ ...f, cover: url }))} required /></div>
        </div>

        <h2 className="h6 font-mono text-stone mb-3">Weather & Location</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-4"><label className="form-label small text-stone">Weather condition</label><input name="weatherCondition" value={form.weatherCondition} onChange={handleChange} className="form-control form-control-custom" placeholder="Cool & Misty" /></div>
          <div className="col-md-4"><label className="form-label small text-stone">High °C</label><input type="number" name="weatherHigh" value={form.weatherHigh} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-4"><label className="form-label small text-stone">Low °C</label><input type="number" name="weatherLow" value={form.weatherLow} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-6"><label className="form-label small text-stone">Latitude</label><input type="number" step="any" name="lat" value={form.lat} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-6"><label className="form-label small text-stone">Longitude</label><input type="number" step="any" name="lng" value={form.lng} onChange={handleChange} className="form-control form-control-custom" /></div>
        </div>

        <h2 className="h6 font-mono text-stone mb-3">Quick Facts</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-3"><label className="form-label small text-stone">Altitude</label><input name="altitude" value={form.altitude} onChange={handleChange} className="form-control form-control-custom" placeholder="7,500 ft" /></div>
          <div className="col-md-3"><label className="form-label small text-stone">Distance</label><input name="distance" value={form.distance} onChange={handleChange} className="form-control form-control-custom" placeholder="60 km from Islamabad" /></div>
          <div className="col-md-3"><label className="form-label small text-stone">Difficulty</label><input name="difficulty" value={form.difficulty} onChange={handleChange} className="form-control form-control-custom" placeholder="Easy" /></div>
          <div className="col-md-3"><label className="form-label small text-stone">Best time</label><input name="bestTime" value={form.bestTime} onChange={handleChange} className="form-control form-control-custom" placeholder="Mar – Oct" /></div>
        </div>

        <h2 className="h6 font-mono text-stone mb-3">Story</h2>
        <div className="mb-4">
          <label className="form-label small text-stone">Story — leave a blank line between each paragraph</label>
          <textarea rows={8} name="story" value={form.story} onChange={handleChange} className="form-control form-control-custom"></textarea>
        </div>

        <h2 className="h6 font-mono text-stone mb-3">Lists — ek line ek item</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-6"><label className="form-label small text-stone">Highlights</label><textarea rows={4} name="highlights" value={form.highlights} onChange={handleChange} className="form-control form-control-custom"></textarea></div>
          <div className="col-md-6"><label className="form-label small text-stone">Best moments</label><textarea rows={4} name="bestMoments" value={form.bestMoments} onChange={handleChange} className="form-control form-control-custom"></textarea></div>
          <div className="col-md-4"><label className="form-label small text-stone">Travel tips</label><textarea rows={3} name="travelTips" value={form.travelTips} onChange={handleChange} className="form-control form-control-custom"></textarea></div>
          <div className="col-md-4"><label className="form-label small text-stone">Lessons learned</label><textarea rows={3} name="lessonsLearned" value={form.lessonsLearned} onChange={handleChange} className="form-control form-control-custom"></textarea></div>
          <div className="col-md-4"><label className="form-label small text-stone">Things loved</label><textarea rows={3} name="thingsLoved" value={form.thingsLoved} onChange={handleChange} className="form-control form-control-custom"></textarea></div>
        </div>

        <h2 className="h6 font-mono text-stone mb-3">Recommend</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-3"><label className="form-label small text-stone">Rating (1-5)</label><input type="number" name="recommendRating" value={form.recommendRating} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-9"><label className="form-label small text-stone">Verdict</label><input name="recommendVerdict" value={form.recommendVerdict} onChange={handleChange} className="form-control form-control-custom" placeholder="Yes — especially as a first hill-station trip." /></div>
        </div>

        <h2 className="h6 font-mono text-stone mb-3">Advanced (JSON)</h2>
        <div className="row g-3 mb-3">
          <div className="col-12">
            <label className="form-label small text-stone">Gallery photos — [{`{ "src": "...", "caption": "..." }`}]</label>
            <textarea rows={4} name="galleryJson" value={form.galleryJson} onChange={handleChange} className="form-control form-control-custom font-mono" style={{ fontSize: "0.8rem" }}></textarea>
          </div>
          <div className="col-md-6">
            <label className="form-label small text-stone">Local food — [{`{ "name": "...", "note": "..." }`}]</label>
            <textarea rows={4} name="localFoodJson" value={form.localFoodJson} onChange={handleChange} className="form-control form-control-custom font-mono" style={{ fontSize: "0.8rem" }}></textarea>
          </div>
          <div className="col-md-6">
            <label className="form-label small text-stone">Expenses — [{`{ "item": "...", "amount": "..." }`}]</label>
            <textarea rows={4} name="expensesJson" value={form.expensesJson} onChange={handleChange} className="form-control form-control-custom font-mono" style={{ fontSize: "0.8rem" }}></textarea>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2 mb-3">
          <input type="checkbox" id="published" name="published" checked={form.published} onChange={handleChange} className="form-check-input mt-0" />
          <label htmlFor="published" className="form-check-label small text-stone">Published</label>
        </div>

        <button type="submit" className="btn btn-gold" disabled={saving}>
          {saving ? "Saving…" : isEdit ? "Save Changes" : "Create Entry"}
        </button>
      </form>
    </div>
  );
};

export default AdminJournalForm;
