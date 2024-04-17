import React from 'react';
import BannerSp from '../../components/BannerSp';
import DesChungToi from './DesChungToi';
import GiaTriCotLoi from './GiaTriCotLoi';
import TuLieuHinhAnh from './TuLieuHinhAnh';

const VeChungToi = () => {
  const renderContent = () => {
    return (
      <div className="space-y-7">
        <div className="text-3xl lg:text-xl font-medium">Về Chúng Tôi</div>
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
      <DesChungToi />
      <GiaTriCotLoi />
      <TuLieuHinhAnh />
    </div>
  );
};

export default VeChungToi;
