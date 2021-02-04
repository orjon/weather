import React from 'react';
import mapboxgl from 'mapbox-gl';
import $ from 'jquery';
import { iconAssignment } from '../helpers/iconAssignment';

const WeatherMarker = ({ location, map, handleIconClick }) => {
  let icon = iconAssignment(location.weatherIcon);
  let $marker = $('<img />', {
    class: 'custom-marker img',
    id: location.id,
    src: require(`../images/${icon}`),
  });

  $marker.on('click', () => handleIconClick(location.id));
  // ---------------
  // const popup = new mapboxgl.Popup({ offset: 25, class: 'popup' })
  //   .setHTML(
  //     `<h2>${location.temp.toFixed(0)}°C</h2>
  //     <h3>${location.name || ''}</h3>
  //     <h4>(${location.latlng[0].toFixed(2)},${location.latlng[1].toFixed(2)})</h4>`
  //   )
  // ---------------
  return (
    new mapboxgl.Marker($marker.get(0))
      .setLngLat({ lat: location.latlng[0], lng: location.latlng[1] })
      // .setPopup(popup)
      .addTo(map)
  );
};

export default WeatherMarker;
