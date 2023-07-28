import weather from  "@/assets/weather.svg";

const Info = () => {
	return (
		<div className="text-black">
			<p className="text-purple-500 md:text-xl">Jul 26, 03:41pm</p>
			<p className="text-3xl md:text-4xl font-bold">Jakarta, ID</p>
			<div className="flex items-center gap-3">
				<img className="w-10 md:w-28" src={weather} alt="" />
				<p className="text-3xl md:text-[4rem]">22*C</p>
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
