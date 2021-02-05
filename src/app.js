import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './components/map';
import SidePanel from './components/sidepanel';
import './scss/style.scss';

const openweatherToken = process.env.REACT_APP_OPEN_WEATHER_TOKEN;

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [clickedLocation, setClickedLocation] = useState(undefined);
  const [center, setCenter] = useState(undefined);

  let mapCenter = { lon: -0.15, lat: 51.51 };
  let world = ['-3.5,50.5,1.5,55.5,'];
  let zoomLevel = 25;

  useEffect(() => {
    if (weatherData.length === 0) getWeatherInfo();
  }, []);

  // useEffect(() => {
  //   if (!center && navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((pos) => {
  //       console.log('Pos: ', pos);
  //       setCenter({
  //         lat: pos.coords.latitude,
  //         lon: pos.coords.longitude,
  //       });
  //       console.log('userPosition: ', center);
  //     });
  //   }
  // }, [clickedLocation]);

  const handleIconClick = (id) => {
    setClickedLocation(id);
  };

  let getWeatherInfo = async () => {
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/box/city?bbox=${world}${zoomLevel}&APPID=${openweatherToken}`
    );
    let tempArray = response.data.list.map((eachLocation) => ({
      id: eachLocation.id,
      name: eachLocation.name,
      latlng: [eachLocation.coord.Lat, eachLocation.coord.Lon],
      temp: eachLocation.main.temp,
      tempMin: eachLocation.main.temp_min,
      tempMax: eachLocation.main.temp_max,
      humidity: eachLocation.main.humidity,
      windSpeed: eachLocation.wind.speed,
      windDirection: eachLocation.wind.deg,
      weatherId: eachLocation.weather[0].id,
      weather: eachLocation.weather[0].description,
      weatherClouds: eachLocation.clouds.today,
      weatherIcon: eachLocation.weather[0].icon,
    }));
    setWeatherData(tempArray);
  };

  return (
    <main>
      {weatherData.length !== 0 && (
        <Map
          weatherLocations={weatherData}
          mapCenter={mapCenter}
          handleIconClick={handleIconClick}
        />
      )}
      {clickedLocation && (
        <SidePanel
          clickedLocation={clickedLocation}
          weatherData={weatherData}
        />
      )}
    </main>
  );
};

export default App;
