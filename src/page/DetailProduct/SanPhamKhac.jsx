import { useRef } from 'react';
import { Carousel } from 'antd';
import { DesktopReponsive, MobileReponsive } from '../../HOC/reponsive';
import { NavLink } from 'react-router-dom';
const contentStyle = {
  height: '170px',
  width: '275px',
  borderRadius: '10px',
  overflow: 'hidden',
  background: 'red',
};

const contentStyleMobile = {
  height: '95px',
  width: '156px',
  paddingRight: '10px',
};

const dataSanPhamKhac = [
  { img: './img/thongtin/1.png' },
  { img: './img/thongtin/1.png' },
  { img: './img/thongtin/1.png' },
  { img: './img/thongtin/1.png' },
  { img: './img/thongtin/1.png' },
  { img: './img/thongtin/1.png' },
  { img: './img/thongtin/1.png' },
  { img: './img/thongtin/1.png' },
  { img: './img/thongtin/1.png' },
  { img: './img/thongtin/1.png' },
];
const SanPhamKhac = () => {
  const refCarou = useRef(null);
  const renderSanPhamKhac = () => {
    return dataSanPhamKhac.map((d, i) => {
      return (
        <div key={i}>
          <div style={contentStyle}>
            <img src={d.img} />
          </div>
        </div>
      );
    });
  };
  const renderSanPhamKhacMobile = () => {
    return dataSanPhamKhac.map((d, i) => {
      return (
        <div key={i}>
          <div style={contentStyleMobile}>
            <img
              src={d.img}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                borderRadius: '10px',
              }}
            />
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
    <div className="section ">
      <div className=" space-y-10 lg:space-y-4 container_td">
        <div className="flex justify-between color_text_content items-center">
          <h3 className="text-3xl font-bold lg:text-xl">Sản phẩm khác</h3>
          <NavLink to="/list-product" className="space-x-2 lg:text-xs">
            <span>Xem tất cả sản phẩm</span>
            <span>
              <i className="fa-solid fa-angles-right"></i>
            </span>
          </NavLink>
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
          <DesktopReponsive>
            <Carousel ref={refCarou} slidesToShow={4} dots={false}>
              {renderSanPhamKhac()}
            </Carousel>
          </DesktopReponsive>
        </div>
      </div>
      <MobileReponsive>
        <div className="w-full overflow-hidden">
          <div className="w-[120%]">
            <Carousel ref={refCarou} slidesToShow={3} dots={false}>
              {renderSanPhamKhacMobile()}
            </Carousel>
          </div>
        </div>
      </MobileReponsive>
    </div>
  );
};

export default SanPhamKhac;
