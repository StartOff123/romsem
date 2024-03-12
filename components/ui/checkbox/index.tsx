import React from 'react';
import classNames from 'classnames';
import { FaCheck } from 'react-icons/fa6';

type CheckBoxProps = {
    label?: string;
}

const CheckBox = React.forwardRef<HTMLInputElement, React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & CheckBoxProps>(
    ({ label, onChange, ...props }, ref) => {
        const [isChecked, setIsCheked] = React.useState<boolean>(false);

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setIsCheked(event.target.checked);

            onChange && onChange(event);
        }

        return (
            <div className='flex items-center gap-2'>
                <label className='relative'>
                    <input
                        ref={ref}
                        {...props}
                        onChange={handleChange}
                        name='checkbox'
                        type='checkbox'
                        className='w-4 h-4 appearance-none border-[1px] border-zinc-300 rounded-sm overflow-hidden transition-colors checked:bg-indigo-500 checked:border-indigo-500 hover:border-indigo-400'
                    />
                    <span className={classNames(
                        'absolute text-white select-none transition-opacity top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3',
                        isChecked ? 'opacity-100' : 'opacity-0'
                    )}>
                        <FaCheck size={12} />
                    </span>
                </label>
                <span className='text-zinc-500'>{label}</span>
            </div>
        );
    }
)

export default CheckBox;