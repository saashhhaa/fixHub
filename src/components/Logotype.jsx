import { Link } from "react-router-dom";

export const Logotype = ({ className }) => {
  return (
    <Link className={className} to="/">
      <img src="/logo.PNG" alt=";" style={{ width: "50px" }} />
    </Link>
  );
};
