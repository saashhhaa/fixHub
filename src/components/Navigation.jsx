import { Link } from "react-router-dom";
import { Logotype } from "../components/Logotype";
import { getCurrentUser } from "../auth";
import "../index.css";

export const Navigation = () => {
  const user = getCurrentUser();
  return (
    <nav className="nav">
      <Logotype />
      <div className="navLinks">
        {!user ? (
          <Link className="navLink" to="/login">
            Вход
          </Link>
        ) : (
          <Link
            className="navLink"
            to={user.role === "user" ? "/user/profile" : "/master/profile"}>
            {user.name} {user.surname}
          </Link>
        )}
      </div>
    </nav>
  );
};
