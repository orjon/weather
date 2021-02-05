export const getLocation = () => {
  let center = undefined;
  navigator.geolocation.getCurrentPosition((pos) => {
    console.log('Pos: ', pos);
    center = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    };
    console.log('userPosition: ', center);
  });
  return center;
};
