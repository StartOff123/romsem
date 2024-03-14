'use client';

import React from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

import { Button } from '@/ui/index';

import { sliderItems } from '@/settings/slider-items';

const Slider = () => {
	const ref = React.useRef<HTMLDivElement>(null);

	const [sliderWidth, setSliderWidth] = React.useState<number | undefined>(
		ref.current?.scrollWidth
	);
	const [sliderWidthItem, setSliderWidthItem] = React.useState<
		number | undefined
	>(ref.current?.scrollWidth);
	const [currentSlide, setCurrentSlide] = React.useState<number>(1);

	const handleClickArrow = (index: number) => {
		if (index === -1 && currentSlide === 1) return;
		if (index === 1 && currentSlide === sliderItems.length) return;

		setCurrentSlide((state) => state + index);
	};

	React.useEffect(() => {
		if (ref.current) {
			setSliderWidth(ref.current.scrollWidth * sliderItems.length);
			setSliderWidthItem(ref.current.scrollWidth);
		}
	}, [ref]);

	React.useEffect(() => {
		const slickSlider = setTimeout(() => {
			if (currentSlide === sliderItems.length) setCurrentSlide(1);
			else setCurrentSlide((state) => state + 1);
		}, 5000);

		return () => clearTimeout(slickSlider);
	}, [currentSlide]);

	return (
		<div className="flex flex-col gap-5">
			<div
				ref={ref}
				className="relative overflow-hidden flex h-[600px] rounded-md"
			>
				{sliderWidth && sliderWidthItem && (
					<div
						style={{
							width: sliderWidth,
							transform: `translateX(-${sliderWidthItem * (currentSlide - 1)}px)`
						}}
						className="absolute top-0 left-0 flex transition-all duration-500"
					>
						{sliderItems.map((item, i) => (
							<div
								key={i}
								className="h-[600px] relative flex items-end p-12"
								style={{
									background: `url(${item.image}) no-repeat`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									width: sliderWidthItem
								}}
							>
								<span className="absolute top-0 left-0 bg-black w-full h-full opacity-55 z-0" />
								<div className="text-white z-10 flex justify-between w-full items-center">
									<div className="flex flex-col gap-2">
										<h1 className="text-3xl font-bold">{item.label}</h1>
										<p className="text-xl font-light">{item.description}</p>
									</div>
									<Button>Подробнее</Button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
			<div className="flex items-center gap-2">
				<button
					onClick={() => handleClickArrow(-1)}
					className="text-indigo-500 transition-colors hover:text-indigo-300"
				>
					<FaArrowLeftLong size={14} />
				</button>
				<span className="text-sm">
					{currentSlide}/{sliderItems.length}
				</span>
				<button
					onClick={() => handleClickArrow(1)}
					className="text-indigo-500 transition-colors hover:text-indigo-300"
				>
					<FaArrowRightLong size={14} />
				</button>
			</div>
		</div>
	);
};

export default Slider;
