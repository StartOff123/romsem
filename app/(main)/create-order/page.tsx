import OrderForm from '@modules/order-form.module';

import { Container } from '@elements/container.element';

export default function CreateOrderPage() {
	return (
		<Container className="py-14 space-y-7">
			<h1 className="text-2xl font-medium">Ваши данные</h1>
			<OrderForm />
		</Container>
	);
}
