import axios from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Product, ReduxProductState } from '@/types';

export const fetchGoods = createAsyncThunk('profile/fetchGoods', async ({ type, sort }: { type: string | null, sort: string | null }) => {
    try {
        const { data } = await axios.get(`/api/goods/get-goods?type=${type}&sort=${sort}`);

        return data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
});

const initialState = {
    goods: null,
    loading: 'pending'
} as ReduxProductState;

export const slickGoodsSlice = createSlice({
    name: 'slickGoods',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchGoods.pending, state => {
            state.loading = 'pending';
        });
        builder.addCase(fetchGoods.fulfilled, (state, action: PayloadAction<Product[]>) => {
            if (action.payload.length === 0) state.goods = null
            else state.goods = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(fetchGoods.rejected, state => {
            state.goods = null;
            state.loading = 'failed';
        });
    },
})

export default slickGoodsSlice.reducer;