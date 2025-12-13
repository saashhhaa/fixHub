import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Filter = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const navigate = useNavigate();
  const filterRef = useRef(null);

  const toggle = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const categories = ["Сантехник", "Слесарь", "Электрик"];

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (selectedCategory)
      params.set("category", selectedCategory.toLowerCase());
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);

    navigate(`/mastersList?${params.toString()}`);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={filterRef} className="filter flex">
      {/* Категории */}
      <div style={{ position: "relative" }}>
        <button onClick={() => toggle("category")}>Категории ▼</button>
        {openMenu === "category" && (
          <div className="dropdown">
            {categories.map((item) => (
              <div
                key={item}
                onClick={() => {
                  setSelectedCategory(item);
                  setOpenMenu(null);
                }}
                className={selectedCategory === item ? "selected" : ""}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Цена */}
      <div style={{ position: "relative" }}>
        <button onClick={() => toggle("price")}>Цена ▼</button>
        {openMenu === "price" && (
          <div className="dropdown">
            <div>
              <span>От</span>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="0"
              />
              <span>сом</span>
            </div>
            <div>
              <span>До</span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="10000"
              />
              <span>сом</span>
            </div>
          </div>
        )}
      </div>

      <button className="apply" onClick={applyFilters}>
        Применить
      </button>
      <div
        style={{
          visibility: maxPrice || selectedCategory ? "visible" : "hidden",
        }}
        className="flex selectedFilter">
        <h3>Вы ищите:</h3>
        <p> {selectedCategory}</p>
        <p style={{ visibility: maxPrice ? "visible" : "hidden" }}>
          {minPrice}-{maxPrice} сом
        </p>
      </div>
    </div>
  );
};
