import React from 'react';
import BannerSp from '../../components/BannerSp';
import DesChungToi from './DesChungToi';
import GiaTriCotLoi from './GiaTriCotLoi';
import TuLieuHinhAnh from './TuLieuHinhAnh';
import { useSelector } from 'react-redux';

const VeChungToi = () => {
  const { content } = useSelector((state) => state.contentPageSlice);

  const dataAbout = content.about;

  const renderContent = () => {
    return (
      <div className="space-y-7">
        <div className="text-3xl lg:text-xl font-medium">
          {dataAbout?.banner.title}
        </div>
        <div className="l-text !font-bold ">
          <div className="lg:text-3xl  text-center">
            <span className="w-1/2 inline-block lg:w-4/5">
              {dataAbout?.banner.subTitle}
            </span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <BannerSp content={renderContent()} />
      <DesChungToi />
      <GiaTriCotLoi />
      <TuLieuHinhAnh />
    </div>
  );
};

export default VeChungToi;
