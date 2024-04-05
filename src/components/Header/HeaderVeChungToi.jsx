import React from 'react';

const HeaderVeChungToi = () => {
  return (
    <>
      <div className="col-span-2"></div>
      <div className={`col-span-8 pt-14`}>
        <div className=" flex justify-between color_text_content cursor-pointer">
          <span className=""></span>
          <div className="pl-12 space-y-8 font-semibold">
            <p>TUYỂN DỤNG</p>
            <p>MÔI TRƯỜNG</p>
          </div>
          <span className=""></span>
          <span className=""></span>
          <div className="flex space-x-3">
            <img className="flag opacity-0" />
            <img className="flag opacity-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderVeChungToi;
