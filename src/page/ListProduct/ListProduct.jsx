import React from 'react';
import BannerSp from '../../components/BannerSp';
import CacLoaiSanPham from './CacLoaiSanPham';
import BanMuonBietThem from '../../components/BanMuonBietThem';
const ListProduct = () => {
  const renderContent = () => {
    return (
      <div className="space-y-7">
        <div className="text-3xl lg:text-xl font-medium">Sản phẩm</div>
        <div className="l-text !font-bold ">
          <div className="lg:text-3xl">
            <div>Doanh Nghiệp Sản Xuất Hạt Nhựa</div>
            <div>Hàng Đầu Việt Nam</div>
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
