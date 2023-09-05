import styled from 'styled-components';

export const WeatherWrapper = styled.div`
  width: 400px;
  margin: 100px auto;
`;

export const WeatherCard = styled.div`
  width: 400px;
  height: 200px;
  font-family: "Open Sans";
  position: relative;
`;

export const CurrentTemp = styled.div`
  width: 220px;
  height: 200px;
  background: rgb(41, 41, 41);
  position: absolute;
  top: 0;
  left: 0;
`;

export const CurrentWeather = styled.div`
  width: 180px;
  height: 200px;
  background: rgb(237, 237, 237);
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Temp = styled.span`
  font-size: 80px;
  text-align: center;
  display: block;
  font-weight: 300;
  color: rgb(255, 255, 255);
  padding: 20px 0 0;
`;

export const Location = styled.span`
  color: rgb(255, 255, 255);
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 30px;
  display: block;
`;

export const LocalTime = styled.span`
  color: rgb(255, 255, 255);
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15px;
  display: block;
`;

export const Conditions = styled.img`
  font-family: weathericons;
  width: 120px;
  display: block;
  padding: 20px 0 0;
  text-align: center;
  margin: auto;
`;

export const Info = styled.div`
  width: 180px;
  height: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgb(42, 178, 234);
  font-weight: 700;
  color: rgb(255, 255, 255);
  text-align: center;
`;

export const Rain = styled.span`
  width: 50%;
  position: absolute;
  left: 10px;
  word-spacing: 60px;
  top: 3px;
`;

export const RainIcon = styled.span`
  display: block;
  content: "\f04e";
  font-family: weathericons;
  font-size: 40px;
  left: 6px;
  top: -4px;
  position: absolute;
`;

export const Wind = styled.span`
  width: 50%;
  right: -10px;
  position: absolute;
  word-spacing: 60px;
  top: 3px;
`;

export const WindIcon = styled.span`
  display: block;
  content: "\f050";
  font-family: weathericons;
  font-size: 25px;
  left: -10px;
  position: absolute;
  top: 5px;
`;
