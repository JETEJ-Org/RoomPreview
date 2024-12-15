import { Link } from "react-router-dom";
import "./menuinicial.css"

const Menu = () => {
  return (
    <div className="divLinks">
      <Link className="linkNav" to="/reserva">Reserva</Link>
    </div>
  );
};

export default Menu;
