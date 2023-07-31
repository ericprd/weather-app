import { FormEvent, useEffect } from "react"
import { TextInput } from "./components/organism/input/input"
import { WeatherBox, WeatherBoxInfoProps } from "./components/organism/weather-box"
import { MiniBox } from "./components/organism/weather-box/mini-box"
import useValue from "./helpers/hooks/useValue"
import LocationServices from "./services/get-city"
import MainStore from "./store/main.store"
import { epochTimeToDate } from "./helpers/count-time"
import WeatherServices from "./services/get-weather"
import toast, { Toaster } from "react-hot-toast"
import { Box } from "./components/ui/box"

export type GeoProps = {
  lon: string
  lat: string
  name: string
  country: string
};

function App() {
  const { state: city, change: setCity } = useValue('');
  const { cityData, setCityData, setCurrentWeather, currentWeather } = MainStore(state => ({
    cityData: state.city,
    setCityData: state.setCity,
    currentWeather: state.currentWeather,
    setCurrentWeather: state.setCurrentWeather,
  }));
  const { state: isLoading, change: setIsLoading } = useValue(false);

  const getCity = async () => {
    setIsLoading(true)
    try {
      const resLocation = await LocationServices.GetCity(city);
      const data = {
        lat: resLocation[0].latitude,
        lon: resLocation[0].longitude,
        country: resLocation[0].country,
        name: resLocation[0].name,
      }
      setCityData(data);
    } catch (error) {
      console.log(error);
      toast.error('Uh-oh, cannot find your city.');
      setIsLoading(false);
    }
  };

  const getWeather = async () => {
    try {
      const res = await WeatherServices.GetCurrentWeather(cityData.lat, cityData.lon);
      const daily = res.daily.slice(1, 7).map((d: {
        temp: {
          min: number
          max: number
        }
        dt: number
        weather: {
          icon: string
        }[]

      }) => ({
        date: epochTimeToDate(d.dt),
        temperature: ((d.temp.min + d.temp.max) / 2).toFixed(1),
        icon: d.weather[0].icon,
      }));

      if (res) {
        const refineCurrentData: WeatherBoxInfoProps = {
          date: epochTimeToDate(res.current.dt),
          location: `${cityData.name}, ${cityData.country}`,
          temperature: res.current.temp.toFixed(1),
          windSpeed: res.current.wind_speed.toFixed(1),
          pressure: res.current.pressure,
          humidity: res.current.humidity,
          dew: res.current.dew_point.toFixed(1),
          visibility: res.current.visibility / 1000,
          uvi: res.current.uvi,
          icon: res.current.weather[0].icon,
          feelsLike: res.current.feels_like.toFixed(1),
          daily: daily,
        };

        setCurrentWeather(refineCurrentData);
        setCity('');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      getCity();
    } catch (error) {
      toast.error('Something went wrong.');
    }
  };

  useEffect(() => {
    if (cityData.lon !== '0' && cityData.lat !== '0') {
      getWeather();
    }
  }, [cityData.lon, cityData.lat]);

  return (
    <>
      <Toaster position="top-center" />
      <main className="bg-black relative p-2 min-h-screen" style={{ backgroundImage: 'url("https://picsum.photos/2160")', backgroundSize: 'cover' }}>
        <div className="fixed left-0 right-0 p-2 bottom-0 sm:p-0 sm:static justify-end sm:mb-5 sm:flex">
          <form className="sm:block w-full lg:w-fit" onSubmit={submitHandler}>
            <TextInput onChange={setCity} value={city} placeholder="Search city" containerClassName="lg:max-w-lg" />
          </form>
        </div>

        <div className="space-y-5">
          {isLoading ? (
            <Box className="min-h-[10rem] animate-pulse" />
          ) : (
            cityData.name !== '' ? (
              <WeatherBox />
            ) : null
          )}
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 overflow-y-auto">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <Box key={i} className="min-h-[10rem] animate-pulse" />
              ))
            ) : (
              currentWeather.daily.length > 0 ? (
                currentWeather.daily.map((d, i) => (
                  <MiniBox data={d} key={i} className="col-span-1 w-full"/>
                ))
              ) : null
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
