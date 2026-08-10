import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap"; // Bootstrap CSS ke helper classes (offcanvas-body waghera) ke liye rakha hai — mobile menu ab khud React state se control hota hai, iski JS plugin use nahi hoti
import "leaflet/dist/leaflet.css";
import "./custom.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);