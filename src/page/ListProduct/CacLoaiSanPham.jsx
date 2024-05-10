import React from 'react';
const data = [
  {
    tenLoai: 'PE Foam',
    sanPham: [
      {
        tenSanPham: 'Cuộn',
      },
      {
        tenSanPham: 'HD/OPP',
      },
      {
        tenSanPham: 'Sản phẩm khác',
      },
    ],
  },
  {
    tenLoai: 'PE Foam',
    sanPham: [
      {
        tenSanPham: 'Cuộn',
      },
      {
        tenSanPham: 'HD/OPP',
      },
      {
        tenSanPham: 'Sản phẩm khác',
      },
    ],
  },
  {
    tenLoai: 'PE Foam',
    sanPham: [
      {
        tenSanPham: 'Cuộn',
      },
      {
        tenSanPham: 'HD/OPP',
      },
      {
        tenSanPham: 'Sản phẩm khác',
      },
    ],
  },
  {
    tenLoai: 'PE Foam',
    sanPham: [
      {
        tenSanPham: 'Cuộn',
      },
      {
        tenSanPham: 'HD/OPP',
      },
      {
        tenSanPham: 'Sản phẩm khác',
      },
    ],
  },
  {
    tenLoai: 'PE Foam',
    sanPham: [
      {
        tenSanPham: 'Cuộn',
      },
      {
        tenSanPham: 'HD/OPP',
      },
      {
        tenSanPham: 'Sản phẩm khác',
      },
    ],
  },
  {
    tenLoai: 'PE Foam',
    sanPham: [
      {
        tenSanPham: 'Cuộn',
      },
      {
        tenSanPham: 'HD/OPP',
      },
      {
        tenSanPham: 'Sản phẩm khác',
      },
    ],
  },
  {
    tenLoai: 'PE Foam',
    sanPham: [
      {
        tenSanPham: 'Cuộn',
      },
      {
        tenSanPham: 'HD/OPP',
      },
      {
        tenSanPham: 'Sản phẩm khác',
      },
    ],
  },
];
const CacLoaiSanPham = () => {
  const renderListLoaiSp = () => {
    return data.map((item, index) => {
      return (
        <div
          key={index}
          className="w-1/3 lg:w-full flex flex-col items-center space-y-3 p-5"
        >
          <div className="bg-gray-300 h-[340px] lg:h-[309px] w-full"></div>
          <p className="text-xl color_text_content font-bold lg:text-base">
            {item.tenLoai}
          </p>
          <div className="flex items-center justify-between space-x-6">
            {item.sanPham.map((sp, index) => {
              return (
                <p key={index} className="text-[#818181] ">
                  {sp.tenSanPham}
                </p>
              );
            })}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container_td section" id="dsspPageSp">
      <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center mb-12">
        Các loại sản phẩm
      </h3>
      <div className="flex justify-center items-center flex-wrap">
        {renderListLoaiSp()}
      </div>
    </div>
  );
};

export default CacLoaiSanPham;
