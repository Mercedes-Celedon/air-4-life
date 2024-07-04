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
            <p>Tipo de visitante: {a.vive}</p>
            <p>Calificación: {a.valoracion} ❤️</p>
            <p>Comentario: {a.comentario}</p>
            <h4>Calidad del aire:</h4>
            <p>{a.calidadAire}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegisterList;