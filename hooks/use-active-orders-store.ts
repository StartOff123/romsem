import axios from 'axios';
import { create } from 'zustand';

import { IActiveOrder } from '@rootTypes/order';

type ActiveOrdersType = {
	activeOrders: IActiveOrder[] | null;
	getActiveOrders: (orderIds: string[] | null) => void;
};

export const useActiveOrdersStore = create<ActiveOrdersType>((set) => ({
	activeOrders: null,
	getActiveOrders: async (orderIds) => {
		set({ activeOrders: null });

		if (!orderIds) return set({ activeOrders: [] });

		const { data } = (await axios.post(
			'/api/orders/get-all-with-ids',
			orderIds
		)) as { data: IActiveOrder[] };

		set({ activeOrders: data });
	}
}));
