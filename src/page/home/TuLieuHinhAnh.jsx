import React, { useRef } from 'react';
import { Carousel } from 'antd';
const contentStyle = {};
const TuLieuHinhAnh = ({ dataTuLieuHinhAnh }) => {
  const refCarou = useRef(null);
  const handleNext = () => {
    refCarou.current.next();
  };
  const handlePre = () => {
    refCarou.current.prev();
  };
  return (
    dataTuLieuHinhAnh && (
      <div className="section space-y-10">
        <h3 className="text-3xl color_text_content font-bold text-center">
          {dataTuLieuHinhAnh.title}
        </h3>

        <div className="relative color_xam_2">
          <span
            onClick={handleNext}
            className="text-4xl absolute top-1/2 -translate-y-1/2 right-20 cursor-pointer   z-50"
          >
            <i className="fa-solid fa-angles-right"></i>
          </span>
          <span
            onClick={handlePre}
            className="text-4xl absolute top-1/2 -translate-y-1/2 left-20  cursor-pointer z-50"
          >
            <i className="fa-solid fa-angles-left"></i>
          </span>
          <Carousel ref={refCarou} slidesToShow={1} dots={false}>
            <div style={contentStyle}>
              <img src="./img/tulieuhinhanh/1.png" alt="" />
            </div>
            <div style={contentStyle}>
              <img src="./img/tulieuhinhanh/1.png" alt="" />
            </div>
            <div style={contentStyle}>
              <img src="./img/tulieuhinhanh/1.png" alt="" />
            </div>
            <div style={contentStyle}>
              <img src="./img/tulieuhinhanh/1.png" alt="" />
            </div>
            <div style={contentStyle}>
              <img src="./img/tulieuhinhanh/1.png" alt="" />
            </div>
            <div style={contentStyle}>
              <img src="./img/tulieuhinhanh/1.png" alt="" />
            </div>
          </Carousel>
        </div>
      </div>
    )
  );
};

export default TuLieuHinhAnh;
