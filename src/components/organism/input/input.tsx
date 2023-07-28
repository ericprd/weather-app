import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "react-feather";
import { InputPropsWithoutRef } from "react-html-props";

export interface CustomInputProps extends InputPropsWithoutRef {
	containerClassName?: string
}

const TextInput = (p: CustomInputProps) => {
	const { containerClassName, ...rest } = p;

	return (
		<div className={cn('w-full', containerClassName)}>
			<div className="rounded-xl overflow-hidden p-1 flex bg-white/30 backdrop-blur-md items-center">
				<Input className="w-full h-full p-4 border-none text-lg sm:text-xl" {...rest} />
				<Button className="active:scale-95">
					<Search className="text-black text-xl" />
				</Button>
			</div>
		</div>
	)
};

export { TextInput };
