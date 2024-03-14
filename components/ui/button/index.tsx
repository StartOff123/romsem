import classNames from 'classnames';
import React from 'react';

type ButtonVariant = 'white' | 'black';

type ButtonProps = {
	className?: string;
	variant?: ButtonVariant;
	isLoading?: boolean;
};

const Button = React.forwardRef<
	HTMLButtonElement,
	ButtonProps &
		React.DetailedHTMLProps<
			React.ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>
>(({ className, variant = 'white', children, ...props }, ref) => {
	return (
		<button
			{...props}
			className={classNames(
				'rounded-md min-w-[256px] py-3 px-10 transition-colors disabled:bg-zinc-600 disabled:hover:bg-zinc-600',
				variant === 'white' &&
					'bg-white text-black hover:bg-zinc-200 font-semibold',
				variant === 'black' &&
					'bg-black text-white hover:bg-zinc-800 font-semibold',
				className
			)}
		>
			{children}
		</button>
	);
});

Button.displayName = 'Button';

export default Button;
