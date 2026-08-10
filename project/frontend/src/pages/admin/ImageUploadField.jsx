import React, { useState } from "react";
import { uploadImage } from "../../api/client";

// A single component — used in place of a cover image field.
// The value remains a URL string in the form state, but users can now
// select a photo from their computer instead of typing a URL.
const ImageUploadField = ({ label, value, onChange, required }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setError("");
    setUploading(true);
    try {
      const url = await uploadImage(file);
      onChange(url);
    } catch (err) {
      setError(err.message || "Upload failed");
    } finally {
      setUploading(false);
      e.target.value = ""; // Allows the same file to be selected again if needed
    }
  };

  return (
    <div>
      {label && <label className="form-label font-mono small text-stone">{label}</label>}
      <div className="d-flex align-items-center gap-3 flex-wrap">
        {value && (
          <img
            src={value}
            alt="preview"
            className="rounded-3"
            style={{ width: "72px", height: "72px", objectFit: "cover", border: "1px solid rgba(28,27,26,0.15)" }}
          />
        )}
        <div className="flex-grow-1" style={{ minWidth: "200px" }}>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={handleFile}
            className="form-control form-control-custom"
            required={required && !value}
          />
          {uploading && <p className="text-stone small mb-0 mt-1">Uploading…</p>}
          {error && <p className="text-danger small mb-0 mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ImageUploadField;
