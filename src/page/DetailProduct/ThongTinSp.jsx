import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ImgFetch from '../../components/ImgFetch/ImgFetch';
import parse from 'html-react-parser';
import { NavLink, useNavigate } from 'react-router-dom';

let langueDinamicKey = {
  en: 'En',
  vn: 'Vn',
};

let title = {
  en: 'Product information',
  vn: 'Thông tin sản phẩm',
};

let button = {
  en: 'Contact to order',
  vn: 'Liên hệ đặt hàng',
};
const ThongTinSp = ({ dataSp }) => {
  const { content, language } = useSelector((state) => state.contentPageSlice);
  const navigate = useNavigate();
  const infoSp = 'info' + langueDinamicKey[language];
  const nameSp = 'name' + langueDinamicKey[language];

  const [imgMain, setImgMain] = useState('');
  const renderImgExtra = () => {
    return dataSp.imgExtra?.map((img, index) => {
      return (
        <div
          key={index}
          className="h-[109px] lg:h-[105px] flex-1 rounded-md overflow-hidden"
          onClick={() => {
            setImgMain(img);
          }}
        >
          <ImgFetch imgId={img} />
        </div>
      );
    });
  };
  return (
    <div className="container_td section" id="ttSpDetail">
      <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center mb-12">
        {title[language]}
      </h3>
      <div className="flex flex-wrap lg:space-y-5">
        <div className="w-1/2 lg:w-full space-y-5">
          <div className="w-full h-[460px] overflow-hidden rounded-xl">
            <ImgFetch
              isPreview={true}
              imgId={
                imgMain ? imgMain : dataSp?.imgExtra ? dataSp?.imgExtra[0] : ''
              }
            />
          </div>
          <div className="flex items-center justify-between space-x-5 lg:space-x-2">
            {renderImgExtra()}
          </div>
        </div>
        {/* Phải */}
        <div className="w-1/2 lg:w-full space-y-8 lg:space-y-4 my-auto pl-12 lg:pl-0">
          <h3 className="font-bold text-xl color_text_content">
            {dataSp[nameSp]}
          </h3>
          <div className="color_text_content  space-y-8 lg:space-y-4 lg:text-xs">
            {parse(`${dataSp[infoSp]}`)}
          </div>
          <button
            onClick={() => {
              navigate(`/lien-he?language=${language}`);
            }}
            className="button_td lg:w-full"
          >
            {button[language]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThongTinSp;
