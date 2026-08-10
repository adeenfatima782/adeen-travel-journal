import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/client";
import ImageUploadField from "./ImageUploadField";

const emptyForm = {
  name: "",
  slug: "",
  image: "",
  country: "Pakistan",
  type: "Mountains",
  rating: 4.5,
  bestTime: "",
  budget: "Mid-range",
  description: "",
  difficulty: "Easy",
  safety: 5,
  attractions: "",
  weatherCondition: "",
  weatherHigh: "",
  weatherLow: "",
  weatherIcon: "bi-sun",
  sunrise: "",
  sunset: "",
  goldenHour: "",
  droneAllowed: false,
  cameraTip: "",
  foodJson: "[]",
  hotelsJson: "[]",
  timelineJson: "[]",
  springNote: "",
  summerNote: "",
  winterNote: "",
  routeTitle: "",
  routeSteps: "",
  lat: "",
  lng: "",
  published: true,
};

const lines = (str) => str.split("\n").map((s) => s.trim()).filter(Boolean);

const AdminExploreForm = () => {
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
        const data = await api.get("/destinations/admin/all", { auth: true });
        const d = (data.destinations || []).find((x) => x.id === id);
        if (!d) {
          setError("Destination not found");
          return;
        }
        setForm({
          name: d.name || "",
          slug: d.slug || "",
          image: d.image || "",
          country: d.country || "Pakistan",
          type: d.type || "Mountains",
          rating: d.rating || 4.5,
          bestTime: d.bestTime || "",
          budget: d.budget || "Mid-range",
          description: d.description || "",
          difficulty: d.difficulty || "Easy",
          safety: d.safety ?? 5,
          attractions: (d.attractions || []).join("\n"),
          weatherCondition: d.weather?.condition || "",
          weatherHigh: d.weather?.high ?? "",
          weatherLow: d.weather?.low ?? "",
          weatherIcon: d.weather?.icon || "bi-sun",
          sunrise: d.photoSpots?.sunrise || "",
          sunset: d.photoSpots?.sunset || "",
          goldenHour: d.photoSpots?.goldenHour || "",
          droneAllowed: d.photoSpots?.droneAllowed || false,
          cameraTip: d.photoSpots?.cameraTip || "",
          foodJson: JSON.stringify(d.food || [], null, 2),
          hotelsJson: JSON.stringify(d.hotels || [], null, 2),
          timelineJson: JSON.stringify(d.timeline || [], null, 2),
          springNote: d.seasonalGuide?.Spring || "",
          summerNote: d.seasonalGuide?.Summer || "",
          winterNote: d.seasonalGuide?.Winter || "",
          routeTitle: d.route?.title || "",
          routeSteps: (d.route?.steps || []).join("\n"),
          lat: d.lat ?? "",
          lng: d.lng ?? "",
          published: d.published,
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

    let food, hotels, timeline;
    try {
      food = JSON.parse(form.foodJson || "[]");
      hotels = JSON.parse(form.hotelsJson || "[]");
      timeline = JSON.parse(form.timelineJson || "[]");
    } catch (err) {
      setError("Food / Hotels / Timeline mein se kisi ek ka JSON invalid hai.");
      return;
    }

    setSaving(true);
    const payload = {
      name: form.name,
      slug: form.slug || undefined,
      image: form.image,
      country: form.country,
      type: form.type,
      rating: Number(form.rating) || 4.5,
      bestTime: form.bestTime,
      budget: form.budget,
      description: form.description,
      difficulty: form.difficulty,
      safety: Number(form.safety) || 0,
      attractions: lines(form.attractions),
      weather: {
        condition: form.weatherCondition,
        high: form.weatherHigh ? Number(form.weatherHigh) : undefined,
        low: form.weatherLow ? Number(form.weatherLow) : undefined,
        icon: form.weatherIcon,
      },
      photoSpots: {
        sunrise: form.sunrise,
        sunset: form.sunset,
        goldenHour: form.goldenHour,
        droneAllowed: form.droneAllowed,
        cameraTip: form.cameraTip,
      },
      food,
      hotels,
      timeline,
      seasonalGuide: { Spring: form.springNote, Summer: form.summerNote, Winter: form.winterNote },
      route: { title: form.routeTitle, steps: lines(form.routeSteps) },
      lat: form.lat ? Number(form.lat) : undefined,
      lng: form.lng ? Number(form.lng) : undefined,
      published: form.published,
    };
    if (!payload.slug) delete payload.slug;

    try {
      if (isEdit) {
        await api.put(`/destinations/${id}`, payload, { auth: true });
      } else {
        await api.post("/destinations", payload, { auth: true });
      }
      navigate("/admin/explore");
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
      <h1 className="font-display fw-semibold mb-4">{isEdit ? "Edit Destination" : "Create Destination"}</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="p-4 rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
        <h2 className="h6 font-mono text-stone mb-3">Basics</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-6"><label className="form-label small text-stone">Name</label><input required name="name" value={form.name} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-6"><label className="form-label small text-stone">Slug (auto if blank)</label><input name="slug" value={form.slug} onChange={handleChange} className="form-control form-control-custom" /></div>

          <div className="col-md-6"><ImageUploadField label="Image" value={form.image} onChange={(url) => setForm((f) => ({ ...f, image: url }))} required /></div>
          <div className="col-md-6"><label className="form-label small text-stone">Country</label><input name="country" value={form.country} onChange={handleChange} className="form-control form-control-custom" /></div>

          <div className="col-md-3">
            <label className="form-label small text-stone">Type</label>
            <select name="type" value={form.type} onChange={handleChange} className="form-select form-control-custom">
              <option>Mountains</option><option>Lakes</option><option>Valleys</option><option>Plains</option><option>Beaches</option><option>Deserts</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label small text-stone">Budget</label>
            <select name="budget" value={form.budget} onChange={handleChange} className="form-select form-control-custom">
              <option>Budget</option><option>Mid-range</option><option>Luxury</option>
            </select>
          </div>
          <div className="col-md-3"><label className="form-label small text-stone">Rating (0-5)</label><input type="number" step="0.1" name="rating" value={form.rating} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-3"><label className="form-label small text-stone">Best time</label><input name="bestTime" value={form.bestTime} onChange={handleChange} className="form-control form-control-custom" placeholder="Apr – Oct" /></div>

          <div className="col-12"><label className="form-label small text-stone">Description</label><textarea rows={2} name="description" value={form.description} onChange={handleChange} className="form-control form-control-custom"></textarea></div>
        </div>

        <h2 className="h6 font-mono text-stone mb-3">Difficulty & Safety</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <label className="form-label small text-stone">Difficulty</label>
            <select name="difficulty" value={form.difficulty} onChange={handleChange} className="form-select form-control-custom">
              <option>Easy</option><option>Medium</option><option>Hard</option>
            </select>
          </div>
          <div className="col-md-6"><label className="form-label small text-stone">Safety rating (0-5 stars)</label><input type="number" min="0" max="5" name="safety" value={form.safety} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-12"><label className="form-label small text-stone">Attractions — ek line ek item</label><textarea rows={3} name="attractions" value={form.attractions} onChange={handleChange} className="form-control form-control-custom"></textarea></div>
        </div>

        <h2 className="h6 font-mono text-stone mb-3">Weather snapshot</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-3"><label className="form-label small text-stone">Condition</label><input name="weatherCondition" value={form.weatherCondition} onChange={handleChange} className="form-control form-control-custom" placeholder="Clear" /></div>
          <div className="col-md-3"><label className="form-label small text-stone">High °C</label><input type="number" name="weatherHigh" value={form.weatherHigh} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-3"><label className="form-label small text-stone">Low °C</label><input type="number" name="weatherLow" value={form.weatherLow} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-3"><label className="form-label small text-stone">Icon (bootstrap-icons class)</label><input name="weatherIcon" value={form.weatherIcon} onChange={handleChange} className="form-control form-control-custom" placeholder="bi-sun" /></div>
        </div>

        <h2 className="h6 font-mono text-stone mb-3">Photography spots</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-4"><label className="form-label small text-stone">Sunrise spot</label><input name="sunrise" value={form.sunrise} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-4"><label className="form-label small text-stone">Sunset spot</label><input name="sunset" value={form.sunset} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-4"><label className="form-label small text-stone">Golden hour spot</label><input name="goldenHour" value={form.goldenHour} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-8"><label className="form-label small text-stone">Camera tip</label><input name="cameraTip" value={form.cameraTip} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-4 d-flex align-items-end gap-2">
            <input type="checkbox" id="droneAllowed" name="droneAllowed" checked={form.droneAllowed} onChange={handleChange} className="form-check-input mt-0" />
            <label htmlFor="droneAllowed" className="form-check-label small text-stone mb-0">Drone allowed</label>
          </div>
        </div>

        <h2 className="h6 font-mono text-stone mb-3">Best time to visit — per season notes</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-4"><label className="form-label small text-stone">Spring</label><textarea rows={2} name="springNote" value={form.springNote} onChange={handleChange} className="form-control form-control-custom"></textarea></div>
          <div className="col-md-4"><label className="form-label small text-stone">Summer</label><textarea rows={2} name="summerNote" value={form.summerNote} onChange={handleChange} className="form-control form-control-custom"></textarea></div>
          <div className="col-md-4"><label className="form-label small text-stone">Winter</label><textarea rows={2} name="winterNote" value={form.winterNote} onChange={handleChange} className="form-control form-control-custom"></textarea></div>
        </div>

        <h2 className="h6 font-mono text-stone mb-3">Route information</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-4"><label className="form-label small text-stone">Route title</label><input name="routeTitle" value={form.routeTitle} onChange={handleChange} className="form-control form-control-custom" placeholder="Islamabad → Hunza" /></div>
          <div className="col-md-8"><label className="form-label small text-stone">Steps — ek line ek stop</label><textarea rows={2} name="routeSteps" value={form.routeSteps} onChange={handleChange} className="form-control form-control-custom" placeholder={"Islamabad\nAbbottabad\nChilas\nHunza"}></textarea></div>
        </div>

        <h2 className="h6 font-mono text-stone mb-3">Map coordinates (optional)</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-6"><label className="form-label small text-stone">Latitude</label><input type="number" step="any" name="lat" value={form.lat} onChange={handleChange} className="form-control form-control-custom" /></div>
          <div className="col-md-6"><label className="form-label small text-stone">Longitude</label><input type="number" step="any" name="lng" value={form.lng} onChange={handleChange} className="form-control form-control-custom" /></div>
        </div>

        <h2 className="h6 font-mono text-stone mb-3">Advanced (JSON)</h2>
        <div className="row g-3 mb-3">
          <div className="col-12">
            <label className="form-label small text-stone">Food — [{`{ "name": "...", "note": "..." }`}]</label>
            <textarea rows={3} name="foodJson" value={form.foodJson} onChange={handleChange} className="form-control form-control-custom font-mono" style={{ fontSize: "0.8rem" }}></textarea>
          </div>
          <div className="col-12">
            <label className="form-label small text-stone">Hotels — [{`{ "name": "...", "tier": "Luxury|Mid-range|Budget", "note": "..." }`}]</label>
            <textarea rows={3} name="hotelsJson" value={form.hotelsJson} onChange={handleChange} className="form-control form-control-custom font-mono" style={{ fontSize: "0.8rem" }}></textarea>
          </div>
          <div className="col-12">
            <label className="form-label small text-stone">Timeline — [{`{ "day": 1, "plan": "..." }`}]</label>
            <textarea rows={3} name="timelineJson" value={form.timelineJson} onChange={handleChange} className="form-control form-control-custom font-mono" style={{ fontSize: "0.8rem" }}></textarea>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2 mb-3">
          <input type="checkbox" id="published" name="published" checked={form.published} onChange={handleChange} className="form-check-input mt-0" />
          <label htmlFor="published" className="form-check-label small text-stone">Published</label>
        </div>

        <button type="submit" className="btn btn-gold" disabled={saving}>
          {saving ? "Saving…" : isEdit ? "Save Changes" : "Create Destination"}
        </button>
      </form>
    </div>
  );
};

export default AdminExploreForm;
