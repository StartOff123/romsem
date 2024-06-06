/* eslint-disable react/no-unescaped-entities */
import { DetailsType, normalizeCountForm } from '@utils/normalize-count-form';
import { Button, Carousel } from 'antd';
import Image from 'next/image';
import React from 'react';

import { useSliderStore } from '@hooks/use-slider-store';

const Slider = () => {
	const { getSloderItems, sliderItems } = useSliderStore();

	React.useEffect(() => {
		getSloderItems();
	}, [getSloderItems]);

	return (
		<>
			{sliderItems ? (
				<Carousel
					autoplay
					autoplaySpeed={5000}
					style={{
						backgroundImage: 'url(/img/sloder-fon.jpg)',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						borderRadius: '6px'
					}}
				>
					{sliderItems.map((item) => (
						<div key={item.id} className="relative h-[490px] w-full">
							<Image
								src={item.image}
								alt="image"
								width={290}
								height={290}
								className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
							/>
							<div className="flex w-full  h-full justify-between items-end p-6 m-auto">
								<div>
									<h1 className="text-3xl italic text-white">"{item.title}"</h1>
									<div className="flex gap-2">
										{Object.entries(item.details).map((detail, i) => (
											<p key={i} className="text-lg text-orange-400">
												{detail[1]}{' '}
												{normalizeCountForm(
													detail[1],
													detail[0] === 'volume'
														? item.type !== 'BEVERAGES'
															? 'weight'
															: 'volume'
														: (detail[0] as DetailsType)
												)}
											</p>
										))}
									</div>
								</div>
								<div className="flex items-center gap-x-4">
									<b className="text-3xl text-white">{item.price} ₽</b>
									<Button type="primary" className="text-2xl h-auto py-2 px-6">
										В корзину
									</Button>
								</div>
							</div>
						</div>
					))}
				</Carousel>
			) : (
				<span className="block h-[490px] w-full bg-zinc-200 animate-pulse rounded-md" />
			)}
		</>
	);
};

export default Slider;
