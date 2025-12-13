import { Logotype } from "../../components/Logotype";
import { Navigation } from "../../components/Navigation";
import { Link } from "react-router-dom";
import "./homepage.css";
import { Filter } from "../../components/Filter";

export const Homepage = () => {
  return (
    <div className="homepage">
      <Navigation />
      <h1>Самая удобная платформа для поиска мастера по ремонту.</h1>
      <div className="flex">
        <Filter />
        <Link className="link mapSearch" to="/map">
          Мастера поблизости
        </Link>
      </div>
    </div>
  );
};
