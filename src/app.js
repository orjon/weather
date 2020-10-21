import React, { Component } from 'react';
import axios from 'axios';
import Map from './components/map'
import SidePanel from './components/sidepanel'
import './scss/style.scss'

const openweatherToken = process.env.REACT_APP_OPEN_WEATHER_TOKEN

class App extends Component {
  constructor() {
    super()
    this.state = { weatherData: [] }
    this.mapCenter = { lat: -0.15, lng: 51.51}
    this.world = ['-3.5,50.5,1.5,55.5,']
    this.zoomLevel = 25
    this.handleIconClick = this.handleIconClick.bind(this)
  }

  componentDidMount() {
    this.globalWeatherInfo()
    // navigator.geolocation.getCurrentPosition(pos => {
    //   const userPosition = { lat: pos.coords.latitude, lng: pos.coords.longitude}
    //   this.setState({ userPosition })
    // })
  }

  handleIconClick(id) {
    this.setState({ clickedLocation: id })
  }

  globalWeatherInfo() {
    axios.get(`https://api.openweathermap.org/data/2.5/box/city?bbox=${this.world}${this.zoomLevel}&APPID=${openweatherToken}`)
      .then(response => {
        const tempArray = response.data.list.map(eachLocation => ({
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
          weatherIcon: eachLocation.weather[0].icon
        }))
        const weatherData = [...this.state.weatherData, ...tempArray]
        this.setState({ weatherData })
      })
  }

  render() {
    return (
      <main>
        {this.state.weatherData &&
        <Map
          weatherPoints={this.state.weatherData}
          center={this.mapCenter}
          points={this.state.weatherData}
          handleIconClick={this.handleIconClick}
        />
        }
        <SidePanel
          clickedLocation={this.state.clickedLocation}
          weatherData={this.state.weatherData}
        />
      </main>
    );
  }

}

export default App;
