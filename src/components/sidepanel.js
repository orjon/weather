import React, { Fragment, useState, useEffect } from 'react';
import { iconAssignmentAnimated } from '../helpers/iconAssignment';
import '../scss/Sidepanel.scss';

const SidePanel = ({ clickedLocation, weatherData, panelVisible }) => {
  const [selectedLocation, setSelectedLocation] = useState(undefined);

  useEffect(() => {
    const findLocation = async (clickedLocation) => {
      const thisLocation = weatherData.filter(
        (location) => location.id === parseInt(clickedLocation)
      )[0];
      thisLocation.animatedIcon = iconAssignmentAnimated(
        thisLocation.weatherIcon
      );
      setSelectedLocation(thisLocation);
      return;
    };

    if (clickedLocation) {
      findLocation(clickedLocation);
    }
  }, [clickedLocation]);

  return (
    <aside className={panelVisible ? '' : 'hidden'}>
      {selectedLocation && (
        <Fragment>
          <div className='weatherInfo'>
            <div className='place'>{selectedLocation.name}</div>
            <img
              className='weatherIcon'
              src={require(`../images/${selectedLocation.animatedIcon}`)}
              alt='weather icon'
            />
            <div>{selectedLocation.weather}</div>
            {selectedLocation.temp && (
              <div className='temp'>{selectedLocation.temp.toFixed(1)}°C</div>
            )}
            {selectedLocation.tempMin && selectedLocation.tempMax && (
              <div className='tempMinMax'>
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
          </div>

          <div className='limitations'>
            Update (2019-06-30): Originally this application displayed global
            weather data. A change in the OpenWeatherMap API now limits free
            weather data to 25 square degrees.
          </div>
        </Fragment>
      )}
    </aside>
  );
};

export default SidePanel;
