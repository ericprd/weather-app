import formatDate, { IntlDateProps } from "@/helpers/date-format";
import MainStore from "@/store/main.store";

const options: IntlDateProps = {
	month: 'short',
	day: '2-digit',
	hour: '2-digit',
	minute: '2-digit',
}

const Info = () => {
	const { currentWeather } = MainStore(state => ({ currentWeather: state.currentWeather }));
	const date = formatDate(currentWeather.date!, options);

	return (
		<div className="text-black space-y-1">
			<p className="text-purple-500 md:text-xl">{date}</p>
			<p className="text-xl md:text-4xl font-bold">{currentWeather.location}</p>
			<p className="text-xs sm:text-sm">Feels like {currentWeather.feelsLike}°C</p>
			<div className="flex items-center gap-3">
				<img className="w-10 md:w-28" src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`} alt="weather-icon" />
				<p className="text-3xl md:text-[4rem]">{currentWeather.temperature}°C</p>
			</div>
		</div>
	);
};

const LeftInfo = () => {
	return (
		<div className="flex items-center sm:block" >
			<Info />
		</div>
	)
};

export { LeftInfo };
