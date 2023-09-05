// services/ApiServices.js

import axios from 'axios';

const apiURL = 'http://api.weatherapi.com/v1';
const apiKey = process.env.REACT_APP_API_KEY;

export async function fetchWeatherData(local) {
  try {
    const response = await axios.get(apiURL + '/current.json', {
      params: {
        key: apiKey,
        q: local,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os Dados', error);
    throw error;
  }
}
