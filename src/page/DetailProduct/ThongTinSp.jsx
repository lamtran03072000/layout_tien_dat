import React from 'react';

const ThongTinSp = () => {
  return (
    <div className="container_td section">
      <h3 className="text-3xl color_text_content font-bold text-center mb-12">
        Thông tin sản phẩm
      </h3>
      <div className="space-y-4">
        <div className="grid_td gap-x-20">
          {/* trái */}
          <div className="col-start-1 col-end-7 space-y-4">
            <div className="w-[570px] h-[460px]">
              <img
                src="./img/thongtin/1.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Phải */}
          <div className="col-start-7 col-end-13 space-y-8 my-auto">
            <h3 className="font-bold text-xl color_text_content">Sản phẩm 1</h3>
            <div className="color_text_content  space-y-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsuspendisse ultrices gravida. Risus commodo
              </p>
              <ul className="list-disc pl-12 space-y-1">
                <li>
                  viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit,
                </li>
                <li>
                  viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit,
                </li>
                <li>
                  viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit,
                </li>
              </ul>
            </div>
            <button className="button_td">Liên hệ đặt hàng</button>
          </div>
        </div>
        <div className="grid_td ">
          <div className="col-start-1 col-end-7 flex items-center justify-between ">
            <div className="w-[177px] h-[109px] rounded-md overflow-hidden">
              <img
                src="./img/thongtin/1.png"
                alt=""
                className="w-full object-cover h-full"
              />
            </div>
            <div className="w-[177px] h-[109px] rounded-md overflow-hidden">
              <img
                src="./img/thongtin/1.png"
                alt=""
                className="w-full object-cover h-full"
              />
            </div>
            <div className="w-[177px] h-[109px] rounded-md overflow-hidden">
              <img
                src="./img/thongtin/1.png"
                alt=""
                className="w-full object-cover h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThongTinSp;
