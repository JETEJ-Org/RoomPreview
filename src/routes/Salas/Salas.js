import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Salas.css";

// Componentes
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";

import Reservar from "../../components/reserva/nova-reserva/Reservar";
import Detalhar from "../../components/reserva/detalhes-reserva/Detalhes";

import More from "../../assets/header_images/more.png";
import Search from "../../assets/header_images/search.png";
import Filter from "../../assets/header_images/filter.png";

const Sala = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupVisible2, setPopupVisible2] = useState(false);
  const [isInputVisible, setInputVisible] = useState(false);

  const [salas, setSalas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const togglePopup2 = () => {
    setPopupVisible2(!isPopupVisible2);
  };

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };


  useEffect(() => {
    const fetchSalas = async () => {
      try {
        const response = await axios.get('http://localhost:4000/salas');
        if (response.data.length === 0) {
          setError('Nenhuma sala encontrada.');
          setMessage(true);
        }
        setSalas(response.data);
      } catch (err) {
        console.error(err);
        setError(err.message || 'Erro ao carregar salas.');
      } finally {
        setLoading(false);
      }
    };

    fetchSalas();
  }, []);

  const deleteSala = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/salas/${id}`);
      setSalas(salas.filter((sala) => sala._id !== id));
    } catch (err) {
      console.error(err);
      setError(err.message || 'Erro ao deletar sala.');
      setMessage(true);
    }
  }



  return (
    <>
      <>
        <Sidebar />
      </>
      <div className="bodycontainer">
        <>
          <Header />
        </>
        <div className="reservas-container">
          <div className="top">
            <div className="title">
              <h1>Salas</h1>
            </div>
            <div className="buttons-container">
              {isInputVisible && (
                <div className="reserva-search-container">
                  <div className="search_icon">
                    <img src={Search} className="icon" alt="Search Icon" />
                  </div>
                  <input id="filter" type="text" placeholder="Buscar por Sala" className="search" />
                </div>
              )}
              <button className="filter_button" onClick={toggleInputVisibility}>
                <img src={Filter} alt="Filter" />
              </button>
              <button className="newreserve_button" onClick={togglePopup}>
                + Sala
              </button>
            </div>
            <Reservar isVisible={isPopupVisible} onClose={togglePopup} />
          </div>

          <div className="reservas">
            {message ? (
              <div className="loading">
                <p>{error}</p>
              </div>
            ) : false}

            {loading ? (
              <div className="loading">
                <p>Carregando Salas...</p>
              </div>
            ) :
              salas.map((sala) => (
                <div className="reserva" key={sala._id}>
                  <div className="reserva-infos">
                    <div className="infos">
                      <p>Sala</p>
                      <p>{sala._id}</p>
                    </div>
                    <div className="infos">
                      <p>Tipo</p>
                      <p>{sala.tipo}</p>
                    </div>
                    <div className="infos">
                      <p>Data</p>
                      <p>{sala.capacidade}</p>
                    </div>
                    <div className="infos">
                      <p>Local</p>
                      <p>{sala.local}</p>
                    </div>
                    <Detalhar isVisible={isPopupVisible2} onClose={togglePopup2} />
                  </div>
                  <div className="reserva-buttons">
                    <button className="moreinfo" onClick={togglePopup2}>
                      <img src={More} alt="More Info" />
                    </button>
                    <button className="moreinfo" onClick={() => deleteSala(sala._id)} style={{ cursor: 'pointer', color: 'red', fontSize: '1.3rem', fontWeight: 'bold' }}>
                      X
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sala;
