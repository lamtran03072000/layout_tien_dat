import React from 'react';
import { DesktopReponsive, MobileReponsive } from '../../HOC/reponsive';
import { Carousel } from 'antd';

const GiaTriTaiDTD = () => {
  return (
    <div>
      <div className=" section container_td">
        <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center mb-12 lg:mb-3">
          Giá trị tại Đại Tiến Đạt
        </h3>
        <div className="space-y-12 lg:space-y-7">
          <div className="w-full h-[652px] lg:h-[300px]  bg-gray-300"></div>
          <DesktopReponsive>
            <div className="flex space-x-4">
              <div>
                <div className="w-full h-[210px] bg-gray-300"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div>
                <div className="w-full h-[210px] bg-gray-300"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div>
                <div className="w-full h-[210px] bg-gray-300"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </DesktopReponsive>
          <MobileReponsive>
            <div className="w-full overflow-x-scroll">
              <div className="w-[120%] flex">
                <div className="pr-3">
                  <div className="w-full h-[210px] lg:h-[130px] bg-gray-300"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="pr-3">
                  <div className="w-full h-[210px] lg:h-[130px] bg-gray-300"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="pr-3">
                  <div className="w-full h-[210px] lg:h-[130px] bg-gray-300"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </MobileReponsive>
        </div>
      </div>
    </div>
  );
};

export default GiaTriTaiDTD;
