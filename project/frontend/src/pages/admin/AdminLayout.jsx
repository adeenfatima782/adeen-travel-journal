import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("admin") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  const navItems = [
    { label: "Overview", to: "/admin/dashboard", icon: "bi-speedometer2" },
    { label: "Blogs", to: "/admin/posts", icon: "bi-journal-text" },
    { label: "Gallery", to: "/admin/gallery", icon: "bi-images" },
    { label: "Travel Journal", to: "/admin/journal", icon: "bi-book" },
    { label: "Explore", to: "/admin/explore", icon: "bi-compass" },
    { label: "Categories", to: "/admin/categories", icon: "bi-tags" },
    { label: "Subscribers", to: "/admin/subscribers", icon: "bi-envelope-paper" },
    { label: "Messages", to: "/admin/messages", icon: "bi-envelope" },
    { label: "Profile", to: "/admin/profile", icon: "bi-person-circle" },
    { label: "Settings", to: "/admin/settings", icon: "bi-gear" },
  ];

  return (
    <div className="container-fluid py-4">
      <div className="row g-4">
        <div className="col-lg-2">
          <div className="p-3 rounded-3 mb-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
            <p className="font-mono text-gold-dark mb-1" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Admin
            </p>
            <p className="fw-semibold mb-0">{user?.name || "Adeen"}</p>
          </div>
          <div className="d-flex flex-lg-column gap-2 flex-wrap">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `btn btn-sm text-start ${isActive ? "btn-gold" : "btn-outline-ink"}`
                }
              >
                <i className={`bi ${item.icon} me-2`}></i>
                {item.label}
              </NavLink>
            ))}
            <button className="btn btn-sm btn-outline-ink text-start" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right me-2"></i>Logout
            </button>
          </div>
        </div>
        <div className="col-lg-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
