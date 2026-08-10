import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryStamp from "../../../components/CategoryStamp";
import { api } from "../../../api/client";

const CategoryStrip = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
      .get("/categories?type=blog")
      .then((data) => setCategories(data.categories || []))
      .catch(() => {});
  }, []);

  return (
    <section className="d-flex flex-wrap align-items-center justify-content-center gap-3 py-5">
      {categories.map((cat) => (
        <Link key={cat._id || cat.id} to={`/category/${cat.slug}`} className="text-decoration-none">
          <CategoryStamp category={cat.name} large />
        </Link>
      ))}
    </section>
  );
};

export default CategoryStrip;
