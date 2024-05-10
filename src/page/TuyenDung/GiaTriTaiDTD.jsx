import React from 'react';

const GiaTriTaiDTD = () => {
  return (
    <div>
      <div className=" section container_td" id="giatriDTD">
        <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center mb-12 lg:mb-3">
          Giá trị tại Đại Tiến Đạt
        </h3>

        <div className="space-y-12 lg:space-y-7">
          <div className="w-full h-[652px] lg:h-[210px]  bg-gray-300"></div>
          <div className="w-full lg:overflow-x-scroll">
            <div className="flex space-x-8 lg:w-[120%] lg:space-x-4 justify-between">
              <div className="w-1/3 text-center">
                <div className="w-full  pb-[100%] bg-gray-300"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="w-1/3 text-center">
                <div className="w-full  pb-[100%] bg-gray-300"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="w-1/3 text-center">
                <div className="w-full  pb-[100%] bg-gray-300"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiaTriTaiDTD;
