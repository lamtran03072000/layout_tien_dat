import React from 'react';
import BannerSp from '../../components/BannerSp';
import FormLienHe from './FormLienHe';
import ThongTinChinhSach from './ThongTinChinhSach';

const LienHe = () => {
  const renderContent = () => {
    return (
      <div className="space-y-7">
        <div className="text-3xl lg:text-xl font-medium">Hỗ trợ khách hàng</div>
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
      <div
        className="grid_td section color_text_content  container_td"
        id="ttlienhe"
      >
        <div className="grid col-start-3 col-end-11 lg:col-start-1 lg:col-end-5">
          <h3 className="text-3xl lg:text-xl font-bold  mb-10">Liên Hệ</h3>
          <div className="space-y-5 lg:space-y-3">
            <div className="flex items-start space-x-4 lg:space-x-3">
              <p className="font-bold text-xl lg:text-base w-20">Địa chỉ</p>
              <p className="font-light">
                Đường Chu Mạnh Trinh, Ấp Tân Cang, Xã Phước Tân, <br />
                Thành phố Biên Hòa, Tỉnh Đồng Nai
              </p>
            </div>
            <div className="flex items-start space-x-4 lg:space-x-3">
              <p className="font-bold text-xl lg:text-base w-20">Email</p>
              <p className="font-light">daitiendat@yahoo.com.vn</p>
            </div>
            <div className="flex items-start space-x-4 lg:space-x-3">
              <p className="font-bold text-xl lg:text-base w-20">Hotline</p>
              <p className="font-light">(0251) 681 4969 | 098 484 2910</p>
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
