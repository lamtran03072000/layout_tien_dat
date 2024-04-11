import React from 'react';
import BannerSp from '../../components/BannerSp';
import FormLienHe from './FormLienHe';

const LienHe = () => {
  const renderContent = () => {
    return (
      <div className="space-y-7">
        <p className="!text-3xl">Liên Hệ</p>
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
      <div className="grid_td section color_text_content">
        <div className="grid col-start-3 col-end-11">
          <h3 className="text-3xl  font-bold  mb-10">Liên Hệ</h3>
          <div className="space-y-5">
            {' '}
            <div className="flex items-start space-x-4">
              <p className="font-bold text-xl w-20">Địa chỉ</p>
              <p className="font-light">
                Đường Chu Mạnh Trinh, Ấp Tân Cang, Xã Phước Tân, <br />
                Thành phố Biên Hòa, Tỉnh Đồng Nai
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <p className="font-bold text-xl w-20">Email</p>
              <p className="font-light">daitiendat@yahoo.com.vn</p>
            </div>
            <div className="flex items-start space-x-4">
              <p className="font-bold text-xl w-20">Hotline</p>
              <p className="font-light">(0251) 681 4969 | 098 484 2910</p>
            </div>
          </div>
        </div>
      </div>
      <FormLienHe />
    </div>
  );
};

export default LienHe;
