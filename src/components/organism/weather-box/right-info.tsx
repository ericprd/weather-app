import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Compass, Navigation } from "react-feather";
import { PProps } from "react-html-props";

type detailProps = {
	iconElm?: ReactNode
	iconClassName?: string
}

const DetailInfo = (p: detailProps & PProps) => {
	const { iconElm, children, className, iconClassName } = p;
	return (
		<p className={cn("text-sm", className)}>
			{iconElm ? (
				<span className={cn('h-3 w-3 inline-block mr-2', iconClassName)}>
					{iconElm}
				</span>
			) : null}
			<span>{children}</span>
		</p>
	);
};

const Info = () => {
	return (
		<>
			<DetailInfo iconElm={<Navigation className="w-full h-full" />} iconClassName="h-5 w-5" className="md:text-2xl">5.1 m/s WSW</DetailInfo>
			<DetailInfo iconElm={<Compass className="w-full h-full" />} iconClassName="h-5 w-5" className="md:text-2xl">1010hPa</DetailInfo>
			<DetailInfo>
				<span className="mr-3 md:text-2xl">Humidity: 47%</span>
				<span className="md:text-2xl">UV: 3</span>
			</DetailInfo>
			<DetailInfo className="md:text-2xl">Dew point: 10 C</DetailInfo>
			<DetailInfo className="md:text-2xl">Visibility: 10.0km</DetailInfo>
		</>
	);
};

const RightInfo = () => {
	return (
		<div className="text-black space-y-1">
			<Info />
		</div>
	);
};

export { RightInfo };
