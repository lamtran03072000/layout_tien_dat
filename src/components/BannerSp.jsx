import React from 'react';

const BannerSp = ({ content }) => {
  return (
    <div className="relative">
      <img src="./img/banner_sp.png" alt="" />
      <div className="text-center l-text absolute w-full bottom-16 left-1/2 -translate-x-1/2">
        <p className="font-bold">{content}</p>
      </div>
    </div>
  );
};

export default BannerSp;
