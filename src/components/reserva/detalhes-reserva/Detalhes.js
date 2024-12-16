import React from "react";
import "./Detalhes.css";
import { format } from 'date-fns';

const Reservar = ({ isVisible, onClose, reserva }) => {
  if (!isVisible || !reserva) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <h2>Detalhes da Reserva</h2>
        <form>
          <div className="form-group">
            <label>Sala</label>
            <input type="text" placeholder="Sala de Aula" id="room" value={reserva.sala_id} disabled />
          </div>
          <div className="form-group">
            <label>Data</label>
            <input type="text" id="date" value={format(new Date(reserva.data), 'dd/MM/yyyy')} disabled />
          </div>
          <div className="form-group time-group">
            <div>
              <label>Início</label>
              <input type="time" id="i_time" value={reserva.horario_inicio} disabled />
            </div>
            <div>
              <label>Término</label>
              <input type="time" id="f_time" value={reserva.horario_termino} disabled />
            </div>
          </div>
          <div className="form-group">
            <label>Pessoa</label>
            <input type="text" placeholder="Nome do responsável" value={reserva.pessoa} disabled />
          </div>
          <div className="form-group">
            <label>Motivo</label>
            <input type="text" placeholder="Descreva o motivo da reserva" value={reserva.detalhes} disabled />
          </div>
          <div className="actions">
            <button type="button" onClick={onClose}>
              Anterior
            </button>
            <button type="submit">Finalizar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservar;