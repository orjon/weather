export const iconAssignmentAnimated = (weatherIconCode) => {
  switch (weatherIconCode) {
    case '01d':
      return 'day-amin.svg';
    case '01n':
      return 'night-amin.svg';
    case '02d':
      return 'cloudy-day-1-amin.svg';
    case '02n':
      return 'cloudy-night-1-amin.svg';
    case '03d':
      return 'cloudy-day-3-amin.svg';
    case '03n':
      return 'cloudy-night-3-amin.svg';
    case '04d':
      return 'cloudy-amin.svg';
    case '04n':
      return 'cloudy-amin.svg';
    case '11d':
      return 'thunder-amin.svg';
    case '11n':
      return 'thunder-amin.svg';
    case '13d':
      return 'snowy-6-amin.svg';
    case '13n':
      return 'snowy-6-amin.svg';
    case '09d':
      return 'rainy-5-amin.svg';
    case '09n':
      return 'rainy-5-amin.svg';
    case '10d':
      return 'rainy-6-amin.svg';
    case '10n':
      return 'rainy-6-amin.svg';
    case '50d':
      return 'cloudy-amin.svg';
    case '50n':
      return 'cloudy-amin.svg';
    default:
      break;
  }
};

export const iconAssignment = (weatherIconCode) => {
  switch (weatherIconCode) {
    case '01d':
      return 'day.svg';
    case '01n':
      return 'night.svg';
    case '02d':
      return 'cloudy-day-1.svg';
    case '02n':
      return 'cloudy-night-1.svg';
    case '03d':
      return 'cloudy-day-3.svg';
    case '03n':
      return 'cloudy-night-3.svg';
    case '04d':
      return 'cloudy.svg';
    case '04n':
      return 'cloudy.svg';
    case '11d':
      return 'thunder.svg';
    case '11n':
      return 'thunder.svg';
    case '13d':
      return 'snowy-6.svg';
    case '13n':
      return 'snowy-6.svg';
    case '09d':
      return 'rainy-5.svg';
    case '09n':
      return 'rainy-5.svg';
    case '10d':
      return 'rainy-6.svg';
    case '10n':
      return 'rainy-6.svg';
    case '50d':
      return 'cloudy.svg';
    case '50n':
      return 'cloudy.svg';
    default:
      return 'cloudy.svg';
  }
};

// thisLocation.weatherIcon = 'day-amin.svg';
