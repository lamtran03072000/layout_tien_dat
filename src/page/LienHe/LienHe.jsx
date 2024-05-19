import React from 'react';
import BannerSp from '../../components/BannerSp';
import FormLienHe from './FormLienHe';
import ThongTinChinhSach from './ThongTinChinhSach';
import { useSelector } from 'react-redux';

const titleLienHe = {
  en: 'Liên Hệ',
  vn: 'Contact',
};

const adressLg = {
  en: 'Adress',
  vn: 'Địa chỉ',
};

const LienHe = () => {
  const { content, language } = useSelector((state) => state.contentPageSlice);

  const dataLienHe = content.lienHe;

  const renderContent = () => {
    return (
      <div className="space-y-7">
        <div className="text-3xl lg:text-xl font-medium">
          {dataLienHe?.banner.title}
        </div>
        <div className="l-text !font-bold ">
          <div className="lg:text-3xl  text-center">
            <span className="w-1/2 inline-block">
              {dataLienHe?.banner.subTitle}
            </span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <BannerSp content={renderContent()} />
      <div
        className="grid_td section color_text_content  container_td"
        id="ttlienhe"
      >
        <div className="grid col-start-3 col-end-11 lg:col-start-1 lg:col-end-5">
          <h3 className="text-3xl lg:text-xl font-bold  mb-10">
            {titleLienHe[language]}
          </h3>
          <div className="space-y-5 lg:space-y-3">
            <div className="flex items-start space-x-4 lg:space-x-3">
              <p className="font-bold text-xl lg:text-base w-20 ">
                {adressLg[language]}
              </p>
              <p className="font-light w-2/3">{dataLienHe?.lienHe.adress}</p>
            </div>
            <div className="flex items-start space-x-4 lg:space-x-3">
              <p className="font-bold text-xl lg:text-base w-20">Email</p>
              <p className="font-light">{dataLienHe?.lienHe.email}</p>
            </div>
            <div className="flex items-start space-x-4 lg:space-x-3">
              <p className="font-bold text-xl lg:text-base w-20">Hotline</p>
              <p className="font-light"> {dataLienHe?.lienHe.hotline}</p>
            </div>
          </div>
        </div>
      </div>
      <ThongTinChinhSach />
      <FormLienHe />
    </div>
  );
};

export default LienHe;
