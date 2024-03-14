'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { DeliveryType, PaymentType } from '@prisma/client';
import axios, { AxiosError } from 'axios';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { LuPhone } from 'react-icons/lu';

import {
	Button,
	CheckBox,
	Input,
	PhoneInput,
	Select,
	Textarea
} from '@/ui/index';

import { useAppSelector } from '@/hooks/redux-hooks';

import { deliveryOptions, paymentOptions } from '@/settings/add-order';

import { AddOrderSchema, AddOrderType } from '@/types/index';

import { calcTotalPrice } from '@/utils/calc-total-price';

const AddOrderForm = () => {
	const { cart } = useAppSelector((state) => state.cartSlice);

	const [isPrivateHouse, setIsPrivateHouse] = React.useState<boolean>(false);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const {
		control,
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<AddOrderType>({
		resolver: zodResolver(AddOrderSchema)
	});

	const onSubmit = handleSubmit(async (values) => {
		setIsLoading(true);

		const data = { ...values, cart };

		await axios
			.post('/api/orders/create', data)
			.then((response) => {
				toast.success(
					`Заказ №${response.data.orderId} упешно создан! Ожидайте звонка от курьера`
				);
			})
			.catch((err: AxiosError) => {
				toast.error(err.response?.data as string);
			})
			.finally(() => setIsLoading(false));
	});

	React.useEffect(() => {
		watch((values) => setIsPrivateHouse(values.is_private_house!));
	}, [watch]);

	return (
		<form
			onSubmit={onSubmit}
			className="sticky top-[130px] p-4 border-[1px] border-zinc-300 rounded-md flex flex-col gap-4"
		>
			<h1 className="text-lg">Ваши данные</h1>
			<div className="flex flex-col gap-6">
				<Input
					placeholder="Имя"
					{...register('name')}
					error={Boolean(errors.name)}
					errorMessage={errors.name?.message}
				/>
				<Controller
					name="phone"
					control={control}
					render={({ field }) => (
						<PhoneInput
							placeholder="Номер телефона"
							value={field.value}
							icon={<LuPhone />}
							error={Boolean(errors.phone)}
							errorMessage={errors.phone?.message}
							onChange={(value) => field.onChange(value)}
						/>
					)}
				/>
				<Controller
					name="delivery"
					control={control}
					render={({ field }) => (
						<Select
							placeholder="Доставка"
							options={deliveryOptions}
							value={field.value as DeliveryType}
							error={Boolean(errors.delivery)}
							errorMessage={errors.delivery?.message}
							onChange={(value) => field.onChange(value)}
						/>
					)}
				/>
				<Controller
					name="payment"
					control={control}
					render={({ field }) => (
						<Select
							placeholder="Оплата"
							options={paymentOptions}
							value={field.value as PaymentType}
							error={Boolean(errors.payment)}
							errorMessage={errors.payment?.message}
							onChange={(value) => field.onChange(value)}
						/>
					)}
				/>
				<Input
					placeholder="Улица"
					{...register('street')}
					error={Boolean(errors.street)}
					errorMessage={errors.street?.message}
				/>
				<div className="grid grid-cols-2 gap-4">
					<Input
						type="number"
						placeholder="Дом"
						{...register('house')}
						error={Boolean(errors.house)}
						errorMessage={errors.house?.message}
					/>
					<Controller
						name="is_private_house"
						control={control}
						render={({ field }) => (
							<CheckBox
								label="Частный дом"
								checked={field.value}
								onChange={(event) => field.onChange(event.target.checked)}
							/>
						)}
					/>
				</div>
				{!isPrivateHouse && (
					<div className="grid grid-cols-2 gap-4">
						<Input
							type="number"
							placeholder="Подъезд"
							{...register('entrance')}
							error={Boolean(errors.entrance)}
							errorMessage={errors.entrance?.message}
						/>
						<Input
							type="number"
							placeholder="Квартирва"
							{...register('apartment')}
							error={Boolean(errors.apartment)}
							errorMessage={errors.apartment?.message}
						/>
					</div>
				)}
				<Textarea placeholder="Комментарий" {...register('comments')} />
				<div className="flex gap-2">
					<p>Итого:</p>
					<span className="flex-1 border-b-[1px] border-dashed border-zinc-400 mb-1"></span>
					<b>{calcTotalPrice(cart)} ₽</b>
				</div>
				<Button variant="black" type="submit">
					Заказать
				</Button>
			</div>
		</form>
	);
};

export default AddOrderForm;
