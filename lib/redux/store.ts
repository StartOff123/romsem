import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './slices/cart-slice';
import goodsSlice from './slices/goods-slice';
import slickGoodsSlice from './slices/slick-goods-slice';

export const store = configureStore({
    reducer: { slickGoodsSlice, cartSlice, goodsSlice }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;