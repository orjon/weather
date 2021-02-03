import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './components/map';
import SidePanel from './components/sidepanel';
import './scss/style.scss';

const openweatherToken = process.env.REACT_APP_OPEN_WEATHER_TOKEN;

const App = () => {
  // constructor() {
  //   super();
  //   this.state = { weatherData: [] };
  //   this.mapCenter = { lat: -0.15, lng: 51.51 };
  //   this.world = ['-3.5,50.5,1.5,55.5,'];
  //   this.zoomLevel = 25;
  //   this.handleIconClick = this.handleIconClick.bind(this);
  // }

  const [weatherData, setWeatherData] = useState([]);
  const [clickedLocation, setClickedLocation] = useState(undefined);

  let mapCenter = { lat: -0.15, lng: 51.51 };
  let world = ['-3.5,50.5,1.5,55.5,'];
  let zoomLevel = 25;

  // this.handleIconClick = this.handleIconClick.bind(this);

  useEffect(() => {
    if (weatherData.length === 0) getWeatherInfo();
  }, []);

  useEffect(() => {
    console.log('Clickedlocation: ', clickedLocation);
  }, [clickedLocation]);

  // componentDidMount() {
  //   this.globalWeatherInfo();
  // navigator.geolocation.getCurrentPosition(pos => {
  //   const userPosition = { lat: pos.coords.latitude, lng: pos.coords.longitude}
  //   this.setState({ userPosition })
  // })
  // }

  const handleIconClick = (id) => {
    setClickedLocation({ clickedLocation: id });
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
          weatherPoints={weatherData}
          center={mapCenter}
          points={weatherData}
          handleIconClick={handleIconClick}
        />
      )}
      <SidePanel clickedLocation={clickedLocation} weatherData={weatherData} />
    </main>
  );
};

export default App;
