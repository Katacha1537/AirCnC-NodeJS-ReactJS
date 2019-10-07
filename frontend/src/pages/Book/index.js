import React, { useState } from 'react';
import { navigate } from "@reach/router"
import api from '../../services/api'

export default function Login(){ 
  const [ date, setDate ] = useState('');

  const id = localStorage.getItem('book');

  async function handleSubmit(){
    const user_id = localStorage.getItem('user');

    await api.post(`/spots/${id}/bookings`, {
      date
    },{
      headers: { user_id }
    });

    navigate('/spot');
  }

  function handleCancel(){
    navigate('/spot');
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="dia">DATA DE INTERESSE *</label>
          <input 
            type="text" 
            id="dia" 
          placeholder="Qual data você quer reservar?"
            value={date}
            onChange = {event => setDate(event.target.value)}
          />
          <button className="btn" type="submit">Solicitar Reserva</button>
        </form>
        <button onClick={handleCancel} className="btn btnF">Cancelar Reserva</button>
    </>
    )
}