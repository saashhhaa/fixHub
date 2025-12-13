import { Link } from "react-router-dom";
import { Logotype } from "../components/Logotype";
import "../index.css";


export const Navigation = () => {
  return (
    <nav>
      <Logotype />
      <Link className="link" to="/login">вход</Link>
    </nav>
  );
};
