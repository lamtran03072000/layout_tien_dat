import React from 'react';
import BannerSp from '../../components/BannerSp';
import DesChungToi from './DesChungToi';
import GiaTriCotLoi from './GiaTriCotLoi';
import TuLieuHinhAnh from './TuLieuHinhAnh';

const VeChungToi = () => {
  const renderContent = () => {
    return (
      <div className="space-y-7">
        <p className="!text-3xl">Về Chúng Tôi</p>
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
      <DesChungToi />
      <GiaTriCotLoi />
      <TuLieuHinhAnh />
    </div>
  );
};

export default VeChungToi;
