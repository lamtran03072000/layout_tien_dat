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
        name: 'PE',
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
        name: 'Pe',
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
        name: 'Pe',
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
        name: 'Pe',
      },
    ],
  },
];
const HeaderSanPhamMobile = () => {
  const renderListSP = () => {
    return data.map((item, index) => {
      return (
        <div
          key={index}
          className="w-1/2 px-2 flex flex-col items-center space-y-1  mb-3"
        >
          <img width={141} height={141} src={item.img} alt="" />
          <p className="text-base font-semibold color_text_content">
            {item.tenLoai}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {item.sanPham.map((sp, index) => {
              const isOdd = item.sanPham.length % 2 !== 0;
              const lastItemIndex = item.sanPham.length - 1;
              return (
                <div
                  key={index}
                  className={`text-xs text-[#818181] ${
                    isOdd && index === lastItemIndex
                      ? 'col-span-2 text-center'
                      : ''
                  }`}
                >
                  <a href={'/detail'}>{sp.name}</a>
                </div>
              );
              // <div className="w-1/2 text-center">
              //   <a href={'/detail'} className="text-xs" key={index}>
              //     {sp.name}
              //   </a>
              // </div>;
            })}
          </div>
        </div>
      );
    });
  };
  return <div className="flex flex-wrap items-start">{renderListSP()}</div>;
};

export default HeaderSanPhamMobile;
