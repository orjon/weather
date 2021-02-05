import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import WeatherIcon from './WeatherIcon';

const Map = ({ weatherLocations, mapCenter, handleIconClick }) => {
  const [currentView, setCurrentView] = useState({
    width: '100%',
    height: '100%',
    longitude: mapCenter.lon,
    latitude: mapCenter.lat,
    zoom: 12,
  });

  let weatherIcons = weatherLocations.map((location) => (
    <WeatherIcon
      key={location.id}
      location={location}
      handleIconClick={handleIconClick}
    />
  ));

  return (
    <div className='map'>
      <ReactMapGL
        {...currentView}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(newView) => setCurrentView(newView)}
        mapStyle='mapbox://styles/orjon/cjszbpgdy2pqm1fqkzvggasjm'
      >
        {weatherIcons}
      </ReactMapGL>
    </div>
  );
};

export default Map;
