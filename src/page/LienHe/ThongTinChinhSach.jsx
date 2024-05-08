import React from 'react';
import ShowDesChinhSach from './ShowDesChinhSach';

const ThongTinChinhSach = () => {
  return (
    <div className="container_td">
      <div className="grid_td section color_text_content">
        <div className="grid col-start-3 col-end-11 lg:col-start-1 lg:col-end-5">
          <h3 className="text-3xl color_text_content font-bold mb-12">
            Thông Tin Chính Sách
          </h3>

          <div className="flex justify-between flex-wrap color_text_content ">
            <ShowDesChinhSach>
              <div className="flex flex-col justify-center items-center space-y-3">
                <div className="w-[99px] h-[81px] ">
                  <img
                    src="./img/lien-he/2.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <p>Chính sách thanh toán</p>
              </div>
            </ShowDesChinhSach>
            <ShowDesChinhSach>
              <div className="flex flex-col justify-center items-center space-y-3">
                <div className="w-[123px] h-[66px] ">
                  <img
                    src="./img/lien-he/1.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <p>Chính sách giao hàng</p>
              </div>
            </ShowDesChinhSach>
            <ShowDesChinhSach>
              <div className="flex flex-col justify-center items-center space-y-3">
                <div className="w-[81px] h-[81px] ">
                  <img
                    src="./img/lien-he/3.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <p>Dịch vụ hậu mãi</p>
              </div>
            </ShowDesChinhSach>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThongTinChinhSach;
