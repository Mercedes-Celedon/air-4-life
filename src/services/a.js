import axios from 'axios';


const API_URL = 'https://api.waqi.info/feed';

export const fetchAirQualityData = async (city) => {
  try {
    const response = await axios.get(`${API_URL}/${city}/?token=3c825f1b2c04b9cf3aad75319c3c762afbe1249f`);
    return {
      data: response.data,
      dateTime: new Date() // Agregamos la fecha y hora de la consulta
    };
  } catch (error) {
    console.error('Error fetching air quality data:', error);
    throw error;
  }
};

