import { GeoProps } from "@/App";
import { WeatherBoxInfoProps } from "@/components/organism/weather-box";
import { create } from "zustand";

type MainStoreProps = {
  city: GeoProps
  currentWeather: WeatherBoxInfoProps
  setCity: (data: GeoProps) => void
  setCurrentWeather: (data: WeatherBoxInfoProps) => void
}

const MainStore = create<MainStoreProps>()((set) => ({
  city: {
    name: '',
    country: '',
    lon: '0',
    lat: '0',
  },
  currentWeather: {
    date: null,
    location: '',
    temperature: '',
    windSpeed: '',
    pressure: 0,
    humidity: 0,
    icon: '',
    dew: '0',
    visibility: 0,
    uvi: 0,
    feelsLike: '0',
    daily: [],
  },
  setCurrentWeather: (data: WeatherBoxInfoProps) => set((state) => ({ ...state, currentWeather: data })),
  setCity: (data: GeoProps) => set((state) => ({ ...state, city: data})),
}));

export default MainStore;
