import React, { useEffect, useRef, useState } from 'react';

const HeaderSp = ({
  children,
  isOpen,
  setIsOnHeaderSP,
  handleActiveHeader,
}) => {
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef(null);

  useEffect(() => {
    // Đo lường chiều cao của phần tử và cập nhật maxHeight
    const updateMaxHeight = () => {
      const height = contentRef.current.scrollHeight; // Lấy chiều cao thực tế của nội dung
      setMaxHeight(isOpen ? `${height}px` : '0px');
    };

    updateMaxHeight();
    // Cập nhật lại chiều cao khi isOpen thay đổi hoặc khi window resize
    window.addEventListener('resize', updateMaxHeight);

    return () => {
      window.removeEventListener('resize', updateMaxHeight);
    };
  }, [isOpen, children]); // Phụ thuộc vào isOpen để biết khi nào cập nhật chiều cao

  return (
    <div
      onMouseEnter={() => {
        console.log('do');
        setIsOnHeaderSP(true);
      }}
      onMouseLeave={() => {
        console.log('ra');
        setIsOnHeaderSP(false);
        handleActiveHeader(null);
      }}
      ref={contentRef}
      className="duration-500 absolute top-0 left-0 z-10 w-full  bg-white shadow-md overflow-hidden"
      style={{
        maxHeight: maxHeight,
      }}
    >
      <div className="container_td header_td grid_td ">
        <div className="col-span-2">
          <img
            className="w-[177px] h-[193px]"
            src="./img/footer_logo.png"
            alt=""
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default HeaderSp;
