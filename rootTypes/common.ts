export type SidebarItemType = {
	id: number;
	type: ProductsEnum;
	title: string;
	image: string;
	icon: React.ReactNode;
	href: string;
};

export enum ProductsEnum {
	PIZZA = 'PIZZA',
	SETS = 'SETS',
	WOK = 'WOK',
	ROLS = 'ROLS',
	SUSHI = 'SUSHI',
	BEVERAGES = 'BEVERAGES'
}

export enum DeliveryEnum {
	BYCOURIER = 'BYCOURIER',
	PICKUP = 'PICKUP'
}

export enum PaymentEnum {
	CASH = 'CASH',
	BYCARD = 'BYCARD'
}

export enum OrderStatusEnum {
	PROCESSING = 'PROCESSING',
	GETTINGREADY = 'GETTINGREADY',
	DELIVERED = 'DELIVERED',
	ISSUED = 'ISSUED'
}
