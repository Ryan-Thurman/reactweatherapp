const API_KEY = '8fcbf1cee2a7cb3345e37a40d90a7a2c'
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
const axios = require('axios')

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {

  const url = `${URL}&q=${city},us`
  const getRequest = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: getRequest
  }
}
