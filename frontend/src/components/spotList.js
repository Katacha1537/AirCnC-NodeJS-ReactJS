import React, {useEffect, useState } from 'react';
import { navigate } from "@reach/router"
import api from '../services/api';
import './style.css';

export default function Spots({children, tech, history}){
  const [ spots, setSpots ] = useState([]);

  useEffect(() => {
    async function loadSpots(){
      const response = await api.get('/spots', {
        params: { tech }
      })

      setSpots(response.data);
    }
    loadSpots();
  }, [tech])

  function handleClick(id) {
    localStorage.setItem('book', id);

    navigate("/book")
  }

  return (
    <>
      <p className="title">Empresas que usam <strong>{tech}</strong></p>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}  />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
            <button onClick={() => handleClick(spot._id)} className="btn">{children}Solicitar Reserva</button>
          </li>
        ))}
      </ul>

    </>
  )

}