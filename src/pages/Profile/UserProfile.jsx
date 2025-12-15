import { useNavigate, Link } from "react-router-dom";
import { Navigation } from "../../components/Navigation";
import "./userProfile.css";
import { logout } from "../../auth";

const user = {
  name: "Александр",
  surname: "Иванов",
  phone: "+996 555 123 456",
  email: "alex@mail.com",
  address: "г. Бишкек, ул. Абая 12",
};

const deals = [
  {
    id: 1,
    masterId: 1,
    name: "Амир Баястанов",
    category: "Электрик",
    price: 1200,
    photo: "/masters/1.jpg",
  },
  {
    id: 2,
    masterId: 2,
    name: "Иван Рудской",
    category: "Электрик",
    price: 1990,
    photo: "/masters/2.jpg",
  },
];

export const UserProfile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="userProfile">
      <Navigation />
      <button className="logoutBtn" onClick={handleLogout}>
        Выйти из аккаунта
      </button>

      <div className="container">
        <button className="back" onClick={() => navigate(-1)}>
          ←
        </button>

        {/* Профиль */}
        <div className="profileCard">
          <h2>Профиль домовладельца</h2>

          <div className="infoGrid">
            <div>
              <span>Имя</span>
              <p>{user.name}</p>
            </div>

            <div>
              <span>Фамилия</span>
              <p>{user.surname}</p>
            </div>

            <div>
              <span>Телефон</span>
              <p>{user.phone}</p>
            </div>

            <div>
              <span>Email</span>
              <p>{user.email}</p>
            </div>

            <div className="full">
              <span>Адрес</span>
              <p>{user.address}</p>
            </div>
          </div>
        </div>

        {/* История сделок */}
        <div className="deals">
          <h3>История сделок</h3>

          {deals.length === 0 && <p>Сделок пока нет</p>}

          <div className="dealList">
            {deals.map((d) => (
              <Link
                key={d.id}
                to={`/master/${d.masterId}`}
                className="dealCard">
                <img src={d.photo} alt={d.name} />

                <div className="dealInfo">
                  <h4>{d.name}</h4>
                  <p>{d.category}</p>
                  <span>{d.price} сом</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
