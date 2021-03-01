import React, { Fragment, useState, useEffect } from 'react';
import { iconAssignmentAnimated } from '../helpers/iconAssignment';
import '../scss/Sidepanel.scss';

const SidePanel = ({
  clickedLocation,
  weatherData,
  panelVisible,
  orientation,
}) => {
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
  }, [clickedLocation, weatherData]);

  return (
    <aside className={`${orientation} ${panelVisible ? '' : 'hidden'}`}>
      {selectedLocation && (
        <Fragment>
          <div className={`${orientation} weatherInfo`}>
            <div className='weatherPlace'>
              {selectedLocation.coordinates}
              <div className='place'>{selectedLocation.name}</div>
              <div className='summary'>{selectedLocation.weather}</div>
            </div>

            <div className={`${orientation} weatherDetails`}>
              <div className='weatherblock'>
                <img
                  className='weatherIcon'
                  src={require(`../images/${selectedLocation.animatedIcon}`)}
                  alt='weather icon'
                />
              </div>

              <div className='weatherblock'>
                {selectedLocation.temp && (
                  <div className='temp'>
                    {selectedLocation.temp.toFixed(1)}°C
                  </div>
                )}
                {selectedLocation.tempMin && selectedLocation.tempMax && (
                  <div className='tempMinMax'>
                    {selectedLocation.tempMin.toFixed(1)}°C /{' '}
                    {selectedLocation.tempMax.toFixed(1)}°C
                  </div>
                )}
                <div className='list'>
                  {selectedLocation.humidity && (
                    <div className='listItem'>
                      <div className='listLabel'>Humidty:</div>
                      <div className='listValue'>
                        {selectedLocation.humidity}%
                      </div>
                    </div>
                  )}
                  {selectedLocation.windSpeed && (
                    <div className='listItem'>
                      <div className='listLabel'>Windspeed:</div>
                      <div className='listValue'>
                        {selectedLocation.windSpeed} knots
                      </div>
                    </div>
                  )}
                  {selectedLocation.windDirection && (
                    <div className='listItem'>
                      <div className='listLabel'>Direction:</div>
                      <div className='listValue'>
                        {selectedLocation.windDirection.toFixed(0)}°
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className='limitations'>
            *Originally this application displayed global weather data. A change
            in the OpenWeatherMap API now limits free weather data to 25 square
            degrees.
          </div>
        </Fragment>
      )}
    </aside>
  );
};

export default SidePanel;
