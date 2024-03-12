'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui';

type EmptyProps = {
    title: string;
    subtitle: string;
    buttonText: string;
    redirectUrl: string;
}

const Empty = ({ buttonText, redirectUrl, subtitle, title }: EmptyProps) => {
    const router = useRouter();

    return (
        <div className='flex flex-col gap-8 w-full'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-[34px] font-bold'>{title}</h1>
                <p className='font-medium'>{subtitle}</p>
            </div>
            <div>
                <Button variant='black' onClick={() => router.push(redirectUrl)}>{buttonText}</Button>
            </div>
        </div>
    );
}

export default Empty;