import React from 'react';
import { Marker } from 'react-map-gl';
import { iconAssignment } from '../helpers/iconAssignment';
import { stringSplitter } from '../helpers/strings';
import '../scss/WeatherIcon.scss';

const WeatherIcon = ({ location, handleIconClick }) => {
  let icon = iconAssignment(location.weatherIcon);

  const handleClick = () => {
    handleIconClick(location.id);
  };
  return (
    <Marker longitude={location.latlng[1]} latitude={location.latlng[0]}>
      <div className='Marker' onClick={handleClick}>
        <img
          alt={`${location.name} icon`}
          className='weatherIcon'
          id={location.id}
          src={require(`../images/${icon}`)}
        />
        {location.temp && (
          <p className='weatherIconLocation'>{stringSplitter(location.name)}</p>
        )}
      </div>
    </Marker>
  );
};

export default WeatherIcon;
