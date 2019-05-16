# **It's the Weather!**
## Project 2 : Web Development Immersive, General Assembly ![General Assembly](images/readme/ga-logo.png "General Assembly logo")

Live link: http://www.orjon.com/weather/<br>
GitHub: https://github.com/orjon/weather

## Overview
It's the Weather! Interactive World map that shows current weather conditions.

React.js application that makes use of OpenWeatherMap and Mapbox APIs to gather current global weather information and place appropriate weather icons on an interactive world map. Icons can be selected to show more detailed weather information at that location.

![alt text](images/readme/weatherScreenRecording.gif "Its the Weather screen recording")

This was my second project completed whilst undertaking the Web Development Immersive course at General Assembly, London. It was a pair project completed in 2 days with fellow student [Pascual Vila](https://www.linkedin.com/in/pascual-vila-web-developer/).


## Brief

* Build a React application that consumes a public API.


## Technologies Used

* React.js
* Axios
* jQuery
* [OpenWeatherMap API]('https://openweathermap.org/api')
* [Mapbox API]('https://docs.mapbox.com/api/')
* Yarn

## Approach Taken

### Screen Layout
The application is divided into two sections. The interactive World map in the left hand side, and the information panel on the right.

![alt text](images/readme/weatherScreenshotSaltLakeCity.jpg "Its the Weather screen shot - US")

The application is similarly split into two react components; [map.js](src/components/map.js) & [sidepanel.js](src/components/sidepanel.js)
