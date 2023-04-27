export default function Modal({overlayClicked, children}) {
  const handleOverlayClick = () => {
    overlayClicked();
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='fixed z-20 '>{children}</div>
      </div>
      <div
        onClick={handleOverlayClick}
        className='fixed z-10  w-full h-full bg-black opacity-75'
      />
    </>
  );
}
