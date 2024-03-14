'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

import CardSkeleton from '@/modules/card/card-skeleton';
import { Card } from '@/modules/index';

import { Button } from '@/ui/index';

import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';

import { fetchSlickGoods } from '@/redux/slices/slick-goods-slice';

import { Product } from '@/types/index';

type SlickListProps = {
	title: string;
	redierctUrl: string;
	requestUrl: string;
};

const SlickList = ({ requestUrl, redierctUrl, title }: SlickListProps) => {
	let cols: string = '';

	const router = useRouter();
	const dispatch = useAppDispatch();
	const { cart, loading: cartLoading } = useAppSelector(
		(state) => state.cartSlice
	);
	const { slickGoods, loading } = useAppSelector(
		(state) => state.slickGoodsSlice
	);

	slickGoods?.forEach(() => {
		cols += ' 283.75px';
	});

	const [slickWidth, setSlickWidth] = React.useState<number>(0);

	const handleSlick = (index: number) => {
		if (slickGoods) {
			if (
				(index === 1 && slickWidth === (slickGoods?.length - 4) * 283.75) ||
				(index === -1 && slickWidth === 0)
			)
				return;
			if (index === 1) setSlickWidth((state) => state + 283.75);
			if (index === -1) setSlickWidth((state) => state - 283.75);
		}
	};

	React.useEffect(() => {
		dispatch(fetchSlickGoods(requestUrl));
	}, []);

	return (
		<div className="flex flex-col gap-10">
			<div className="flex items-center justify-between">
				<h1 className="text-3xl font-bold">{title}</h1>
				<Button variant="black" onClick={() => router.push(redierctUrl)}>
					Подробнее
				</Button>
			</div>
			<div className="relative">
				<button
					onClick={() => handleSlick(-1)}
					className="absolute top-1/2 -translate-y-1/2 p-2 rounded-md bg-white text-indigo-500 border-[1px] border-indigo-100 -left-3 transition-colors hover:bg-indigo-500 hover:text-white z-10"
				>
					<FaArrowLeftLong />
				</button>
				<div className="overflow-hidden pb-20">
					{loading === 'pending' && (
						<div className="grid grid-cols-4 transition-transform duration-500 w-full">
							{Array(4)
								.fill(1)
								.map((_, i) => (
									<div key={i} className="py-2 px-3">
										<CardSkeleton />
									</div>
								))}
						</div>
					)}
					{loading === 'succeeded' && slickGoods && (
						<div
							style={{
								gridTemplateColumns: cols,
								transform: `translateX(-${slickWidth}px)`
							}}
							className="grid transition-transform duration-500 w-full"
						>
							{slickGoods?.slice(0, 9).map((item: Product) => (
								<div key={item.id} className="py-2 px-3">
									<Card
										item={item}
										actionsLoading={cart || cartLoading ? false : true}
										isAdded={
											cart?.filter(
												(cartItem: Product) => cartItem.id === item.id
											)[0]
												? true
												: false
										}
									/>
								</div>
							))}
						</div>
					)}
				</div>
				<button
					onClick={() => handleSlick(1)}
					className="absolute top-1/2 -translate-y-1/2 p-2 rounded-md bg-white text-indigo-500 border-[1px] border-indigo-100 -right-3 transition-colors hover:bg-indigo-500 hover:text-white z-10"
				>
					<FaArrowRightLong />
				</button>
			</div>
		</div>
	);
};

export default SlickList;
