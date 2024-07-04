import React from 'react';


const CitySelector = ({ selectedCity, onCityChange }) => {
  const cities = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Alicante', 'Murcia', 'Albacete'];

  return (
    <div>
      <label>Selecciona ciudad:</label>
      <select value={selectedCity} onChange={(e) => onCityChange(e.target.value)}>
        <option value="">Selecciona ciudad</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;