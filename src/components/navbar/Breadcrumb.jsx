export default function Breadcrumb(props) {
  const currentPage = props.currentPage;
  const titleWithoutSlash = currentPage.slice(1);
  let capitalizedTitle = titleWithoutSlash.charAt(0).toUpperCase() + titleWithoutSlash.slice(1);

  if (capitalizedTitle === '') {
    capitalizedTitle = "Home"
  };


  return (
    <div className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
      <h1 className='text-lg font-semibold leading-6 text-gray-900'>
        {capitalizedTitle}
      </h1>
    </div>
  );
}
