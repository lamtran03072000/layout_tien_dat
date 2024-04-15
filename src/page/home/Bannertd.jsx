import React from 'react';
import parse from 'html-react-parser';
const Bannertd = ({ dataBanner }) => {
  return (
    <div className="banner_td relative">
      <img
        src={'./img/banner_td.png'}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src="./img/ovl_banner.png"
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="text-center xl-text absolute w-full bottom-16 left-1/2 -translate-x-1/2">
        {parse(`${dataBanner?.content}`)}
      </div>
    </div>
  );
};

export default Bannertd;
