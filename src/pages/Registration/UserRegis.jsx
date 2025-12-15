import { Logotype } from "../../components/Logotype";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../auth";
import "./regis.css";

export const UserRegis = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    try {
      register({
        id: Date.now().toString(),
        role: "user",
        ...form,
      });

      navigate("/user/profile");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="masterRegis">
      <Logotype className="logotype" />

      <div className="container">
        <h2>Профиль домовладельца</h2>

        <div className="cover">
          <label>Имя</label>
          <input onChange={(e) => handleChange("name", e.target.value)} />
        </div>

        <div className="cover">
          <label>Фамилия</label>
          <input onChange={(e) => handleChange("surname", e.target.value)} />
        </div>

        <div className="cover">
          <label>Номер телефона</label>
          <input
            type="tel"
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>

        <div className="cover">
          <label>Домашний адрес</label>
          <input onChange={(e) => handleChange("address", e.target.value)} />
        </div>

        <div className="cover">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div className="cover">
          <label>Пароль</label>
          <input
            type="password"
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>

        <button onClick={handleSubmit}>Создать аккаунт</button>
      </div>
    </div>
  );
};
