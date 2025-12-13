import { Logotype } from "../../components/Logotype";
import { Link } from "react-router-dom";
import './regis.css'

export const Registration = () => {
  return (
    <div className="regisChoosing">
      <Logotype className="logotype" />
      <div className="container">
        <h2>Кто вы?</h2>
        <div className="flex">
          <Link className="link" to="/masterRegis">Мастер</Link>
          <Link className="link" to="/userRegis">Домовладелец</Link>
        </div>
      </div>
    </div>
  );
};
