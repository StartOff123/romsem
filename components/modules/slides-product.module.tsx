import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Card, { CardSceleron } from '@modules/card.module';

import { useHomeProductStore } from '@hooks/use-home-products-store';

type SlidesProductType = {
	type: 'new' | 'popular';
};

const SlidesProduct: React.FC<SlidesProductType> = ({ type }) => {
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);

	const { getProductsWithParam, products } = useHomeProductStore();

	React.useEffect(() => {
		getProductsWithParam(type);
	}, [type, getProductsWithParam]);

	return (
		<>
			{products ? (
				<div className="relative">
					<Swiper
						modules={[Navigation]}
						slidesPerView={3}
						spaceBetween={40}
						navigation={{
							prevEl: navigationPrevRef.current,
							nextEl: navigationNextRef.current
						}}
						onBeforeInit={(swiper) => {
							// @ts-ignore
							swiper.params.navigation.prevEl = navigationPrevRef.current;
							// @ts-ignore
							swiper.params.navigation.nextEl = navigationNextRef.current;
						}}
						className='py-1'
					>
						{products.map((item) => (
							<SwiperSlide key={item.id}>
								<Card item={item} />
							</SwiperSlide>
						))}
					</Swiper>
					<div
						ref={navigationPrevRef}
						className="absolute top-1/2 -left-9 -translate-y-1/2 z-[1] w-8 h-8 bg-zinc-300 rounded-full flex items-center justify-center hover:bg-orange-400 transition cursor-pointer"
					>
						<ChevronLeft size={20} className="text-white" />
					</div>
					<div
						ref={navigationNextRef}
						className="absolute top-1/2 -right-9 -translate-y-1/2 z-[1] w-8 h-8 bg-zinc-300 rounded-full flex items-center justify-center hover:bg-orange-400 transition cursor-pointer"
					>
						<ChevronRight size={20} className="text-white" />
					</div>
				</div>
			) : (
				<div className="flex justify-between py-1">
					{Array(3)
						.fill(1)
						.map((_, i) => (
							<CardSceleron key={i} />
						))}
				</div>
			)}
		</>
	);
};

export default SlidesProduct;
