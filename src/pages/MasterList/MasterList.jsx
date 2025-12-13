import { useSearchParams } from "react-router-dom";
import { Navigation } from "../../components/Navigation";

const masters = [
  { id: 1, name: "Иван", category: "сантехник", price: 2000 },
  { id: 2, name: "Петр", category: "слесарь", price: 3000 },
  { id: 3, name: "Алексей", category: "сантехник", price: 5000 },
  { id: 4, name: "Дмитрий", category: "электрик", price: 4000 },
];

export const MasterList = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const minPrice = parseFloat(searchParams.get("minPrice")) || 0;
  const maxPrice = parseFloat(searchParams.get("maxPrice")) || Infinity;

  const filteredMasters = masters.filter(
    (master) =>
      (!category || master.category.toLowerCase() === category) &&
      master.price >= minPrice &&
      master.price <= maxPrice
  );

  return (
    <div className="masterList">
      <Navigation />

      <div className="container">
        <h2>
          Мастера {category ? `: ${category}` : ""} (цена от {minPrice} до{" "}
          {isFinite(maxPrice) ? maxPrice : "∞"})
        </h2>
        {filteredMasters.length === 0 && <p>Мастеров нет</p>}
        <div>
          {filteredMasters.map((master) => (
            <div key={master.id} className="card">
              <h3>{master.name}</h3>
              <p>Категория: {master.category}</p>
              <p>Цена: {master.price} сом</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
