import React, { useEffect, useState } from 'react';

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
  const [step, setStep] = useState(1);

  useEffect(() => {
    let count = 0;
    let timeStepIcon = setInterval(() => {
      count += 1;
      let stepTime = ((count - 1) % 4) + 1;
      setStep(stepTime);
    }, 2000);
    return () => {
      clearInterval(timeStepIcon);
    };
  }, []);
  const renderGiaTriCotLoi = () => {
    return data.map((item, index) => {
      return (
        <div className="lg:w-1/2 lg:mb-4 lg:px-2">
          <div
            key={index}
            className="w-[275px]  lg:w-[100%] h-[275px] lg:h-[156px] relative  transition  duration-400 group"
          >
            <img
              src="./img/giatricotloi.png"
              className="w-full h-full object-cover"
              alt=""
            />
            <div
              className={`absolute w-full h-full top-0 flex flex-col items-center justify-center space-y-5 group-hover:opacity-0 ${
                step == index + 1 ? 'opacity-0 ' : ''
              } duration-300`}
            >
              <div className="w-[150px] lg:w-[68px] h-[150px] lg:h-[67px] bg-[#D9D9D9] rounded-full"></div>
              <p className="text-xl text-white font-medium lg:text-base">
                Giá trị {index + 1}
              </p>
            </div>
            <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center space-y-5   duration-200">
              <p
                className={`opacity-0 group-hover:opacity-100 ${
                  step == index + 1 ? 'opacity-100 ' : ''
                }  text-white px-4 text-center`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className=" section container_td" id="giaTriCotLoi">
      <h3 className="text-3xl color_text_content font-bold text-center mb-12">
        Giá trị cốt lõi
      </h3>

      <div className="flex justify-between flex-wrap">
        {renderGiaTriCotLoi()}
      </div>
    </div>
  );
};

export default GiaTriCotLoi;
