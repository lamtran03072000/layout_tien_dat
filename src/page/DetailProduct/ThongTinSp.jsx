import React from 'react';

const ThongTinSp = () => {
  return (
    <div className="container_td section" id="ttSpDetail">
      <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center mb-12">
        Thông tin sản phẩm
      </h3>
      <div className="flex flex-wrap lg:space-y-5">
        <div className="w-1/2 lg:w-full space-y-5">
          <div className="w-full">
            <img
              src="./img/thongtin/1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between space-x-5 lg:space-x-2">
            <div className="h-[109px] lg:h-[105px] flex-1 rounded-md overflow-hidden">
              <img
                src="./img/thongtin/1.png"
                alt=""
                className="w-full object-cover h-full"
              />
            </div>
            <div className="h-[109px] lg:h-[105px] flex-1 rounded-md overflow-hidden">
              <img
                src="./img/thongtin/1.png"
                alt=""
                className="w-full object-cover h-full"
              />
            </div>
            <div className="h-[109px] lg:h-[105px] flex-1 rounded-md overflow-hidden">
              <img
                src="./img/thongtin/1.png"
                alt=""
                className="w-full object-cover h-full"
              />
            </div>
          </div>
        </div>
        {/* Phải */}
        <div className="w-1/2 lg:w-full space-y-8 lg:space-y-4 my-auto pl-12 lg:pl-0">
          <h3 className="font-bold text-xl color_text_content">Sản phẩm 1</h3>
          <div className="color_text_content  space-y-8 lg:space-y-4 lg:text-xs">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsuspendisse ultrices gravida. Risus commodo
            </p>
            <ul className="list-disc pl-12 space-y-1 lg:pl-7  ">
              <li>
                viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit,
              </li>
              <li>
                viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit,
              </li>
              <li>
                viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit,
              </li>
            </ul>
          </div>
          <button className="button_td lg:w-full">Liên hệ đặt hàng</button>
        </div>
      </div>
    </div>
  );
};

export default ThongTinSp;
