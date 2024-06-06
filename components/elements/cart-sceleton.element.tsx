import React from 'react';

const CartSceleton = () => {
	return (
		<div className="p-10 space-y-3">
			<span className="block h-[48px] w-full bg-zinc-200 animate-pulse rounded-md" />
			<span className="block w-full h-[1px] bg-zinc-200" />
			<span className="block h-[32px] w-full bg-zinc-200 animate-pulse rounded-md" />
			{Array(3)
				.fill(1)
				.map((_, i) => (
					<span
						key={i}
						className="block h-[88.5px] w-full bg-zinc-200 animate-pulse rounded-md"
					/>
				))}
		</div>
	);
};

export default CartSceleton;
