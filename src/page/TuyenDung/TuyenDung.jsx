import React from 'react';
import BannerSp from '../../components/BannerSp';
import TaiSaoLamViec from './TaiSaoLamViec';
import CacViTriTuyenDung from './CacViTriTuyenDung';

const TuyenDung = () => {
  const renderContent = () => {
    return (
      <div className="space-y-7">
        <p className="!text-3xl">Cơ hội việc làm</p>
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
      <TaiSaoLamViec />
      <CacViTriTuyenDung />
    </div>
  );
};

export default TuyenDung;
