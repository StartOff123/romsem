import classNames from 'classnames';
import React from 'react';

type ContainerProps = {
	className?: string;
};

export const Container: React.FC<React.PropsWithChildren & ContainerProps> = ({
	className,
	children
}) => {
	return (
		<div
			className={classNames(
				'max-w-[950px] w-[calc(100%-80px)] mx-auto',
				className
			)}
		>
			{children}
		</div>
	);
};
