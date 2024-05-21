import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { Image } from 'antd';
import { DesktopReponsive, MobileReponsive } from '../../HOC/reponsive';

import { useSelector } from 'react-redux';
import ImgFetch from '../../components/ImgFetch/ImgFetch';

const contentStyle = {
  width: '100%',
};

const TuLieuHinhAnh = () => {
  const { content, language } = useSelector((state) => state.contentPageSlice);

  const dataTuLieu = content?.homePage?.tuLieuHinhAnh;

  const refCarou = useRef(null);
  const handleNext = () => {
    refCarou.current.next();
  };
  const handlePre = () => {
    refCarou.current.prev();
  };
  const renderTuLieuHinhAnhMobile = () => {
    return dataTuLieu?.listData.map((d, i) => {
      return (
        <div key={i}>
          <div
            style={{
              width: '100%',
              height: '35vh',
              overflow: 'hidden',
              borderRadius: 10,
            }}
          >
            <ImgFetch imgId={d} />
          </div>
        </div>
      );
    });
  };

  const renderTuLieuHinhAnhDeskTop = () => {
    if (!dataTuLieu) return;
    let length = dataTuLieu.listData.length;
    let numberLoop = Math.ceil(length / 4);
    return Array.from({ length: numberLoop }).map((d, i) => {
      let d1 = 4 * i;
      let d2 = 4 * i + 1;
      let d3 = 4 * i + 2;
      let d4 = 4 * i + 3;

      return (
        <div key={i}>
          <div style={contentStyle}>
            <div className="grid grid-cols-2 gap-10">
              <div
                style={{
                  width: '100%',
                  height: '40vh',
                  overflow: 'hidden',
                  borderRadius: 10,
                }}
              >
                <ImgFetch imgId={dataTuLieu?.listData[d1]} />
              </div>
              <div
                style={{
                  width: '100%',
                  height: '40vh',
                  overflow: 'hidden',
                  borderRadius: 10,
                }}
              >
                <ImgFetch imgId={dataTuLieu?.listData[d2]} />
              </div>
              <div
                style={{
                  width: '100%',
                  height: '40vh',
                  overflow: 'hidden',
                  borderRadius: 10,
                }}
              >
                <ImgFetch imgId={dataTuLieu?.listData[d3]} />
              </div>
              <div
                style={{
                  width: '100%',
                  height: '40vh',
                  overflow: 'hidden',
                  borderRadius: 10,
                }}
              >
                <ImgFetch imgId={dataTuLieu?.listData[d4]} />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      className="section space-y-10 lg:space-y-3 container_td "
      id="tuLieuHinhAnhAbout"
    >
      <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center">
        {dataTuLieu?.title}
      </h3>

      <div className="relative color_xam_2">
        <span
          onClick={handleNext}
          className="text-4xl absolute top-1/2 -translate-y-1/2 -right-20 cursor-pointer   z-50 lg:hidden"
        >
          <i className="fa-solid fa-angles-right"></i>
        </span>
        <span
          onClick={handlePre}
          className="text-4xl absolute top-1/2 -translate-y-1/2 -left-20  cursor-pointer z-50 lg:hidden"
        >
          <i className="fa-solid fa-angles-left"></i>
        </span>

        <DesktopReponsive>
          <Carousel ref={refCarou} slidesToShow={1} dots={false}>
            {renderTuLieuHinhAnhDeskTop()}
          </Carousel>
        </DesktopReponsive>

        <MobileReponsive>
          <Carousel ref={refCarou} slidesToShow={1} dots={false}>
            {renderTuLieuHinhAnhMobile()}
          </Carousel>
        </MobileReponsive>
      </div>
    </div>
  );
};

export default TuLieuHinhAnh;
