import React from 'react';
import { useSelector } from 'react-redux';

const LoadingPage = () => {
  const { isLoading } = useSelector((state) => state.loadingSlice);
  return (
    <div
      className={` h-full w-full bg-white bg-opacity-95 z-50 ${
        isLoading ? 'fixed' : 'hidden'
      }`}
    >
      <div className="flex items-center justify-center w-full h-full ">
        <img src="./img/logo-loading.png" alt="" />
      </div>
    </div>
  );
};

export default LoadingPage;
