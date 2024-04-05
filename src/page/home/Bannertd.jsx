import React from 'react';

const Bannertd = () => {
  return (
    <div className="banner_td relative">
      <img
        src="./img/banner_td.png"
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src="./img/ovl_banner.png"
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="text-center xl-text absolute w-full bottom-16 left-1/2 -translate-x-1/2">
        <p>SẢN XUẤT - KIẾN TẠO</p>

        <p>NGÀNH NHỰA VIỆT NAM</p>
      </div>
    </div>
  );
};

export default Bannertd;
