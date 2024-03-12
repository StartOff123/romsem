const CartItemSceleton = () => {
    return (
        <div className='h-[120px] p-4 pl-6 flex items-center gap-8'>
            <div className='h-full'>
                <span className='w-[148px] h-full rounded-md bg-zinc-200 block animate-pulse' />
            </div>
            <div className='h-full flex-1 flex justify-between'>
                <div className='flex flex-col gap-3'>
                    <span className='h-6 w-32 rounded-md bg-zinc-200 block animate-pulse' />
                    <span className='h-5 w-52 rounded-md bg-zinc-200 block animate-pulse' />
                    <div className='flex gap-4'>
                        <span className='h-5 w-16 rounded-md bg-zinc-200 block animate-pulse' />
                        <span className='h-5 w-16 rounded-md bg-zinc-200 block animate-pulse' />
                    </div>
                </div>
                <div className='flex flex-col justify-between items-end'>
                    <span className='h-7 w-16 rounded-md bg-zinc-200 block animate-pulse' />
                    <span className='h-5 w-24 rounded-md bg-zinc-200 block animate-pulse' />
                </div>
            </div>
        </div>
    );
}

export default CartItemSceleton;