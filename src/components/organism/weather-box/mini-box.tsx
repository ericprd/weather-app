import { Box } from "@/components/ui/box";
import { cn } from "@/lib/utils";
import { DailyProps } from ".";
import formatDate from "@/helpers/date-format";

export type MiniBoxProps = {
	className: string
	data: DailyProps
}

const imgUri = import.meta.env.VITE_OPENWEATHER_ICON_URL;

const MiniBox = (p: MiniBoxProps) => {
	const { className, data } = p;
	const date = formatDate(data.date!, { weekday: 'short' });

	return (
		<Box className={cn('text-black w-fit text-center', className)}>
			<p className="sm:text-3xl">{date}</p>
			<div className="lg:h-32 lg:w-32 mx-auto">
				<img src={`${imgUri}${data.icon}@2x.png`} className="h-full w-full object-cover" />
			</div>
			<p className="sm:text-3xl">{data.temperature}°C</p>
		</Box>
	);
};

export { MiniBox };
