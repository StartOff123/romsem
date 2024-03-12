'use client';

import React from 'react';
import classNames from 'classnames';
import { LuSearch } from 'react-icons/lu';

const HeaderSearch = () => {
    const [focus, setFocus] = React.useState<boolean>(false);

    return (
        <div className={classNames(
            'flex items-center border-[1px] rounded-md w-full transition-colors overflow-hidden',
            focus ? 'border-indigo-500' : 'border-zinc-300 hover:border-indigo-300'
        )}>
            <span className='text-zinc-400 px-4'>
                <LuSearch size={17} />
            </span>
            <input
                type='text'
                placeholder='Найти в магазине'
                className='text-sm py-3 w-full border-none outline-none'
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
        </div>
    );
}

export default HeaderSearch;