import { Box } from "@/components/ui/box";
import weather from "@/assets/weather.svg";
import { cn } from "@/lib/utils";

export type MiniBoxProps = {
	className: string
}

const MiniBox = (p: MiniBoxProps) => {
	const { className } = p;

	return (
		<Box className={cn('text-black w-fit text-center', className)}>
			<p className="sm:text-3xl">Mon</p>
			<div className="lg:h-32 lg:w-32 mx-auto">
				<img src={weather} className="h-full w-full object-cover" />
			</div>
			<p className="sm:text-3xl">22*C</p>
		</Box>
	);
};

export { MiniBox };
