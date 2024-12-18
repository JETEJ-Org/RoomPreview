import React, { useState, useEffect } from "react";
import "./Reservar.css";
import axios from "axios";


//Código provisório, apenas para ver se o pop-up aparece.

const Reservar = ({ isVisible, onClose, onCreate }) => {
  const [form, setForm] = useState({
    sala_id: "",
    data: "",
    horario_inicio: "",
    horario_termino: "",
    pessoa: "",
    detalhes: "",
  });

  useEffect(() => {
    if (!isVisible) {
      setForm({
        sala_id: "",
        data: "",
        horario_inicio: "",
        horario_termino: "",
        pessoa: "",
        detalhes: "",
      });
    }
  }, [isVisible]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/reservas", form);
      onCreate(response.data); // Atualiza a lista de reservas no componente principal
      onClose(); // Fecha o popup
      alert("Reserva criada com sucesso!");
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Erro ao criar reserva. Verifique os dados e tente novamente.";
      alert(errorMessage);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <h2>Nova Reserva</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Sala</label>
            <input
              type="text"
              name="sala_id"
              value={form.sala_id}
              onChange={handleChange}
              placeholder="Sala de Aula"
              required
            />
          </div>
          <div className="form-group">
            <label>Data</label>
            <input
              type="date"
              name="data"
              value={form.data}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group time-group">
            <div>
              <label>Início</label>
              <input
                type="time"
                name="horario_inicio"
                value={form.horario_inicio}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Término</label>
              <input
                type="time"
                name="horario_termino"
                value={form.horario_termino}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Pessoa</label>
            <input
              type="text"
              name="pessoa"
              value={form.pessoa}
              onChange={handleChange}
              placeholder="Nome do responsável"
              required
            />
          </div>
          <div className="form-group">
            <label>Motivo</label>
            <textarea
              name="detalhes"
              value={form.detalhes}
              onChange={handleChange}
              placeholder="Descreva o motivo da reserva"
            ></textarea>
          </div>
          <div className="actions">
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit">Finalizar</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Reservar;