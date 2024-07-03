import axios from 'axios';

const API_URL = 'https://api.waqi.info/feed/here/?token=3c825f1b2c04b9cf3aad75319c3c762afbe1249f';

export const fetchLocalData = async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching local data:', error);
      throw error;
    }
  };