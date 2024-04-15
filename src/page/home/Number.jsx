import React from 'react';
import CountUp from 'react-countup';
import CustomCountUp from '../../components/CustomCountUp';

const Number = ({ dataNumber }) => {
  const renderCountDownNumber = (number) => {
    if (!number) return null;
    return <CustomCountUp numberCounter={number} />;
  };
  return (
    dataNumber && (
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
                {renderCountDownNumber(dataNumber[0]?.number)}
              </span>
              <span className="xxl-text">+</span>
            </p>
            <p className="l-text">{dataNumber[0]?.content}</p>
          </div>
          <div className="col-start-7 col-end-12  flex">
            {/* năm/ khách hàng */}
            <div className="w-3/5 space-y-5">
              <div className="">
                <div className="xsl-text">
                  <span className="xsl-text number-count-m">
                    {renderCountDownNumber(dataNumber[1]?.number)}
                  </span>
                  <span className="xsl-text">+</span>
                </div>
                <p className="m-text">{dataNumber[1]?.content}</p>
              </div>
              <div>
                <div className="xsl-text">
                  <span className="xsl-text number-count-l">
                    {renderCountDownNumber(dataNumber[3]?.number)}
                  </span>
                  <span className="xsl-text">+</span>
                </div>
                <p className="m-text">{dataNumber[3]?.content}</p>
              </div>
            </div>
            {/* quy cách/ nhân sự */}

            <div className="w-2/5 space-y-5">
              <div>
                <div className="xsl-text">
                  <span className="xsl-text number-count-l">
                    {renderCountDownNumber(dataNumber[2]?.number)}
                  </span>
                  <span className="xsl-text">+</span>
                </div>
                <p className="m-text">{dataNumber[2]?.content}</p>
              </div>
              <div>
                <div className="xsl-text">
                  <span className="xsl-text number-count-l ">
                    {renderCountDownNumber(dataNumber[4]?.number)}
                  </span>
                  <span className="xsl-text">+</span>
                </div>
                <p className="m-text">{dataNumber[4]?.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Number;
