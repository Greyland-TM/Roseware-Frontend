import { useNavigate } from 'react-router-dom';

export default function Button({ size, onClick, nav, className, children }) {
  const navigate = useNavigate();

  const handleNav = () => {
    console.log(`navigating to ${nav}`);
    navigate(`${nav}`);
  };

  switch (size) {
    case 'small':
      return (
        <button
          onClick={nav ? handleNav : onClick}
          type='button'
          className={`'${className} rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'`}
        >
          {children}
        </button>
      );
    case 'medium':
      return (
        <button
          onClick={nav ? handleNav : onClick}
          type='button'
          className={`'${className} rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'`}
        >
          {children}
        </button>
      );
    case 'large':
      return (
        <button
          onClick={nav ? handleNav : onClick}
          type='button'
          className={`'${className} rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'`}
        >
          {children}
        </button>
      );
    case 'x-large':
      return (
        <button
          onClick={nav ? handleNav : onClick}
          type='button'
          className={`'${className} rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'`}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          onClick={nav ? handleNav : onClick}
          type='button'
          className={`'${className} rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'`}
        >
          {children}
        </button>
      );
  }
}
