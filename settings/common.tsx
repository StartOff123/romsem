import { ProductsSvg } from '@elements/products-svg.element';

import {
	OrderStatusEnum,
	ProductsEnum,
	SidebarItemType
} from '@rootTypes/common';

export const PRODUCT_NAMES: Record<ProductsEnum, string> = {
	PIZZA: 'Пицца',
	ROLS: 'Роллы',
	SETS: 'Сеты',
	SUSHI: 'Суши',
	WOK: 'WOK',
	BEVERAGES: 'Напитки'
};

export const ORDER_STATUS_NORMALIZE: Record<OrderStatusEnum, string> = {
	PROCESSING: 'Новый',
	GETTINGREADY: 'Готовится',
	DELIVERED: 'Доставляется',
	ISSUED: 'Закрыт'
};

export const SIDEBAR_LINKS: SidebarItemType[] = [
	{
		id: 1,
		type: ProductsEnum.PIZZA,
		title: PRODUCT_NAMES.PIZZA,
		icon: <ProductsSvg variant={ProductsEnum.PIZZA} width={30} height={30} />,
		image: '/img/pizza.jpg',
		href: '/catalog/pizza'
	},
	{
		id: 2,
		type: ProductsEnum.SETS,
		title: PRODUCT_NAMES.SETS,
		icon: <ProductsSvg variant={ProductsEnum.SETS} width={30} height={30} />,
		image: '/img/sets.jpg',
		href: '/catalog/sets'
	},
	{
		id: 3,
		type: ProductsEnum.WOK,
		title: PRODUCT_NAMES.WOK,
		icon: <ProductsSvg variant={ProductsEnum.WOK} width={30} height={30} />,
		image: '/img/wok.webp',
		href: '/catalog/wok'
	},
	{
		id: 4,
		type: ProductsEnum.ROLS,
		title: PRODUCT_NAMES.ROLS,
		icon: <ProductsSvg variant={ProductsEnum.ROLS} width={30} height={30} />,
		image: '/img/rols.jpg',
		href: '/catalog/rols'
	},
	{
		id: 5,
		type: ProductsEnum.SUSHI,
		title: PRODUCT_NAMES.SUSHI,
		icon: <ProductsSvg variant={ProductsEnum.SUSHI} width={30} height={30} />,
		image: '/img/sushi.jpg',
		href: '/catalog/sushi'
	},
	{
		id: 6,
		type: ProductsEnum.BEVERAGES,
		title: PRODUCT_NAMES.BEVERAGES,
		icon: (
			<ProductsSvg variant={ProductsEnum.BEVERAGES} width={30} height={30} />
		),
		image: '/img/beverages.webp',
		href: '/catalog/beverages'
	}
];
