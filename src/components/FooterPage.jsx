import React from 'react';

const FooterPage = () => {
  return (
    <div className="border-t shadow">
      <div className="container_td py-12 border-b border-[#585858]">
        <div className="grid_td color_text_content">
          <div className="col-start-1 col-end-3">
            <img src="./img/footer_logo.png" alt="" />
          </div>
          <div className="col-start-5 col-end-7 space-y-2 my-auto">
            <p>Tầm nhìn</p>
            <p>Sứ mệnh</p>
            <p>Hành trình phát triển</p>
            <p>Hoạt động</p>
            <p>Liên hệ</p>
          </div>
          <div className="col-start-8 col-end-9 space-y-2 my-auto">
            <p>PE Foam</p>
            <p>Ống Gen</p>
            <p>Ống Giấy</p>
            <p>Xốp Khí</p>
            <p>PE Foam</p>
          </div>
          <div className="col-start-10 col-end-11 space-y-2 my-auto">
            <p>PE Foam</p>
            <p>Ống Gen</p>
            <p>Ống Giấy</p>
            <p>Ống Giấy</p>
            <p>Ống Giấy</p>
          </div>
          <div className="col-start-12 col-end-13 space-y-2 my-auto">
            <p>PE Foam</p>
            <p>Ống Gen</p>
            <p>Ống Giấy</p>
            <p>Ống Giấy</p>
            <p>Ống Giấy</p>
          </div>
        </div>
      </div>
      <div className="container_td">
        <div className="flex justify-between items-center color_text_content py-3 ">
          <p>© 2024 bởi Công ty TNHH MTV Đại Tiến Đạt</p>
          <div className="text-3xl space-x-3 font-bold">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-youtube"></i>
            <i className="fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
