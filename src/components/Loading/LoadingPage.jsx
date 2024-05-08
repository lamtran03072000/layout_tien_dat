import React from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react';
import loading from './loading.json';

const LoadingPage = () => {
  const { isLoading } = useSelector((state) => state.loadingSlice);
  console.log('isLoading: ', isLoading);
  return (
    <div
      className={` h-full w-full bg-black bg-opacity-95 z-50 ${
        isLoading ? 'fixed' : 'hidden'
      }`}
    >
      <div className="flex items-center justify-center w-full h-full ">
        <Lottie
          animationData={loading}
          style={{
            height: 300,
          }}
        />
      </div>
    </div>
  );
};

export default LoadingPage;
