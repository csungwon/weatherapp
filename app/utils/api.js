const API_KEY = "7905791d4fbf2dba295bc3ae9368f866";
const baseURL = "http://api.openweathermap.org/data/2.5/";

function handdleError(e) {
  console.warn(e);
  return null;
}

function getURL(resource, data) {
  const searchParams = Object.keys(data)
    .map(key => `${key}=${encodeURIComponent(data[key])}`)
    .join("&");
  return `${baseURL}${resource}?${searchParams}`;
}

function getQueryStringData(city) {
  return {
    q: city,
    type: "accurate",
    APPID: API_KEY
  };
}

export function getCurrentWeather(city) {
  const queryStringData = getQueryStringData(city);
  const url = getURL("weather", queryStringData);

  return fetch(url)
    .then(res => res.json())
    .catch(handdleError);
}

function grabDayForecasts(data) {
  let dayForecasts = data.list.filter(w => /15:00:00/.test(w.dt_txt));
  if (dayForecasts.length < 5) {
    dayForecasts.push(data.list[0]);
  }
  return dayForecasts;
}

export function getForecastData(city) {
  const queryStringData = getQueryStringData(city);
  const url = getURL("forecast", queryStringData);

  return fetch(url)
    .then(res => res.json())
    .then(grabDayForecasts)
    .catch(handdleError);
}
