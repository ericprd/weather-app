import { Box } from "../../ui/box";
import { LeftInfo } from "./left-info";
import { RightInfo } from "./right-info";

export type DailyProps = {
	date: Date | null
	temperature: string | undefined
	icon: string | undefined
}

export type WeatherBoxInfoProps = {
	date: Date | null
	location: string
	temperature: string
	windSpeed: string
	feelsLike: string
	pressure: number
	humidity: number
	dew: string
	visibility: number
	icon: string
	uvi: number
	daily: DailyProps[]
}

const WeatherBox = () => {
	return (
		<Box className="flex justify-between items-center">
			<LeftInfo />
			<RightInfo />
		</Box>
	)
};

export { WeatherBox };
