import React, { useEffect, useState } from "react";
import axios from 'axios';
import { format } from 'date-fns';
import "./Reserva.css";

// Componentes
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";

import Reservar from "../../components/reserva/nova-reserva/Reservar";
import Detalhar from "../../components/reserva/detalhes-reserva/Detalhes";

import More from "../../assets/header_images/more.png";
import Search from "../../assets/header_images/search.png";
import Filter from "../../assets/header_images/filter.png";

const Reserva = () => {
  const api = "https://keyroomapi-git-master-johnvitordevs-projects.vercel.app";

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupVisible2, setPopupVisible2] = useState(false);
  const [isInputVisible, setInputVisible] = useState(false);

  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedReserva, setSelectedReserva] = useState(null);
  const [filteredReservas, setFilteredReservas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const togglePopup2 = () => {
    setPopupVisible2(!isPopupVisible2);
  };

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  const handleReservaClick = (reserva) => {
    setSelectedReserva(reserva); // Define a reserva selecionada
    togglePopup2(); // Abre o pop-up de detalhes
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    fetchReservas();
  }, []);

  useEffect(() => {
    const filterReservas = () => {
      if (searchTerm === '') {
        setFilteredReservas(reservas); // Se não houver filtro, exibe todas as reservas
      } else {
        const filtered = reservas.filter(reserva =>
          reserva.sala_id.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra por sala
        );
        setFilteredReservas(filtered); // Atualiza as reservas filtradas
      }
    };

    filterReservas(); // Executa o filtro sempre que as reservas ou o termo de busca mudarem
  }, [searchTerm, reservas]);


  const fetchReservas = async () => {
    try {
      const response = await axios.get(`${api}/reservas`);
      if (response.data.length === 0) {
        setError('Nenhuma reserva encontrada.');
      }
      setReservas(response.data);
      setFilteredReservas(response.data);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Erro ao carregar reservas.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = (newReserva) => {
    setReservas((prev) => [...prev, newReserva]);
  };

  const deleteReserva = async (id) => {
    try {
      await axios.delete(`${api}/reservas/${id}`);
      setReservas(reservas.filter((reserva) => reserva._id !== id));
    } catch (err) {
      console.error(err);
      setError(err.message || 'Erro ao deletar reserva.');
      alert("Erro ao deletar reserva. Tente novamente.");
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
              <h1>Reservas</h1>
            </div>
            <div className="buttons-container">
              {isInputVisible && (
                <div className="reserva-search-container">
                  <div className="search_icon">
                    <img src={Search} className="icon" alt="Search Icon" />
                  </div>
                  <input id="filter" type="text" placeholder="Buscar por Sala" className="search" value={searchTerm} onChange={handleSearchChange} />
                </div>
              )}
              <button className="filter_button" onClick={toggleInputVisibility}>
                <img src={Filter} alt="Filter" />
              </button>
              <button className="newreserve_button" onClick={togglePopup}>
                + Reserva
              </button>
            </div>
            <Reservar isVisible={isPopupVisible} onClose={togglePopup} onCreate={handleCreate} />
          </div>

          <div className="reservas">
            {loading && (
              <div className="loading">
                <p>Carregando reservas...</p>
              </div>
            )}

            {!loading && error && (
              <div className="loading">
                <p>{error}</p>
              </div>
            )}

            {!loading && !error && filteredReservas.length === 0 && (
              <div className="loading">
                <p>Nenhuma reserva encontrada.</p>
              </div>
            )}

            {!loading && !error && filteredReservas.map((reserva) => (
              <div className="reserva" key={reserva._id}>
                <div className="reserva-infos">
                  <div className="infos">
                    <p>Sala</p>
                    <p>{reserva.sala_id}</p>
                  </div>
                  <div className="infos">
                    <p>Pessoa</p>
                    <p>{reserva.pessoa}</p>
                  </div>
                  <div className="infos">
                    <p>Data</p>
                    <p>{format(new Date(reserva.data), 'dd/MM/yyyy')}</p>
                  </div>
                  <div className="infos">
                    <p>Horário</p>
                    <p>{reserva.horario_inicio}</p>
                  </div>
                  <Detalhar isVisible={isPopupVisible2} onClose={togglePopup2} />
                </div>
                <div className="reserva-buttons">
                  <button className="moreinfo" onClick={() => handleReservaClick(reserva)}>
                    <img src={More} alt="More Info" />
                  </button>
                  <button
                    className="moreinfo"
                    onClick={() => deleteReserva(reserva._id)}
                    style={{ cursor: 'pointer', color: 'red', fontSize: '1.3rem', fontWeight: 'bold' }}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Detalhar isVisible={isPopupVisible2} onClose={togglePopup2} reserva={selectedReserva} />
    </>
  );
};

export default Reserva;
