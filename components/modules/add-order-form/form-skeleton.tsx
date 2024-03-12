import { Button } from '@/components/ui';

const FormSceleton = () => {
    return (
        <div className='sticky top-[130px] p-4 border-[1px] border-zinc-300 rounded-md flex flex-col gap-4'>
            <h1 className='text-lg'>Ваши данные</h1>
            <span className='h-9 w-full block animate-pulse bg-zinc-200 rounded-md'></span>
            <span className='h-9 w-full block animate-pulse bg-zinc-200 rounded-md'></span>
            <span className='h-9 w-full block animate-pulse bg-zinc-200 rounded-md'></span>
            <span className='h-9 w-full block animate-pulse bg-zinc-200 rounded-md'></span>
            <span className='h-9 w-full block animate-pulse bg-zinc-200 rounded-md'></span>
            <div className='grid grid-cols-2 gap-4'>
                <span className='h-9 w-full block animate-pulse bg-zinc-200 rounded-md'></span>
                <span className='h-9 w-full block animate-pulse bg-zinc-200 rounded-md'></span>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <span className='h-9 w-full block animate-pulse bg-zinc-200 rounded-md'></span>
                <span className='h-9 w-full block animate-pulse bg-zinc-200 rounded-md'></span>
            </div>
            <span className='h-16 w-full block animate-pulse bg-zinc-200 rounded-md'></span>
            <span className='h-6 w-full block animate-pulse bg-zinc-200 rounded-md'></span>
            <Button variant='black' disabled>Заказать</Button>
        </div>
    );
}

export default FormSceleton;