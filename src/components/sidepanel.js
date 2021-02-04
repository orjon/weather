import React, { Fragment, useState, useEffect } from 'react';
import { iconAssignmentAnimated } from '../helpers/iconAssignment';

const SidePanel = ({ clickedLocation, weatherData }) => {
  const [selectedLocation, setSelectedLocation] = useState(undefined);

  useEffect(() => {
    const findLocation = async (clickedLocation) => {
      const thisLocation = weatherData.filter(
        (x) => x.id === parseInt(clickedLocation)
      )[0];
      thisLocation.weatherIcon = iconAssignmentAnimated(
        thisLocation.weatherIcon
      );
      setSelectedLocation(thisLocation);
      // this.locationName = window.location.id
      return;
    };

    if (clickedLocation) {
      findLocation(clickedLocation);
    }
  }, [clickedLocation]);

  return (
    <Fragment>
      {selectedLocation && (
        <aside>
          <div className='weatherInfo'>
            <div className='place'>{selectedLocation.name}</div>
            <img
              className='weatherIcon'
              src={require(`../images/${selectedLocation.weatherIcon}`)}
              alt='weather icon'
            />
            {selectedLocation.temp && (
              <div className='temp'>{selectedLocation.temp.toFixed(1)}°C</div>
            )}
            {selectedLocation.tempMin && selectedLocation.tempMax && (
              <div>
                {selectedLocation.tempMin.toFixed(1)}°C /{' '}
                {selectedLocation.tempMax.toFixed(1)}°C
              </div>
            )}
            <div>&nbsp;</div>
            {selectedLocation.humidity && (
              <div>Humidty: {selectedLocation.humidity}%</div>
            )}
            <div>&nbsp;</div>
            {selectedLocation.windSpeed && (
              <div>Windspeed: {selectedLocation.windSpeed} knots</div>
            )}
            {selectedLocation.windDirection && (
              <div>Direction: {selectedLocation.windDirection.toFixed(0)}°</div>
            )}
            <div>&nbsp;</div>
            <div>{selectedLocation.weather}</div>
          </div>

          <div className='limitations'>
            Update (2019-06-30): Originally this application displayed global
            weather data. A change in the OpenWeatherMap API now limits free
            weather data to 25 square degrees.
          </div>
        </aside>
      )}
    </Fragment>
  );
};

export default SidePanel;
