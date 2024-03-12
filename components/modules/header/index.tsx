'use client';

import React from 'react';
import Link from 'next/link';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

import { Container } from '@/components/elements';
import { categoriesList } from '@/settings/categories-list';
import { fetchCartItems } from '@/lib/redux/slices/cart-slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import HeaderSearch from '@/components/modules/header/header-search';

const Header = () => {
    const dispatch = useAppDispatch();

    const { cart } = useAppSelector(state => state.cartSlice);

    React.useEffect(() => {
        if (window.localStorage.getItem('cart')) {
            dispatch(fetchCartItems(JSON.parse(window.localStorage.getItem('cart')!)));
        }
    }, []);

    return (
        <header className='bg-white fixed w-full top-0 z-50 transition-all'>
            <Container>
                <div className='grid gap-3'>
                    <div className='relative flex justify-between items-center pt-2 before:absolute before:-bottom-1.5 before:w-full before:h-[1px] before:bg-zinc-300'>
                        <div className='flex items-center gap-8'>
                            <span className='text-3xl font-semibold uppercase'>romsem</span>
                            <div className='flex flex-col text-sm text-zinc-600'>
                                <span>+7 (999) 999-99-99</span>
                                <span>С 10:00 до 23:00</span>
                            </div>
                        </div>
                        <Link href='/cart' className='flex items-center text-base gap-3 transition-colors hover:text-indigo-500 cursor-pointer'>
                            <div className='relative'>
                                <HiOutlineShoppingBag size={25} />
                                <span className='absolute bg-indigo-500 text-white top-0 right-0 px-1 min-w-[12px] text-[8px] leading-3 rounded-full'>{cart?.length}</span>
                            </div>
                            Корзина
                        </Link>
                    </div>
                    <div className='flex justify-between items-center py-2 gap-8'>
                        <ul className='flex gap-8 text-zinc-600'>
                            {categoriesList.map(item => (
                                <li key={item.key}>
                                    <Link href={item.href} className='flex items-center gap-3 transition-colors hover:text-indigo-500 cursor-pointer'>
                                        {item.icon}
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <HeaderSearch />
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;