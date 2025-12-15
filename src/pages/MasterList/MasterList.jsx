import { useSearchParams } from "react-router-dom";
import { Navigation } from "../../components/Navigation";
import { Filter } from "../../components/Filter";
import { Link } from "react-router-dom";
import "./masterList.css";

const masters = [
  {
    id: 1,
    name: "Амир Баястанов",
    category: "электрик",
    experience: 6,
    rating: 4.5,
    reviews: 12,
    price: 700,
    photo: "/masters/1.jpg",
  },
  {
    id: 2,
    name: "Иван Рудской",
    category: "электрик",
    experience: 12,
    rating: 5,
    reviews: 32,
    price: 1000,
    photo: "/masters/2.jpg",
  },
  {
    id: 3,
    name: "Рахмет Амаев",
    category: "электрик",
    experience: 2,
    rating: 3.5,
    reviews: 5,
    price: 5000,
    photo: "/masters/3.jpg",
  },
];

export const MasterList = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const minPrice = parseInt(searchParams.get("minPrice")) || 0;
  const maxPrice = parseInt(searchParams.get("maxPrice")) || Infinity;

  const filteredMasters = masters.filter(
    (m) =>
      (!category || m.category === category) &&
      m.price >= minPrice &&
      m.price <= maxPrice
  );

  return (
    <div className="masterList">
      <Navigation />

      <div className="container">
        <div className="listHeader">
          <div className="searchInfo">
            <h2>{category ? category : "Все мастера"}</h2>
            <p>
              Цена: от {minPrice} до {isFinite(maxPrice) ? maxPrice : "∞"} сом
            </p>
          </div>

          <Filter />
        </div>

        <div className="cards">
          {filteredMasters.length === 0 && <p>Мастеров нет</p>}

          {filteredMasters.map((m) => (
            <Link to={`/master/${m.id}`} key={m.id} className="masterCard">
              <img src={m.photo} alt={m.name} />

              <div className="info">
                <div className="top">
                  <h3>{m.name}</h3>
                  <span className="rating">
                    {m.rating} ★ <span>{m.reviews} отзывов</span>
                  </span>
                </div>

                <p className="profession">
                  {m.category} · {m.experience} лет опыт работы
                </p>

                <p className="price">от {m.price} сом</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
