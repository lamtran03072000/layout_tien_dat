import { Carousel } from 'antd';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import ImgFetch from '../../components/ImgFetch/ImgFetch';

const SanPhamCungCap = ({ dataSanPhamCungCap }) => {
  const refCarou = useRef(null);

  const { content, language } = useSelector((state) => state.contentPageSlice);

  const renderSanPhamCungCap = () => {
    return content.dssp.map((d, i) => {
      return (
        <div key={i}>
          <div className="p-5 lg:p-1">
            <ImgFetch imgId={d.img} />
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
      <div
        className="text-center space-y-10 lg:space-y-3 section container_td"
        id="sanPhamcc"
      >
        <div className="flex justify-between color_text_content ">
          <h3 className="text-3xl lg:text-xl font-bold">
            {dataSanPhamCungCap.title}
          </h3>
          <p className="space-x-2 lg:hidden">
            <a href="/list-product">{dataSanPhamCungCap.cta}</a>
            <span>
              <i className="fa-solid fa-angles-right"></i>
            </span>
          </p>
        </div>
        <div className="relative color_xam_2">
          <span
            onClick={handleNext}
            className="text-4xl absolute -right-10 top-1/2 -translate-y-1/2 cursor-pointer lg:hidden"
          >
            <i className="fa-solid fa-angles-right"></i>
          </span>
          <span
            onClick={handlePre}
            className="text-4xl absolute -left-10 top-1/2 -translate-y-1/2 cursor-pointer lg:hidden"
          >
            <i className="fa-solid fa-angles-left"></i>
          </span>
          <Carousel
            autoplay
            ref={refCarou}
            slidesToShow={4}
            responsive={[
              {
                breakpoint: 639,
                settings: {
                  slidesToShow: 3,
                },
              },
            ]}
            dots={false}
          >
            {renderSanPhamCungCap()}
          </Carousel>
        </div>
        <button className="hidden button_td lg:block lg:text-base font-bold w-full mt-3">
          <a href="/list-product">{dataSanPhamCungCap.cta}</a>
        </button>
      </div>
    )
  );
};

export default SanPhamCungCap;
