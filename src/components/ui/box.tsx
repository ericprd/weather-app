import { cn } from '@/lib/utils';
import { DivProps } from 'react-html-props';

export interface BoxProps extends
	DivProps {

	}


const Box = (p: BoxProps) => {
	const { children, className, ...rest } = p;
	return (
		<div className={cn("shadow p-5 rounded-xl bg-white/20 backdrop-blur-sm", className)} {...rest}>
			{children}
		</div>
	)
};

export { Box };
