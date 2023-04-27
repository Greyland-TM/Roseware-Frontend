import { forwardRef } from 'react';

const Input = forwardRef(function MyInput(props, ref) {
  return (
    <div>
      <div className='mt-2'>
        <input
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={ref}
          type={props.type}
          name={props.name}
          id={props.id}
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
        />
      </div>
      <p className='mt-2 text-sm text-gray-500' id={`${props.id}-description`}>
        {props.message}
      </p>
    </div>
  );
});

export default Input;
