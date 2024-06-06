export const setActiveOrderId = (id: string) => {
	const activeOrdersJson = window.localStorage.getItem(
		'active-orders'
	) as string;

	if (!activeOrdersJson) {
		return window.localStorage.setItem('active-orders', JSON.stringify([id]));
	}

	const activeOrders = JSON.parse(activeOrdersJson) as string[];

	activeOrders.push(id);

	window.localStorage.removeItem('active-orders');
	window.localStorage.setItem('active-orders', JSON.stringify(activeOrders));
};

export const getActiveOrderId = (): string[] | null => {
	const activeOrdersJson = window.localStorage.getItem(
		'active-orders'
	) as string;

	if (!activeOrdersJson) return null;

	return JSON.parse(activeOrdersJson);
};
