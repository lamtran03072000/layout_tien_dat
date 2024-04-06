import { useRef } from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '170px',
  width: '275px',
  borderRadius: '10px',
  overflow: 'hidden',
  background: 'red',
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
  const handleNext = () => {
    refCarou.current.next();
  };
  const handlePre = () => {
    refCarou.current.prev();
  };
  return (
    <div className="text-center space-y-10 section container_td">
      <div className="flex justify-between color_text_content ">
        <h3 className="text-3xl font-bold">Sản phẩm khác</h3>
        <p className="space-x-2">
          <span>Xem tất cả sản phẩm</span>
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
          {renderSanPhamKhac()}
        </Carousel>
      </div>
    </div>
  );
};

export default SanPhamKhac;
