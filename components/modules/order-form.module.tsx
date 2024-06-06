'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, Input, Radio } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useActiveOrdersStore } from '@hooks/use-active-orders-store';
import { useCartStore } from '@hooks/use-cart-store';

import { getActiveOrderId, setActiveOrderId } from '@utils/active-order-id';

import { DeliveryEnum, PaymentEnum } from '@rootTypes/common';
import { OrderSchema, OrderType } from '@rootTypes/order';

const OrderForm = () => {
	const router = useRouter();

	const { resetCart } = useCartStore();
	const { getActiveOrders } = useActiveOrdersStore();

	const [isLoading, setIsLoaging] = React.useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<OrderType>({
		resolver: zodResolver(OrderSchema)
	});

	const onSubmit = handleSubmit(async (values) => {
		setIsLoaging(true);

		const cartJson = window.localStorage.getItem('local-cart');
		if (!cartJson) return;

		await axios
			.post('/api/orders', {
				...values,
				productsIds: JSON.parse(cartJson)
			})
			.then((response) => {
				toast.success(
					`Заказ №${response.data.id} успешно создан. Ожидайте звонка от курьера`
				);
				setActiveOrderId(response.data.id);
				resetCart();
				getActiveOrders(getActiveOrderId());
				window.localStorage.removeItem('local-cart');
				router.push('/');
			})
			.catch(() => {
				toast.error(
					'Произошла ошибка при создании заказа. Попробуйде еще раз.'
				);
			})
			.finally(() => setIsLoaging(false));
	});

	return (
		<Form onFinish={onSubmit} className="grid grid-cols-2 gap-x-10 gap-y-5">
			<div className="space-y-5">
				<div className="flex gap-x-5">
					<Controller
						control={control}
						name="phone"
						render={({ field }) => (
							<MaskedInput
								mask={'+7 (000) 000 00-00'}
								status={errors.phone && 'error'}
								value={field.value}
								onChange={field.onChange}
								placeholder="Телефон"
								className="py-1 hover:!border-orange-500 border-transparent text-lg focus:!shadow-none focus:!border-white"
							/>
						)}
					/>
					<Controller
						control={control}
						name="name"
						render={({ field }) => (
							<Input
								placeholder="Имя"
								status={errors.name && 'error'}
								className="py-1 hover:!border-orange-500"
								{...field}
							/>
						)}
					/>
				</div>
				<Controller
					control={control}
					name="payment"
					render={({ field }) => (
						<Radio.Group
							buttonStyle="solid"
							className="!w-full !grid grid-cols-2"
							defaultValue={PaymentEnum.CASH}
							{...field}
						>
							<Radio.Button
								value={PaymentEnum.CASH}
								className="h-10 flex items-center justify-center"
							>
								Наличными
							</Radio.Button>
							<Radio.Button
								value={PaymentEnum.BYCARD}
								className="h-10 flex items-center justify-center"
							>
								Картой
							</Radio.Button>
						</Radio.Group>
					)}
				/>
				<Controller
					control={control}
					name="email"
					render={({ field }) => (
						<Input
							{...field}
							status={errors.email && 'error'}
							placeholder="email (необязательно)"
							className="py-1 hover:!border-orange-500"
						/>
					)}
				/>
			</div>
			<div className="space-y-5">
				<Controller
					control={control}
					name="delivery"
					render={({ field }) => (
						<Radio.Group
							buttonStyle="solid"
							defaultValue={DeliveryEnum.BYCOURIER}
							className="!w-full !grid grid-cols-2"
							{...field}
						>
							<Radio.Button
								value={DeliveryEnum.BYCOURIER}
								className="h-10 flex items-center justify-center"
							>
								Курьером
							</Radio.Button>
							<Radio.Button
								value={DeliveryEnum.PICKUP}
								className="h-10 flex items-center justify-center"
							>
								Самовывоз
							</Radio.Button>
						</Radio.Group>
					)}
				/>
				<div className="flex gap-x-5">
					<Controller
						control={control}
						name="street"
						render={({ field }) => (
							<Input
								status={errors.street && 'error'}
								placeholder="Улица"
								className="py-1 hover:!border-orange-500"
								{...field}
							/>
						)}
					/>
					<Controller
						control={control}
						name="house"
						render={({ field }) => (
							<Input
								type="number"
								status={errors.house && 'error'}
								placeholder="Дом"
								className="py-1 hover:!border-orange-500"
								{...field}
							/>
						)}
					/>
				</div>
				<div className="flex gap-x-5">
					<Controller
						control={control}
						name="apartment"
						render={({ field }) => (
							<Input
								type="number"
								placeholder="Кв"
								className="py-1 hover:!border-orange-500"
								{...field}
							/>
						)}
					/>
					<Controller
						control={control}
						name="entrance"
						render={({ field }) => (
							<Input
								type="number"
								placeholder="Подъезд"
								className="py-1 hover:!border-orange-500"
								{...field}
							/>
						)}
					/>
				</div>
			</div>
			<Controller
				control={control}
				name="comments"
				render={({ field }) => (
					<Input.TextArea
						placeholder="Комментарий к заказу"
						autoSize={{ minRows: 1 }}
						className="hover:!border-orange-500 py-1 min-h-[38px] col-span-2"
						{...field}
					/>
				)}
			/>
			<div className="col-span-2 pt-10 space-y-3">
				<Button
					type="primary"
					htmlType="submit"
					loading={isLoading}
					className="w-full h-[45px]"
				>
					Оформить заказ
				</Button>
				<p className="text-sm text-center px-5">
					Нажимая на кнопку Оформить заказ, Вы подтверждаете свое согласие на
					обработку персональных данных в соответствии с{' '}
					<a href="" className="underline">
						Публичной оффертой
					</a>
				</p>
			</div>
		</Form>
	);
};

export default OrderForm;
