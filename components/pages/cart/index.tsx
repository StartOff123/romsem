'use client';

import { ProductType } from '@prisma/client';

import { GoodsType } from '@/types';
import { useAppSelector } from '@/hooks/redux-hooks';
import CartItem from '@/components/modules/cart-item';
import CartItemSceleton from '@/components/modules/cart-item/cart-item-sceleton';

const CartPage = () => {
    const { cart, loading } = useAppSelector(state => state.cartSlice);

    return (
        <div className='flex flex-col gap-6'>
            <div className='pb-6 border-b-[1px] border-zinc-300'>
                <div className='flex gap-4 items-center'>
                    <h1 className='text-[34px] font-bold'>Корзина</h1>
                    <span className='text-xl font-bold text-zinc-400'>{cart?.length} товаров</span>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                {loading === 'pending' && (
                    Array(6).fill(1).map((_, i) => (
                        <CartItemSceleton />
                    ))
                )}
                {cart && loading === 'succeeded' && (
                    Object.entries(GoodsType).map(typeArr => {
                        if (cart?.filter(cartItem => cartItem.type === typeArr[0] as ProductType).length) {
                            return (
                                <div className='flex flex-col gap-8'>
                                    <div className='flex gap-4 items-center'>
                                        <h1 className='text-2xl font-bold'>{typeArr[1]}</h1>
                                        <span className='text-sm font-semibold text-zinc-400'>{cart?.filter(cartItem => cartItem.type === typeArr[0] as ProductType).length} товаров</span>
                                    </div>
                                    <div className='flex flex-col gap-8 pl-6'>
                                        {cart?.filter(cartItem => cartItem.type === typeArr[0] as ProductType).map(item => (
                                            <CartItem item={item} />
                                        ))}
                                    </div>
                                </div>
                            )
                        }

                        return null;
                    })
                )}
            </div>
        </div>
    );
}

export default CartPage;