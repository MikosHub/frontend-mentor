import { Link } from "react-router-dom";

const LinkButton = ({ toLeft, label, to }) => {
  return (
    <Link to={to}>
      <button>{label}</button>
    </Link>
  );
};

export default LinkButton;
