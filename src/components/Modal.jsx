export default function Modal(props) {
  const handleOverlayClick = () => {
    props.overlayClicked();
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='absolute z-20 '>{props.children}</div>
      </div>
      <div
        onClick={handleOverlayClick}
        className='absolute z-10  w-full h-full bg-black opacity-50'
      />
    </>
  );
}
