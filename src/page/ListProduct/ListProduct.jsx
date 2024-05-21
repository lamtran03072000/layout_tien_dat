import React from 'react';
import BannerSp from '../../components/BannerSp';
import CacLoaiSanPham from './CacLoaiSanPham';
import BanMuonBietThem from '../../components/BanMuonBietThem';
import { useSelector } from 'react-redux';
const ListProduct = () => {
  const { content, language } = useSelector((state) => state.contentPageSlice);
  console.log('content: ', content);

  const renderContent = () => {
    return (
      <div className="space-y-7">
        <div className="text-3xl lg:text-xl font-medium">
          {content?.pageSanPham?.banner.title}
        </div>
        <div className="l-text !font-bold ">
          <div className="lg:text-3xl  text-center">
            <span className="w-1/2 inline-block lg:w-4/5">
              {content?.pageSanPham?.banner.subTitle}
            </span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <BannerSp content={renderContent()} />
      <CacLoaiSanPham />
      <BanMuonBietThem />
    </div>
  );
};

export default ListProduct;
