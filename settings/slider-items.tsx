type SliderItemType = {
	id: number;
	label: string;
	href: string;
	description: string;
	image: string;
};

export const sliderItems: SliderItemType[] = [
	{
		id: 1,
		label: 'Весенние новики',
		href: '/catalog/sets',
		image: '/images/slider/6c02034b9a39960ecc7a92ae81a03668.jpg',
		description: 'Лушие сеты 2024'
	},
	{
		id: 2,
		label: 'WOK как у бабушки',
		href: '/catalog/wok',
		image: '/images/slider/l-intro-1650466317.jpg',
		description: 'Опытные повора готоврят только лучшее'
	},
	{
		id: 3,
		label: 'Пицца на все времена',
		href: '/catalog/pizza',
		image:
			'/images/slider/989766135_0_105_2000_1230_1920x0_80_0_0_16a8fff0f23e9297155772f93b403aed.jpg',
		description: 'Пышное тесто, яркая начинка, все для прекрасного ужина'
	},
	{
		id: 4,
		label: 'Не забываем запить',
		href: '/catalog/beverages',
		image: '/images/slider/scale_1200.jpg',
		description: 'Любые напитки всех цветов радуги'
	}
];
