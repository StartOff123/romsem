export const addCartLocal = (id: string) => {
	if (window.localStorage.getItem('cart')) {
		const currentCartItemId: string[] = JSON.parse(
			window.localStorage.getItem('cart')!
		) as string[];
		window.localStorage.removeItem('cart');

		currentCartItemId.push(id);
		window.localStorage.setItem('cart', JSON.stringify(currentCartItemId));
	} else {
		window.localStorage.setItem('cart', JSON.stringify([id]));
	}
};

export const removeCartLocal = (id: string) => {
	if (!window.localStorage.getItem('cart')) return;

	const currentCartItemId: string[] = JSON.parse(
		window.localStorage.getItem('cart')!
	) as string[];
	window.localStorage.removeItem('cart');

	if (currentCartItemId.length <= 1) return;

	window.localStorage.setItem(
		'cart',
		JSON.stringify(currentCartItemId.filter((item) => item !== id))
	);
};
