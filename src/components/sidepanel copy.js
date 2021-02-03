import React, { Component } from 'react';

class SidePanel extends Component {
  constructor() {
    super();
    this.locale = {
      name: '',
    };
  }

  findLocation(locationId) {
    this.locale = this.props.weatherData.filter(
      (x) => x.id === parseInt(locationId)
    )[0];
    switch (this.locale.weatherIcon) {
      case '01d':
        this.locale.weatherIcon = 'day-amin.svg';
        break;
      case '01n':
        this.locale.weatherIcon = 'night-amin.svg';
        break;
      case '02d':
        this.locale.weatherIcon = 'cloudy-day-1-amin.svg';
        break;
      case '02n':
        this.locale.weatherIcon = 'cloudy-night-1-amin.svg';
        break;
      case '03d':
        this.locale.weatherIcon = 'cloudy-day-3-amin.svg';
        break;
      case '03n':
        this.locale.weatherIcon = 'cloudy-night-3-amin.svg';
        break;
      case '04d':
        this.locale.weatherIcon = 'cloudy-amin.svg';
        break;
      case '04n':
        this.locale.weatherIcon = 'cloudy-amin.svg';
        break;
      case '11d':
        this.locale.weatherIcon = 'thunder-amin.svg';
        break;
      case '11n':
        this.locale.weatherIcon = 'thunder-amin.svg';
        break;
      case '13d':
        this.locale.weatherIcon = 'snowy-6-amin.svg';
        break;
      case '13n':
        this.locale.weatherIcon = 'snowy-6-amin.svg';
        break;
      case '09d':
        this.locale.weatherIcon = 'rainy-5-amin.svg';
        break;
      case '09n':
        this.locale.weatherIcon = 'rainy-5-amin.svg';
        break;
      case '10d':
        this.locale.weatherIcon = 'rainy-6-amin.svg';
        break;
      case '10n':
        this.locale.weatherIcon = 'rainy-6-amin.svg';
        break;
      case '50d':
        this.locale.weatherIcon = 'cloudy-amin.svg';
        break;
      case '50n':
        this.locale.weatherIcon = 'cloudy-amin.svg';
        break;
      default:
        break;
    }
    // this.locationName = window.location.id
    return;
  }

  render() {
    if (!this.props.clickedLocation) return null;
    return (
      <aside>
        <div className='weatherInfo'>
          {this.findLocation(this.props.clickedLocation)}
          <div className='place'>{this.locale.name}</div>
          <img
            className='weatherIcon'
            src={require(`../images/${this.locale.weatherIcon}`)}
            alt='weather icon'
          />
          {this.locale.temp && (
            <div className='temp'>{this.locale.temp.toFixed(1)}°C</div>
          )}
          {this.locale.tempMin && this.locale.tempMax && (
            <div>
              {this.locale.tempMin.toFixed(1)}°C /{' '}
              {this.locale.tempMax.toFixed(1)}°C
            </div>
          )}
          <div>&nbsp;</div>
          {this.locale.humidity && <div>Humidty: {this.locale.humidity}%</div>}
          <div>&nbsp;</div>
          {this.locale.windSpeed && (
            <div>Windspeed: {this.locale.windSpeed} knots</div>
          )}
          {this.locale.windDirection && (
            <div>Direction: {this.locale.windDirection.toFixed(0)}°</div>
          )}
          <div>&nbsp;</div>
          <div>{this.locale.weather}</div>
        </div>
        <div className='limitations'>
          Update (2019-06-30): Originally this application displayed global
          weather data. A change in the OpenWeatherMap API now limits free
          weather data to 25 square degrees.
        </div>
      </aside>
    );
  }
}

export default SidePanel;
