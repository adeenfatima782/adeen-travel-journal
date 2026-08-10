import React from "react";

const tiles = [
  { name: "Mountains", icon: "bi-mountain", available: true },
  { name: "Beaches", icon: "bi-water", available: false },
  { name: "Forest", icon: "bi-tree", available: false },
  { name: "Cities", icon: "bi-buildings", available: false },
  { name: "Desert", icon: "bi-sun", available: false },
  { name: "Islands", icon: "bi-geo", available: false },
];

const CategoryExplorer = ({ setActiveType }) => (
  <section className="mb-5">
    <p className="font-mono text-gold-dark mb-3 text-center" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
      Explore By Category
    </p>
    <div className="row g-3">
      {tiles.map((t) => (
        <div className="col-6 col-sm-4 col-lg-2" key={t.name}>
          <button
            onClick={() => t.available && setActiveType("Mountains")}
            className="w-100 h-100 text-center p-3 rounded-3 border-0"
            style={{
              background: "#fff",
              border: "1px solid rgba(28,27,26,0.08)",
              opacity: t.available ? 1 : 0.55,
              cursor: t.available ? "pointer" : "default",
            }}
          >
            <i className={`bi ${t.icon} text-gold-dark`} style={{ fontSize: "1.5rem" }}></i>
            <p className="font-display fw-semibold mb-0 mt-2" style={{ fontSize: "0.9rem" }}>{t.name}</p>
            {!t.available && (
              <p className="font-mono text-stone mb-0 mt-1" style={{ fontSize: "0.62rem", textTransform: "uppercase" }}>
                Coming soon
              </p>
            )}
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default CategoryExplorer;
