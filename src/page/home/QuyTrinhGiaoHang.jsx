import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const data = {
  vn: [
    {
      icon: <i className="fa-solid fa-people-group"></i>,
      step: '01',
      content: 'Tiếp nhận yêu cầu khách hàng',
    },
    {
      icon: <i className="fa-solid fa-comment-dots"></i>,
      step: '02',
      content: 'Tư vấn xem mẫu trực tiếp theo quy cách khách hàng yêu cầu',
    },
    {
      icon: <i className="fa-solid fa-toilet-paper -rotate-90"></i>,
      step: '03',
      content: 'Tiến hành sản xuất hàng loạt',
    },
    {
      icon: <i className="fa-solid fa-truck-fast"></i>,
      step: '04',
      content: 'Giao hàng tận nơi miễn phí',
    },
  ],
  en: [
    {
      icon: <i className="fa-solid fa-people-group"></i>,
      step: '01',
      content: 'Receive customer requests',
    },
    {
      icon: <i className="fa-solid fa-comment-dots"></i>,
      step: '02',
      content: 'Direct sample consultation as per customer request',
    },
    {
      icon: <i className="fa-solid fa-toilet-paper -rotate-90"></i>,
      step: '03',
      content: 'Conducting mass production',
    },
    {
      icon: <i className="fa-solid fa-truck-fast"></i>,
      step: '04',
      content: 'Free delivery',
    },
  ],
};

const title = {
  vn: 'Quy trình đặt hàng',
  en: 'Ordering process',
};

const QuyTrinhGiaoHang = () => {
  const [step, setStep] = useState('01');
  const { content, language } = useSelector((state) => state.contentPageSlice);

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
  const renderStepGiaoHang = (icon, stepRow, content, index) => {
    let isActive = Number(stepRow) == step;
    return (
      <div
        key={index}
        className={`flex space-x-20 lg:space-x-10 ${
          stepRow == '04' ? '' : 'border-b'
        }  py-12 lg:py-8 items-center font-semibold ${
          isActive ? 'text-yellow-400' : 'text-white'
        } duration-300 cursor-pointer`}
      >
        <div
          className={`${
            isActive ? 'text-4xl lg:text-xl' : 'text-3xl lg:text-lg'
          } duration-300`}
        >
          {icon}
        </div>
        <div
          className={`relative ${
            isActive ? 'text-lg lg:text-base' : 'text-base lg:text-xs'
          } duration-300 `}
        >
          <span className="absolute -left-8 lg:-left-7 leading-7">
            {stepRow}
          </span>
          <span className="whitespace-nowrap lg:whitespace-normal leading-7">
            {content}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <img
        loading="lazy"
        src="./img/quy-trinh-dat-hang/bg-quytrinh.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="container_td section relative z-10 ">
        <div className="flex items-center">
          <div className="w-7/12 pr-10 lg:w-full lg:pr-0">
            <h3 className="font-bold text-3xl lg:text-xl text-white mb-12">
              {title[language]}
            </h3>
            <div className="bg-gray-400">
              <div
                style={{
                  width: `${Number(step) * 25}%`,
                }}
                className="bg-yellow-400 h-0.5 duration-150"
              ></div>
            </div>
            {data[language].map((d, i) => {
              return renderStepGiaoHang(d.icon, d.step, d.content, i);
            })}
          </div>
          <div className="w-1/2 h-2/3 lg:hidden absolute -right-12 bottom-14">
            <img
              loading="lazy"
              src="./img/delivery.png"
              className=" w-full h-full "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuyTrinhGiaoHang;
