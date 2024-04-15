import { Carousel } from 'antd';
import React, { useRef } from 'react';
const contentStyle = {
  padding: '20px',
};

const dataSanPhamCungCap = [
  { img: './img/Sanphamcungcap/1.png' },
  { img: './img/Sanphamcungcap/2.png' },
  { img: './img/Sanphamcungcap/3.png' },
  { img: './img/Sanphamcungcap/4.png' },
  { img: './img/Sanphamcungcap/1.png' },
  { img: './img/Sanphamcungcap/2.png' },
  { img: './img/Sanphamcungcap/3.png' },
  { img: './img/Sanphamcungcap/4.png' },
  { img: './img/Sanphamcungcap/1.png' },
  { img: './img/Sanphamcungcap/2.png' },
  { img: './img/Sanphamcungcap/3.png' },
  { img: './img/Sanphamcungcap/4.png' },
];
const SanPhamCungCap = ({ dataSanPhamCungCap }) => {
  const refCarou = useRef(null);
  const renderSanPhamCungCap = () => {
    return dataSanPhamCungCap.listImg?.map((d, i) => {
      return (
        <div key={i}>
          <div style={contentStyle}>
            <img src={d.img} />
          </div>
        </div>
      );
    });
  };
  const handleNext = () => {
    refCarou.current.next();
  };
  const handlePre = () => {
    refCarou.current.prev();
  };
  return (
    dataSanPhamCungCap && (
      <div className="text-center space-y-10 section container_td">
        <div className="flex justify-between color_text_content ">
          <h3 className="text-3xl font-bold">{dataSanPhamCungCap.title}</h3>
          <p className="space-x-2">
            <a href="/list-product">{dataSanPhamCungCap.cta}</a>
            <span>
              <i className="fa-solid fa-angles-right"></i>
            </span>
          </p>
        </div>
        <div className="relative color_xam_2">
          <span
            onClick={handleNext}
            className="text-4xl absolute -right-10 top-1/2 -translate-y-1/2 cursor-pointer "
          >
            <i className="fa-solid fa-angles-right"></i>
          </span>
          <span
            onClick={handlePre}
            className="text-4xl absolute -left-10 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <i className="fa-solid fa-angles-left"></i>
          </span>
          <Carousel ref={refCarou} slidesToShow={4} dots={false}>
            {renderSanPhamCungCap()}
          </Carousel>
        </div>
      </div>
    )
  );
};

export default SanPhamCungCap;
