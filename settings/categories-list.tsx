import { ProductType } from '@prisma/client';

import {
	BeveragesSvg,
	PizzaSvg,
	RolsSvg,
	SetsSvg,
	SushiSvg,
	WokSvg
} from '@/elements/svg';

export type CategoriesListType = {
	key?: ProductType;
	text: string;
	href: string;
	icon: React.ReactNode;
	image: string;
};

export const categoriesList: CategoriesListType[] = [
	{
		key: 'PIZZA',
		text: 'Пицца',
		href: '/catalog?type=PIZZA&sort=desc',
		icon: <PizzaSvg />,
		image: '/images/categories/pizza.jpg'
	},
	{
		key: 'SETS',
		text: 'Сеты',
		href: '/catalog?type=SETS&sort=desc',
		icon: <SetsSvg />,
		image: '/images/categories/sets.png'
	},
	{
		key: 'WOK',
		text: 'WOK',
		href: '/catalog?type=WOK&sort=desc',
		icon: <WokSvg />,
		image: '/images/categories/wok.jpg'
	},
	{
		key: 'ROLS',
		text: 'Роллы',
		href: '/catalog?type=ROLS&sort=desc',
		icon: <RolsSvg />,
		image: '/images/categories/rols.jpg'
	},
	{
		key: 'SUSHI',
		text: 'Суши',
		href: '/catalog?type=SUSHI&sort=desc',
		icon: <SushiSvg />,
		image: '/images/categories/sushi.jpg'
	},
	{
		key: 'BEVERAGES',
		text: 'Напитки',
		href: '/catalog?type=BEVERAGES&sort=desc',
		icon: <BeveragesSvg />,
		image: '/images/categories/beverages.jpg'
	}
];
