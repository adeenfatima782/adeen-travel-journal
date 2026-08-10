import React from "react";
import { Navigate } from "react-router-dom";

// Only checks whether a token exists in localStorage.
// The backend performs the actual verification whenever an admin API call is made.
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const admin = JSON.parse(localStorage.getItem("admin") || "null");

  if (!token || !admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
