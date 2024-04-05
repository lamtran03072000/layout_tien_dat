import React from 'react';

const data = [
  {
    img: './img/Sanphamcungcap/1.png',
    tenLoai: 'PE Foam',
    sanPham: [
      {
        name: 'Cuộn',
      },
      {
        name: 'HD/OOP',
      },
      {
        name: 'Sản phẩm khác',
      },
    ],
  },
  {
    img: './img/Sanphamcungcap/1.png',
    tenLoai: 'Ống gen',
    sanPham: [
      {
        name: 'Đơn',
      },
      {
        name: 'Đôi',
      },
    ],
  },
  {
    img: './img/Sanphamcungcap/1.png',
    tenLoai: 'Ống giấy',
    sanPham: [
      {
        name: 'Phi 77',
      },
      {
        name: 'Sản phẩm khác',
      },
    ],
  },
  {
    img: './img/Sanphamcungcap/1.png',
    tenLoai: 'PE Foam',
    sanPham: [
      {
        name: 'Cuộn',
      },
      {
        name: 'Sản phẩm khác',
      },
    ],
  },
  {
    img: './img/Sanphamcungcap/1.png',
    tenLoai: 'PE Foam',
    sanPham: [
      {
        name: 'Cuộn',
      },
    ],
  },
  {
    img: './img/Sanphamcungcap/1.png',
    tenLoai: 'PE Foam',
    sanPham: [
      {
        name: 'Sản phẩm khác',
      },
    ],
  },
  {
    img: './img/Sanphamcungcap/1.png',
    tenLoai: 'PE Foam',
    sanPham: [
      {
        name: 'Cuộn',
      },
      {
        name: 'HD/OOP',
      },
      {
        name: 'Sản phẩm khác',
      },
    ],
  },
];
const HeaderSanPham = () => {
  const renderListSP = () => {
    return data.map((item, index) => {
      return (
        <div key={index} className="flex flex-col items-center space-y-3 w-1/4">
          <img width={141} height={141} src={item.img} alt="" />
          <p>{item.tenLoai}</p>
          <div className="flex space-x-3">
            {item.sanPham.map((sp, index) => (
              <p className="whitespace-nowrap" key={index}>
                {sp.name}
              </p>
            ))}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="flex justify-center items-center flex-wrap  col-span-10 pt-14 space-y-3">
      {renderListSP()}
    </div>
  );
};

export default HeaderSanPham;
