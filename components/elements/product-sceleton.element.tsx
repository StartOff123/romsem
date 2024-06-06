import React from 'react';

import { Container } from './container.element';

const ProductSceleton = () => {
	return (
		<Container className="h-[435px] grid grid-cols-2">
			<div className="py-5 pr-10">
				<span className="block w-full h-full bg-zinc-200 animate-pulse rounded-md" />
			</div>
			<div className="py-10 flex flex-col justify-between">
				<div className="space-y-2">
					<span className="block w-full h-[48px] bg-zinc-200 animate-pulse rounded-md" />
					<span className="block w-full h-[28px] bg-zinc-200 animate-pulse rounded-md" />
				</div>
				<span className="block w-full h-[32px] bg-zinc-200 animate-pulse rounded-md" />
				<div className="space-y-6">
					<div className="space-y-2">
						<span className="block w-full h-[28px] bg-zinc-200 animate-pulse rounded-md" />
						<span className="block w-full h-[56px] bg-zinc-200 animate-pulse rounded-md" />
					</div>
					<span className="block w-[200px] h-[40px] bg-zinc-200 animate-pulse rounded-md" />
				</div>
			</div>
		</Container>
	);
};

export default ProductSceleton;
