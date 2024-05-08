import React from 'react';
import BannerSp from '../../components/BannerSp';
import TaiSaoLamViec from './TaiSaoLamViec';
import CacViTriTuyenDung from './CacViTriTuyenDung';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import GiaTriTaiDTD from './GiaTriTaiDTD';

const TuyenDung = () => {
  const { content } = useSelector((state) => state.contentPageSlice);
  console.log('content: ', content);

  const renderContent = () => {
    return (
      <div className="space-y-7">
        <div className="text-3xl lg:text-xl font-medium">
          {parse(`${content.tuyenDung?.banner.title}`)}
        </div>
        <div className="l-text !font-bold ">
          <div className="lg:text-3xl">
            {parse(`${content.tuyenDung?.banner.content}`)}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <BannerSp content={renderContent()} />
      <TaiSaoLamViec dataTaiSaoLamViec={content.tuyenDung?.taiSaoLamViec} />
      <GiaTriTaiDTD />
      <CacViTriTuyenDung
        dataCacViTriTuyenDung={content.tuyenDung?.cacViTriTuyenDung}
      />
    </div>
  );
};

export default TuyenDung;
