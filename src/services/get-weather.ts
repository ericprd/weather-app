import { refineDay } from "@/helpers/count-time";
import axios from "axios";

const WEATHER_KEY = import.meta.env.VITE_OPENWEATHER_KEY_API

const GetWeatherDaily = async (lat: string, long: string) => {
  const { tomorrow, nextDays } = refineDay(6);

  try {
    const res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,apparent_temperature_max,apparent_temperature_min&current_weather=true&timezone=GMT&start_date=${tomorrow}&end_date=${nextDays}`)
    return res.data;
  } catch (error) {
    throw error.data
  }
};

const GetCurrentWeather = async (lat: string, lon: string) => {
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${WEATHER_KEY}&units=metric`)
    return res.data;
  } catch (error) {
    throw error.data
  }
};

const WeatherServices = {
  GetWeatherDaily,
  GetCurrentWeather,
};

export default WeatherServices;
