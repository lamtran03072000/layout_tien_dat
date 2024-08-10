import { useEffect, useRef, useState } from 'react';
import { Carousel } from 'antd';
import { DesktopReponsive, MobileReponsive } from '../../HOC/reponsive';
import { NavLink } from 'react-router-dom';
import { sanPhamService } from '../../service/sanPhamService';
import ImgFetch from '../../components/ImgFetch/ImgFetch';

const contentStyle = {
  // height: '200px',
  width: '275px',
  borderRadius: '10px',
  overflow: 'hidden',
};

const contentStyleMobile = {
  height: '95px',
  width: '146px',
  paddingRight: '10px',
};
const ListImgDes = ({ dataSp }) => {
  const refCarou = useRef(null);
  const renderImgDes = () => {
    if (!dataSp?.imgDesArray) return;

    let listFake = Array.from(
      { length: 5 - dataSp.imgDesArray.length },
      (_, i) => 0,
    );

    const newArrayListImgDes = dataSp?.imgDesArray.concat(listFake);
    return newArrayListImgDes.map((d, i) => {
      if (d === 0) {
        return (
          <div key={i}>
            <div style={contentStyle}></div>
          </div>
        );
      } else {
        return (
          <div key={i}>
            <div style={contentStyle}>
              <div className="w-full aspect-video  rounded-xl overflow-hidden border">
                <ImgFetch isPreview={true} imgId={d.img} />
              </div>
              <p className="text-center">{d.des}</p>
            </div>
          </div>
        );
      }
    });
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50; // Khoảng cách tối thiểu để được xem là lướt

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    if (!isSwipe) {
      // Nếu không phải là swipe, thì xem như click và mở preview
      e.target.click(); // Kích hoạt sự kiện click để mở preview của Ant Design
    }
  };

  const renderImgDesMobile = () => {
    if (!dataSp?.imgDesArray) return;

    let listFake = Array.from(
      { length: 5 - dataSp.imgDesArray.length },
      (_, i) => 0,
    );

    const newArrayListImgDes = dataSp?.imgDesArray.concat(listFake);
    return newArrayListImgDes.map((d, i) => {
      return (
        <div key={i}>
          <div style={contentStyleMobile}>
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
              className=""
            >
              <div
                onTouchMove={handleTouchMove}
                onTouchEnd={(e) => handleTouchEnd(e)}
                className="h-[80%] rounded-lg overflow-hidden"
              >
                <ImgFetch isPreview={true} imgId={d.img} />
              </div>
              <p className="text-center">{d.des}</p>
            </div>
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
    <div>
      <div className="relative color_xam_2 mt-14 lg:mt-8">
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
        <DesktopReponsive>
          <Carousel ref={refCarou} slidesToShow={4} dots={false}>
            {renderImgDes()}
          </Carousel>
        </DesktopReponsive>
      </div>

      <MobileReponsive>
        <div className="w-full overflow-hidden">
          <div className="w-[120%]">
            <Carousel ref={refCarou} slidesToShow={3} dots={false}>
              {renderImgDesMobile()}
            </Carousel>
          </div>
        </div>
      </MobileReponsive>
    </div>
  );
};

export default ListImgDes;
