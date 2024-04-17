import React from 'react';
import parse from 'html-react-parser';
import { DesktopReponsive, MobileReponsive } from '../../HOC/reponsive';

const dataLinhVucUngDung = [
  {
    img: './img/LinhVucUngDung/xay_dung.png',
    title: ' Ngành Xây Dựng',
  },
  {
    img: './img/LinhVucUngDung/dienlanh.png',
    title: ' Ngành Điện Lạnh',
  },
  {
    img: './img/LinhVucUngDung/giayda.png',
    title: 'Công Nghiệp Giày Da',
  },
  {
    img: './img/LinhVucUngDung/may.png',
    title: ' Công Nghệ May',
  },
  {
    img: './img/LinhVucUngDung/go.png',
    title: ' Công Nghệ Gỗ',
  },
  {
    img: './img/LinhVucUngDung/giadung.png',
    title: (
      <>
        <p>Công Nghiệp Sản Xuất</p>
        <p>Hàng Gia Dụng</p>
      </>
    ),
  },
];

const LinhVucUngDung = ({ dataLinhVucUngDung }) => {
  const renderLinhVucUngDungDesktop = () => {
    const classes = [
      'col-start-3 col-end-5', // Lớp cho phần tử đầu tiên
      'col-start-6 col-end-8', // Lớp cho phần tử thứ hai
      'col-start-9 col-end-11', // Lớp cho phần tử thứ ba
      // Thêm vào đây nếu bạn muốn nhiều lớp hơn
    ];
    return dataLinhVucUngDung?.listData.map((item, index) => {
      const classDf = classes[index % classes.length];

      return (
        <div key={index} className={`${classDf}`}>
          <div className="flex flex-col items-center">
            <div className="w-[177px] h-[177px] rounded-full overflow-hidden">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-3 text-[18px] font-bold whitespace-nowrap">
              {parse(`${item.title}`)}
            </div>
          </div>
        </div>
      );
    });
  };
  const renderLinhVucUngDungMb = () => {
    const classes = [
      'col-start-1 col-end-3', // Lớp cho phần tử đầu tiên
      'col-start-3 col-end-5', // Lớp cho phần tử thứ hai
      // Thêm vào đây nếu bạn muốn nhiều lớp hơn
    ];
    return dataLinhVucUngDung?.listData.map((item, index) => {
      const classDf = classes[index % classes.length];

      return (
        <div key={index} className={`${classDf}`}>
          <div className="flex flex-col items-center">
            <div className="w-[156px] h-[156px] rounded-full overflow-hidden">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-3 text-[18px] lg:text-base font-bold whitespace-nowrap">
              {parse(`${item.title}`)}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    dataLinhVucUngDung && (
      <div className="container_td  section space-y-10">
        <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center">
          {dataLinhVucUngDung.title}
        </h3>
        <div className="grid_td color_text_content gap-y-12 gap-x-5">
          <DesktopReponsive>{renderLinhVucUngDungDesktop()}</DesktopReponsive>
          <MobileReponsive>{renderLinhVucUngDungMb()}</MobileReponsive>
        </div>
      </div>
    )
  );
};

export default LinhVucUngDung;
