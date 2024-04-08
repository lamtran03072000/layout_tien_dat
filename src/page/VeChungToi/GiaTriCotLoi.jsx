import React from 'react';

const data = [
  {
    img: '',
    des: '',
  },
  {
    img: '',
    des: '',
  },
  {
    img: '',
    des: '',
  },
  {
    img: '',
    des: '',
  },
];

const GiaTriCotLoi = () => {
  const renderGiaTriCotLoi = () => {
    return data.map((item, index) => {
      return (
        <div
          key={index}
          className="w-[275px] h-[275px] relative group transition  duration-400"
        >
          <img
            src="./img/giatricotloi.png"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center space-y-5 group-hover:opacity-0 duration-300">
            <div className="w-[150px] h-[150px] bg-[#D9D9D9] rounded-full"></div>
            <p className="text-xl text-white font-medium">
              Giá trị {index + 1}
            </p>
          </div>
          <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center space-y-5   duration-200">
            <p className="opacity-0 group-hover:opacity-100 text-white px-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className=" section container_td">
      <h3 className="text-3xl color_text_content font-bold text-center mb-12">
        Giá trị cốt lõi
      </h3>

      <div className="flex justify-between">{renderGiaTriCotLoi()}</div>
    </div>
  );
};

export default GiaTriCotLoi;
