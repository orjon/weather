import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { v4 as uuid } from 'uuid';
import { iconAssignment } from '../helpers/iconAssignment';

const Map = ({ weatherLocations, mapCenter, handleIconClick }) => {
  const [currentView, setCurrentView] = useState({
    width: '100%',
    height: '100%',
    longitude: mapCenter.lon,
    latitude: mapCenter.lat,
    zoom: 12,
  });

  let weatherIcons1 = weatherLocations.map((location) => {
    let icon = iconAssignment(location.weatherIcon);
    return (
      <Marker
        key={uuid()}
        longitude={location.latlng[1]}
        latitude={location.latlng[0]}
      >
        <div className='Marker'>
          <img
            className='weatherIcon'
            id={location.id}
            src={require(`../images/${icon}`)}
          />
          {location.temp && (
            <div className='weatherIconLocation'>{location.name}</div>
          )}
        </div>
      </Marker>
    );
  });

  return (
    <div className='map'>
      <ReactMapGL
        {...currentView}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(newView) => setCurrentView(newView)}
        mapStyle='mapbox://styles/orjon/cjszbpgdy2pqm1fqkzvggasjm'
      >
        {weatherIcons1}
      </ReactMapGL>
    </div>
  );
};

export default Map;
