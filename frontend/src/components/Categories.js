import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMenubar } from "../contextHooks/UseMenubarContext";
import useFetch from "../hooks/useFetch";

const Categories = () => {
  const { menubarIsActive, handleMenubarClick } = useMenubar();
  const [categories, setCategories] = useState(null);
  const { items } = useFetch();

  function categoryHasItem(filteredItems, property, value) {
    if (items) {
      return !!filteredItems.find((item) => item[property] === value);
    } else return null;
  }

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/categories");
      const json = await response.json();

      if (response.ok) {
        setCategories(json);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div
      className={`categories-container ${menubarIsActive ? "active" : ""}`}
      onClick={handleMenubarClick}
    >
      <div
        className="categories-wrapper"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="categories-title">
          <h2>Categories</h2>
        </div>
        <div className="categories">
          {categories &&
            categories.map((category) => (
              <Link
                to={`../${category.name}`}
                key={category._id}
                onClick={handleMenubarClick}
                className={`category ${
                  categoryHasItem(items, "categoryName", category.name)
                    ? ""
                    : "empty"
                }`}
              >
                <p>{category.name}</p>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
