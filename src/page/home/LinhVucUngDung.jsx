import React from 'react';

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

const LinhVucUngDung = () => {
  const renderLinhVucUngDung = () => {
    const classes = [
      'col-start-3 col-end-5', // Lớp cho phần tử đầu tiên
      'col-start-6 col-end-8', // Lớp cho phần tử thứ hai
      'col-start-9 col-end-11', // Lớp cho phần tử thứ ba
      // Thêm vào đây nếu bạn muốn nhiều lớp hơn
    ];
    return dataLinhVucUngDung.map((item, index) => {
      const classDf = classes[index % classes.length];

      return (
        <div key={index} className={`${classDf}`}>
          <div className="">
            <div className="w-[177px] h-[177px] rounded-full overflow-hidden">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-3 text-[18px] font-bold whitespace-nowrap">
              {item.title}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container_td section space-y-10">
      <h3 className="text-3xl color_text_content font-bold text-center">
        Lĩnh vực ứng dụng
      </h3>
      <div className="grid_td color_text_content gap-y-12">
        {renderLinhVucUngDung()}
      </div>
    </div>
  );
};

export default LinhVucUngDung;
