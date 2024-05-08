import React, { useEffect, useState } from 'react';

const QuyTrinhGiaoHang = () => {
  const [step, setStep] = useState('01');

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
  const renderStepGiaoHang = (icon, stepRow, content) => {
    let isActive = Number(stepRow) == step;
    return (
      <div
        onClick={() => {
          setStep(stepRow);
        }}
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
        src="./img/quy-trinh-dat-hang/bg-quytrinh.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="container_td section relative z-10 ">
        <div className="flex items-center">
          <div className="w-7/12 pr-10 lg:w-full lg:pr-0">
            <h3 className="font-bold text-3xl lg:text-xl text-white mb-12">
              Quy trình đặt hàng
            </h3>
            <div className="bg-gray-400">
              <div
                style={{
                  width: `${Number(step) * 25}%`,
                }}
                className="bg-yellow-400 h-0.5 duration-150"
              ></div>
            </div>
            {renderStepGiaoHang(
              <i className="fa-solid fa-people-group"></i>,
              '01',
              'Tiếp nhận yêu cầu khách hàng',
            )}
            {renderStepGiaoHang(
              <i className="fa-solid fa-comment-dots"></i>,
              '02',
              'Tư vấn xem mẫu trực tiếp theo quy cách khách hàng yêu cầu',
            )}
            {renderStepGiaoHang(
              <i className="fa-solid fa-box-open"></i>,
              '03',
              'Tiến hành sản xuất hàng loạt',
            )}
            {renderStepGiaoHang(
              <i class="fa-solid fa-truck-fast"></i>,
              '04',
              'Giao hàng tận nơi miễn phí',
            )}
          </div>
          <div className="w-5/12 lg:hidden">
            <img src="./img/delivery.png" className=" w-full h-full " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuyTrinhGiaoHang;
