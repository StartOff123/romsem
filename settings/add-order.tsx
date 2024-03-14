import { DeliveryType, PaymentType } from '@prisma/client';
import { CiCreditCard2 } from 'react-icons/ci';
import { IoCashOutline } from 'react-icons/io5';
import { LiaBoxesSolid } from 'react-icons/lia';
import { TbTruckDelivery } from 'react-icons/tb';

import { SelectOptions } from '@/components/ui/select';

export const deliveryOptions: SelectOptions[] = [
	{
		title: 'Курьером',
		value: DeliveryType.BYCOURIER,
		icon: <TbTruckDelivery />
	},
	{
		title: 'Самовывоз',
		value: DeliveryType.PICKUP,
		icon: <LiaBoxesSolid />
	}
];

export const paymentOptions: SelectOptions[] = [
	{
		title: 'Картой',
		value: PaymentType.BYCARD,
		icon: <CiCreditCard2 />
	},
	{
		title: 'Наличными',
		value: PaymentType.CASH,
		icon: <IoCashOutline />
	}
];
