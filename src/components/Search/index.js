import React, { useState } from 'react'
import { useApi } from '../../contexts/ForecastContext';
import { MdSearch } from 'react-icons/md';
import * as S from './styles';

export const Search = () => {

  const { handleCityChange } = useApi()
  const [inputCity, setInputCity] = useState('');

  const handleSearch = (event) => {
    event.preventDefault()
    handleCityChange(inputCity);
    setInputCity('')
  };

  return (
    <>
      <S.Text>Seu aplicativo meteorológico em tempo real</S.Text>
      <S.Container>
        <S.Input
          type="text"
          placeholder="Sua cidade..."
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
        <S.SubmitButton type="submit">
          <MdSearch onClick={handleSearch} />
        </S.SubmitButton>
      </S.Container>
    </>
  )
}

