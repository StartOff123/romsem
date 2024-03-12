import axios from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Product, ReduxProductState } from '@/types';

export const fetchCartItems = createAsyncThunk('profile/fetchCartItems', async (litsArr: string[]) => {
    try {
        const { data } = await axios.post('/api/cart', litsArr);

        return data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
});

const initialState = {
    cart: null,
    loading: 'pending'
} as ReduxProductState;

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<Product>) => {
            if (state.cart) state.cart = [...state.cart, action.payload]
            else state.cart = [action.payload]
        },
        removeCart: (state, action: PayloadAction<string>) => {
            if (!state.cart) return;

            const newCartArr = state.cart.filter(item => item.id !== action.payload);
            newCartArr.length ? state.cart = newCartArr : state.cart = null;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchCartItems.pending, state => {
            state.loading = 'pending';
        });
        builder.addCase(fetchCartItems.fulfilled, (state, action: PayloadAction<Product[]>) => {
            if (action.payload.length === 0) state.cart = null;
            else state.cart = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(fetchCartItems.rejected, state => {
            state.cart = null;
            state.loading = 'failed';
        });
    },
})

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;