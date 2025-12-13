import { Link } from "react-router-dom";
import { Navigation } from "../../components/Navigation";
import { Logotype } from "../../components/Logotype";
import './login.css'

export const Login = () => {
  return (
    <div className="login">
      <Logotype className="logotype" />
      <div className="container">
        <h2>Вход</h2>
        <div className="cover">
          <label>Email</label>
          <span>
            <img className="icon" src="/icons/mailIcon.svg" alt="" />
            <input placeholder="example@gmail.com"></input>
          </span>
        </div>
        <div className="cover">
          <label>Password</label>
          <span>
            <img className="icon"  src="/icons/lockIcon.svg" alt="" />
            <input placeholder="123password"></input>
          </span>
        </div>
        <button>Войти</button>
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
