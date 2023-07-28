import { Separator } from "@/components/ui/separator";
import { Box } from "../../ui/box";
import { LeftInfo } from "./left-info";
import { RightInfo } from "./right-info";

const WeatherBox = () => {
	return (
		<Box className="flex justify-between items-center">
			<LeftInfo />
			<Separator className="bg-red-500 w-px" orientation="vertical" />
			<RightInfo />	
		</Box>
	)
};

export { WeatherBox };
