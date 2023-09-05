import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchWeatherData } from '../services/ApiServices';

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('')

  useEffect(() => {
    fetchWeatherData(city)
      .then((response) => {
        setData(response);
        setLoading(false);
        console.log('aquiii', response);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API', error);
        setLoading(false);
      });
  }, [city]);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <ApiContext.Provider value={{ data, loading, handleCityChange }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}