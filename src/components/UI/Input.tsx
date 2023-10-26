import { forwardRef, ForwardedRef } from 'react';

type InputObject = {
  className: string;
  value: any;
  onChange: () => void;
  onBlur: () => void;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  autoComplete: string;
  message: string;
}

const Input = forwardRef(({
  className,
  value,
  onChange,
  onBlur,
  type,
  name,
  id,
  placeholder,
  autoComplete,
  message,
}: InputObject, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div>
      <div className='mt-2'>
        <input
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`${className} block w-full rounded-md border-0 py-1.5 
          text-gray-900 shadow-sm ring-1 ring-inset 
          ring-gray-300 placeholder:text-gray-400 focus:ring-2 
          focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6`}
        />
      </div>
      <p className='mt-2 text-sm text-gray-500' id={`${id}-description`}>
        {message}
      </p>
    </div>
  );
});

// Needed for the TypeScript compiler. Heroku build fails without it.
Input.displayName = 'Input';

export default Input;
