import React from 'react';
import BannerSp from '../../components/BannerSp';
import CacLoaiSanPham from './CacLoaiSanPham';
import BanMuonBietThem from '../../components/BanMuonBietThem';
const ListProduct = () => {
  const renderContent = () => {
    return (
      <div className="space-y-7">
        <p className="!text-3xl">Sản phẩm</p>
        <div className="l-text !font-bold">
          <p>Doanh Nghiệp Sản Xuất Hạt Nhựa</p>
          <p>Hàng Đầu Việt Nam</p>
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
