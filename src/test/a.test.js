import { describe, it, expect } from 'vitest';
import { fetchLocalData } from '../services/a';

describe('fetchLocalData', () => {
    it('should fetch data based on the current location successfully', async () => {
      const data = await fetchLocalData();
      expect(data).toBeDefined();
      expect(data).toHaveProperty('status');
      expect(data.status).toBe('ok');
      expect(data.data).toHaveProperty('aqi');
    });
  });