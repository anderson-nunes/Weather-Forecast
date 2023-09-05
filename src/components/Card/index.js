import React from 'react'
import { useApi } from '../../contexts/ForecastContext'
import * as S from './styles'

export const Card = () => {
  const { data } = useApi();

  return (
    <S.WeatherWrapper>
      <S.WeatherCard>
        <S.CurrentTemp>
          <S.Temp>{data?.current?.temp_c}°</S.Temp>
          <S.Location>{data?.location?.name}</S.Location>
          <S.LocalTime>{data?.location?.localtime}</S.LocalTime>
        </S.CurrentTemp>
        <S.CurrentWeather>
          <S.Conditions src={data?.current?.condition?.icon} />
          <S.Info>
            <S.Rain>1.3 MM</S.Rain>
            <S.Wind>10 MPH</S.Wind>
          </S.Info>
        </S.CurrentWeather>
      </S.WeatherCard>
    </S.WeatherWrapper>
  );
};



