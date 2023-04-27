import { HomeIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

export default function Breadcrumb(props) {
  const currentPage = props.currentPage;
  const titleWithoutSlash = currentPage.slice(1);
  let capitalizedTitle =
    titleWithoutSlash.charAt(0).toUpperCase() + titleWithoutSlash.slice(1);


  return (
    <div className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
      <nav className='flex' aria-label='Breadcrumb'>
        <ol
          role='list'
          className='flex space-x-4 rounded-md bg-white px-6 shadow'
        >
          <li className='flex'>
            <div className='flex items-center'>
              <Link to='/' className='text-gray-400 hover:text-gray-500'>
                <HomeIcon
                  className='h-5 w-5 flex-shrink-0'
                  aria-hidden='true'
                />
                <span className='sr-only'>Home</span>
              </Link>
            </div>
          </li>
          <li key={capitalizedTitle} className='flex'>
            <div className='flex items-center'>
              <svg
                className='h-full w-6 flex-shrink-0 text-gray-200'
                viewBox='0 0 24 44'
                preserveAspectRatio='none'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
              </svg>
              <Link
                to={currentPage}
                className=' ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
              >
                {capitalizedTitle}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
  // return (
  //   <div className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
  //     <h1 className='ml-3 text-lg font-semibold leading-6 text-gray-900'>
  //       {capitalizedTitle}
  //     </h1>
  //   </div>
  // );
}
