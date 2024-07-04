import React, { useState, useEffect } from "react";
import Comment from "../modal/Comment";
import CitySelector from "../modal/CitySelector";
import Rating from "../modal/Rating";
import { fetchAirQualityData } from "../../../services/a";


const getAirQualityDescription = (aqi) => {
    if (aqi <= 50) return 'Buena';
    if (aqi <= 100) return 'Moderada';
    if (aqi <= 150) return 'Dañina para la Salud de los Grupos Sensitivos';
    if (aqi <= 200) return 'Dañina para la Salud';
    if (aqi <= 300) return 'Muy Dañina para la Salud';
    return 'Arriesgado';
  };
  
  const ModalForm = ({ onClose, onAddRegister }) => {
    const [selectedCity, setSelectedCity] = useState('');
    const [airQuality, setAirQuality] = useState(null);
    const [dateTime, setDateTime] = useState(null);
    const [visitorType, setVisitorType] = useState('visitante');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
  
    useEffect(() => {
      if (selectedCity) {
        fetchAirQualityData(selectedCity)
          .then(({ data, dateTime }) => {
            if (data.status === 'ok') {
              setAirQuality(data.data.aqi);
              setDateTime(dateTime);
            } else {
              setAirQuality(null);
              setDateTime(null);
            }
          })
          .catch(error => console.error('Error al obtener la calidad del aire:', error));
      }
    }, [selectedCity]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newRegister = {
        city: selectedCity,
        airQuality,
        dateTime,
        visitorType,
        rating,
        comment
      };
      onAddRegister(newRegister);
      onClose();
    };
  
    return (
      <div className="modal">
        <div className="modalContent">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>CALIDAD DEL AIRE</h2>
          <form onSubmit={handleSubmit}>
            <CitySelector selectedCity={selectedCity} onCityChange={setSelectedCity} />
            {airQuality !== null && (
              <div>
                <h3>Calidad del aire en {selectedCity}</h3>
                <p>AQI: {airQuality}</p>
                <p>Calidad del aire: {getAirQualityDescription(airQuality)}</p>
                <p>Fecha y hora de la consulta: {dateTime.toLocaleString()}</p>
              </div>
            )}
            <div>
              <label>
                <input type="radio" value="visitante" checked={visitorType === 'visitante'} onChange={() => setVisitorType('visitante')} />
                Visitante
              </label>
              <label>
                <input type="radio" value="residente" checked={visitorType === 'residente'} onChange={() => setVisitorType('residente')} />
                Residente
              </label>
            </div>
            <Rating rating={rating} onRatingChange={setRating} />
            <Comment comment={comment} onCommentChange={setComment} />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ModalForm;