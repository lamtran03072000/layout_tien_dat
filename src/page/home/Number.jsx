import React from 'react';
import CountUp from 'react-countup';
import CustomCountUp from '../../components/CustomCountUp';

const Number = () => {
  const renderCountDownNumber = (number) => {
    return <CustomCountUp numberCounter={number} />;
  };
  return (
    <div className="relative">
      <img
        src="./img/number.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="container_td grid_td section relative z-10">
        <div className="col-start-2 col-end-6 my-auto">
          <p className="xxl-text">
            <span className="xxl-text number-count-xl">
              {renderCountDownNumber(1000)}
            </span>
            <span className="xxl-text">+</span>
          </p>
          <p className="l-text">Sản phẩm mỗi ngày</p>
        </div>
        <div className="col-start-7 col-end-12  flex">
          {/* năm/ khách hàng */}
          <div className="w-3/5 space-y-5">
            <div className="">
              <div className="xsl-text">
                <span className="xsl-text number-count-m">
                  {renderCountDownNumber(15)}
                </span>
                <span className="xsl-text">+</span>
              </div>
              <p className="m-text">Năm kinh nghiệm</p>
            </div>
            <div>
              <div className="xsl-text">
                <span className="xsl-text number-count-l">
                  {renderCountDownNumber(100)}
                </span>
                <span className="xsl-text">+</span>
              </div>
              <p className="m-text">Khách hàng thân thiết</p>
            </div>
          </div>
          {/* quy cách/ nhân sự */}

          <div className="w-2/5 space-y-5">
            <div>
              <div className="xsl-text">
                <span className="xsl-text number-count-l">
                  {renderCountDownNumber(300)}
                </span>
                <span className="xsl-text">+</span>
              </div>
              <p className="m-text">Quy cách đa dạng</p>
            </div>
            <div>
              <div className="xsl-text">
                <span className="xsl-text number-count-l ">
                  {renderCountDownNumber(100)}
                </span>
                <span className="xsl-text">+</span>
              </div>
              <p className="m-text">Nhân sự</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
