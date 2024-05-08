import React from 'react';

const BannerSp = ({ content }) => {
  return (
    <div className="relative lg:h-[55vh]">
      <img
        src="./img/banner_sp.png"
        alt=""
        className="lg:w-full lg:h-full  object-cover"
      />
      <div className="text-center l-text absolute w-full bottom-16 left-1/2 -translate-x-1/2">
        <p className="font-bold">{content}</p>
      </div>
    </div>
  );
};

export default BannerSp;
