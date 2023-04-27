import { forwardRef } from 'react';

const Input = forwardRef(function Input(
  {
    value,
    onChange,
    onBlur,
    type,
    name,
    id,
    placeholder,
    autoComplete,
    message,
  },
  ref
) {
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
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      </div>
      <p className='mt-2 text-sm text-gray-500' id={`${id}-description`}>
        {message}
      </p>
    </div>
  );
});

export default Input;
