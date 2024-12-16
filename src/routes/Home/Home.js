import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  return (
    <div className="divLinks">
      <Link className="linkNav" to="/reserva">Reservas</Link>
      <Link className="linkNav" to="/salas">Salas</Link>
    </div>
  );
};

export default Home;