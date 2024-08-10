import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';
import ImgFetch from '../../components/ImgFetch/ImgFetch';
import parse from 'html-react-parser';
import { DesktopReponsive, MobileReponsive } from '../../HOC/reponsive';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
const contentStyle = {
  margin: 0,
  height: '50vh',
  color: '#fff',
  lineHeight: '160px',
  padding: '0px 20px',
  //   textAlign: 'center',
};
const CarouselTd = () => {
  const { content, language } = useSelector((state) => state.contentPageSlice);
  console.log('content: ', content);
  const refCarou = useRef(null);

  const renderListImg = () => {
    return content?.tuyenDung?.carousel?.listData.map((d, index) => {
      return (
        <div key={index}>
          <div className="h-[50vh] lg:h-[30vh]">
            <ImgFetch imgId={d} isPreview={true} />
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
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className=" section container_td ">
      <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center mb-12 lg:mb-3">
        {content?.tuyenDung?.carousel?.title}
      </h3>
      <div className="grid_td">
        <div className="col-start-2 col-end-12 lg:col-start-1 lg:col-end-5 space-y-5 color_text_content font-light mb-12 lg:mb-3">
          {parse(`${content?.tuyenDung?.carousel?.des}`)}
        </div>
      </div>
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

        <DesktopReponsive>
          <Carousel
            ref={refCarou}
            dotPosition="bottom"
            centerPadding="20%"
            centerMode={true}
            afterChange={onChange}
            slidesToShow={1}
            dots={true}
          >
            {renderListImg()}
          </Carousel>
        </DesktopReponsive>

        <MobileReponsive>
          <Carousel
            autoplay
            autoplaySpeed={2000}
            ref={refCarou}
            slidesToShow={1}
            dots={false}
          >
            {renderListImg()}
          </Carousel>
        </MobileReponsive>
      </div>
    </div>
  );
};

export default CarouselTd;
