import React from 'react';

const RegisterList = ({ registers }) => {
  return (
    <div>
      <h2>Registros</h2>
      <ul>
        {registers.map((register, index) => (
          <li key={index}>
            <h3>{register.city}</h3>
            <p>Tipo de visitante: {register.visitorType}</p>
            <p>Calificación: {register.rating} ❤️</p>
            <p>Comentario: {register.comment}</p>
            <h4>Calidad del aire:</h4>
            <ul>
              {register.airQuality.map((measurement, idx) => (
                <li key={idx}>{measurement.parameter}: {measurement.value} {measurement.unit}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegisterList;