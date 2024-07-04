import React from 'react';
import "./registerList.scss"

const RegisterList = ({ data }) => {
  return (
    <div className='listContainer'>
      <h2>REGISTROS</h2>
      <ul>
        {data.map(a => (
          <li key={a.id}>
            <h3>{a.ciudad}</h3>
            <p>Calificación: {a.valoracion} ❤️</p>
            <p>Comentario: {a.comentario}</p>
            <p>Calidad del aire: {a.calidadAire}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegisterList;