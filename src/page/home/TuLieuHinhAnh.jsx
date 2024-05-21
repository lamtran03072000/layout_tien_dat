import React, { useRef } from 'react';
import { Carousel } from 'antd';
import ImgFetch from '../../components/ImgFetch/ImgFetch';
const contentStyle = {
  margin: 0,
  overflow: 'hidden',
  background: 'red',
};
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
      <div className="section space-y-10 lg:space-y-4" id="tlhahp">
        <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center">
          {dataTuLieuHinhAnh.title}
        </h3>

        <div className="relative color_xam_2">
          <span
            onClick={handleNext}
            className="text-4xl absolute top-1/2 -translate-y-1/2 right-20 cursor-pointer   z-50 lg:hidden"
          >
            <i className="fa-solid fa-angles-right"></i>
          </span>
          <span
            onClick={handlePre}
            className="text-4xl absolute top-1/2 -translate-y-1/2 left-20  cursor-pointer z-50 lg:hidden"
          >
            <i className="fa-solid fa-angles-left"></i>
          </span>
          <Carousel ref={refCarou} slidesToShow={1} dots={false}>
            {dataTuLieuHinhAnh.listData.map((item, index) => {
              return (
                <div key={index}>
                  <div className="h-screen lg:h-[40vh]" style={contentStyle}>
                    <ImgFetch imgId={item} />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    )
  );
};

export default TuLieuHinhAnh;
