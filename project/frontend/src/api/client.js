const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// A small helper — there is no need to write fetch repeatedly on every page.
// Retrieves the token from localStorage when an admin is logged in.
async function request(path, { method = "GET", body, auth = false } = {}) {
    const headers = { "Content-Type": "application/json" };

    if (auth) {
        const token = localStorage.getItem("token");
        if (token) headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(`${BASE_URL}${path}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data;
}

export const api = {
    get: (path, opts) => request(path, { ...opts, method: "GET" }),
    post: (path, body, opts) => request(path, { ...opts, method: "POST", body }),
    put: (path, body, opts) => request(path, { ...opts, method: "PUT", body }),
    patch: (path, body, opts) => request(path, { ...opts, method: "PATCH", body }),
    delete: (path, opts) => request(path, { ...opts, method: "DELETE" }),
};

// Image upload is separate — it sends FormData, not JSON
export async function uploadImage(file) {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(`${BASE_URL}/upload`, {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: formData,
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        throw new Error(data.message || "Upload failed");
    }
    return data.url;
}
