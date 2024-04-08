import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { Image } from 'antd';
const contentStyle = {};
const TuLieuHinhAnh = () => {
  const refCarou = useRef(null);
  const handleNext = () => {
    refCarou.current.next();
  };
  const handlePre = () => {
    refCarou.current.prev();
  };
  const renderTuLieuHinhAnh = () => {
    return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((d, i) => {
      return (
        <div key={i}>
          <div style={contentStyle}>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <Image
                  src="./img/tulieuhinhanh.png"
                  preview={{
                    mask: 'Xem hình',
                  }}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Image
                  src="./img/tulieuhinhanh.png"
                  preview={{
                    mask: 'Xem hình',
                  }}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Image
                  src="./img/tulieuhinhanh.png"
                  preview={{
                    mask: 'Xem hình',
                  }}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Image
                  src="./img/tulieuhinhanh.png"
                  preview={{
                    mask: 'Xem hình',
                  }}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="section space-y-10 container_td">
      <h3 className="text-3xl color_text_content font-bold text-center">
        Tư liệu hình ảnh
      </h3>

      <div className="relative color_xam_2">
        <span
          onClick={handleNext}
          className="text-4xl absolute top-1/2 -translate-y-1/2 -right-20 cursor-pointer   z-50"
        >
          <i className="fa-solid fa-angles-right"></i>
        </span>
        <span
          onClick={handlePre}
          className="text-4xl absolute top-1/2 -translate-y-1/2 -left-20  cursor-pointer z-50"
        >
          <i className="fa-solid fa-angles-left"></i>
        </span>
        <Carousel ref={refCarou} slidesToShow={1} dots={false}>
          {renderTuLieuHinhAnh()}
        </Carousel>
      </div>
    </div>
  );
};

export default TuLieuHinhAnh;
