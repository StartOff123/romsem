import moment from 'moment';
import 'moment/locale/ru';
import React from 'react';

import { ORDER_STATUS_NORMALIZE } from '@settings/common';

import { IActiveOrder } from '@rootTypes/order';

type ActiveOrderItemProps = {
	order: IActiveOrder;
};

const ActiveOrderItem: React.FC<ActiveOrderItemProps> = ({ order }) => {
	return (
		<div className="p-2 border border-zinc-200 rounded-md space-y-2">
			<div className="flex justify-between items-center">
				<h1 className="font-medium">Заказ №{order.id}</h1>
				<p className="text-zinc-400 text-sm">
					{moment(order.createdAt).format('L')}{' '}
					{moment(order.createdAt).format('LT')}
				</p>
			</div>
			<p className="text-zinc-400">
				Статус: {ORDER_STATUS_NORMALIZE[order.status]}
			</p>
		</div>
	);
};

export default ActiveOrderItem;
