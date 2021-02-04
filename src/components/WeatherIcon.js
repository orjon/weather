import React from 'react';
import { Marker } from 'react-map-gl';
import { iconAssignment } from '../helpers/iconAssignment';
import { stringSplitter } from '../helpers/strings';

const WeatherIcon = ({ location, handleIconClick }) => {
  let icon = iconAssignment(location.weatherIcon);
  let id = location.id;

  const handleClick = (id) => {
    handleIconClick(id);
  };
  return (
    <Marker longitude={location.latlng[1]} latitude={location.latlng[0]}>
      <div className='Marker' onClick={handleClick(id)}>
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
