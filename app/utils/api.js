const API_KEY = "7905791d4fbf2dba295bc3ae9368f866";

// http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=7905791d4fbf2dba295bc3ae9368f866
// http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5

export function getCurrentWeather(cityName) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${window.encodeURI(
      cityName
    )}&type=accurate&APPID=${API_KEY}`
  )
    .then(res => res.json())
    .catch(e => {
      console.warn(e);
      return null;
    });
}

export function getFiveDayForecast(cityName) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${window.encodeURI(
      cityName
    )}&type=accurate&APPID=${API_KEY}&cnt=5`
  )
    .then(res => res.json())
    .catch(e => {
      console.warn(e);
      return null;
    });
}
