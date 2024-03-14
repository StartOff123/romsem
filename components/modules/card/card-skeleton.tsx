const CardSkeleton = ({ type = 'default' }: { type?: 'default' | 'line' }) => {
	switch (type) {
		case 'default':
			return (
				<div className="h-[364px] p-4 pb-2 flex flex-col gap-9 animate-pulse">
					<span className="w-full h-[260px] bg-zinc-200 block rounded-md" />
					<div className="flex flex-col gap-3">
						<span className="w-full h-5 bg-zinc-200 block rounded-md" />
						<span className="w-full h-5 bg-zinc-200 block rounded-md" />
						<span className="w-full h-5 bg-zinc-200 block rounded-md" />
					</div>
				</div>
			);
	}
};

export default CardSkeleton;
