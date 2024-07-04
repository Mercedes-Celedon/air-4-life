import { describe, it, expect, vi } from 'vitest';
import axios from "axios";
import { fetchAirQualityData} from "../services/a"

// Mock de axios
vi.mock('axios');

describe('fetchAirQualityData', () => {
  it('should fetch air quality data and include the date and time', async () => {
    // Datos simulados de la respuesta de la API
    const mockCity = 'Madrid';
    const mockResponse = {
      data: {
        status: 'ok',
        data: {
          aqi: 75,
          // otros datos...
        },
      },
    };

    // Configurar axios para devolver la respuesta simulada
    axios.get.mockResolvedValueOnce(mockResponse);

    // Llamar a la función
    const result = await fetchAirQualityData(mockCity);

    // Verificar que la respuesta contiene la propiedad 'dateTime'
    expect(result).toBeDefined();
    expect(result).toHaveProperty('data');
    expect(result).toHaveProperty('dateTime');
    expect(result.data).toHaveProperty('status', 'ok');
    expect(result.data.data).toHaveProperty('aqi');
    expect(result.dateTime).toBeInstanceOf(Date); // Verificar que dateTime es una instancia de Date
  });

});