import React from 'react';
import parse from 'html-react-parser';
import ImgFetch from '../../components/ImgFetch/ImgFetch';
import VideoBgBanner from '../../components/VideoBgBanner/VideoBgBanner';
const Bannertd = ({ dataBanner }) => {
  return (
    <div className="banner_td relative">
      <VideoBgBanner url={dataBanner?.video} />
      <img
        src="./img/ovl_banner.png"
        alt=""
        loading="lazy"
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="text-center xl-text  absolute w-full bottom-16 left-1/2 -translate-x-1/2">
        {parse(`${dataBanner?.content}`)}
      </div>
      {/* <VideoBgBanner /> */}
    </div>
  );
};

export default Bannertd;
