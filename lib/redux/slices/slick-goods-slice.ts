import axios from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Product, ReduxProductState } from '@/types';

export const fetchSlickGoods = createAsyncThunk('profile/fetchSlickGoods', async (requesUrl: string) => {
    try {
        const { data } = await axios.get(requesUrl);

        return data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
});

const initialState = {
    slickGoods: null,
    loading: 'pending'
} as ReduxProductState;

export const slickGoodsSlice = createSlice({
    name: 'slickGoods',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchSlickGoods.pending, state => {
            state.loading = 'pending';
        });
        builder.addCase(fetchSlickGoods.fulfilled, (state, action: PayloadAction<Product[]>) => {
            if (action.payload.length === 0) state.slickGoods = null
            else state.slickGoods = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(fetchSlickGoods.rejected, state => {
            state.slickGoods = null;
            state.loading = 'failed';
        });
    },
})

export default slickGoodsSlice.reducer;