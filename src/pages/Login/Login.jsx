import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Logotype } from "../../components/Logotype";
import { login } from "../../auth";
import "./login.css";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = login(email, password);

    if (!user) {
      alert("Неверный email или пароль");
      return;
    }

    navigate(
      user.role === "user"
        ? "/user/profile"
        : "/master/profile"
    );
  };

  return (
    <div className="login">
      <Logotype className="logotype" />

      <div className="container">
        <h2>Вход</h2>

        <div className="cover">
          <label>Email</label>
          <span>
            <img className="icon" src="/icons/mailIcon.svg" alt="" />
            <input
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
        </div>

        <div className="cover">
          <label>Password</label>
          <span>
            <img className="icon" src="/icons/lockIcon.svg" alt="" />
            <input
              type="password"
              placeholder="123password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
        </div>

        <button onClick={handleLogin}>Войти</button>

        <p className="noAcc">
          Нет аккаунта?
          <Link className="link" to="/registration">
            {" "}
            Создать
          </Link>
        </p>
      </div>
    </div>
  );
};
