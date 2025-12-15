import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "../../components/Navigation";
import "./masterCard.css";

const masters = [
  {
    id: "1",
    name: "Амир Баястанов",
    category: "Электрик",
    experience: 6,
    rating: 4.5,
    reviews: 12,
    phone: "+996574837578",
    price: 1000,
    photo: "/masters/1.jpg",
    feedbacks: [
      {
        name: "София",
        rating: 4,
        text: "Отлично! Мастер быстро нашёл причину отсутствия света и устранил проблему на месте.",
        price: 1200,
      },
      {
        name: "Бекзат",
        rating: 5,
        text: "Потребовалось восстановить освещение и заменить выключатель. Всё сделал уверенно.",
        price: 1990,
      },
    ],
  },
];

export const MasterCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const master = masters.find((m) => m.id === id);
  if (!master) return <p>Мастер не найден</p>;

  return (
    <div className="masterProfile">
      <Navigation />

      <div className="container">
        <button className="back" onClick={() => navigate(-1)}>
          ←
        </button>

        <div className="profileCard">
          <img src={master.photo} alt={master.name} />

          <div className="info">
            <h2>{master.name}</h2>

            <div className="rating">
              {master.rating} звёзд
              <span>{" ★★★★☆"}</span>
            </div>

            <p className="profession">
              {master.category} · {master.experience} лет опыт работы
            </p>

            <p className="phone">
              Тел: <a href={`tel:${master.phone}`}>{master.phone}</a>
            </p>

            <div className="bottom">
              <span className="price">от {master.price} сом</span>
              <button className="contact">Связаться</button>
            </div>
          </div>
        </div>

        <div className="reviews">
          <h3>Отзывы</h3>
          <span className="count">всего {master.reviews} отзывов</span>

          {master.feedbacks.map((f, i) => (
            <div key={i} className="reviewCard">
              <div className="stars">★★★★☆</div>
              <div className="content">
                <strong>{f.name}</strong>
                <p>{f.text}</p>
                <span>{f.price} сом за работу</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
