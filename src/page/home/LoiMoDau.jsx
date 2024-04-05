import React from 'react';

const LoiMoDau = () => {
  return (
    <div className="container_td section">
      <div className="grid_td">
        <div className="col-start-1 col-end-7 space-y-8 my-auto">
          <h3 className="font-bold text-3xl color_text_content">Lời mở đầu</h3>
          <div className="color_text_content  space-y-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsuspendisse ultrices gravida.
            </p>
            <p>
              Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsuspendisse ultrices gravida.
            </p>
          </div>
          <button className="button_td">Chúng tôi là ai ?</button>
        </div>
        <div className="col-start-8 col-end-13  rounded-3xl overflow-hidden">
          <img
            src="./img/loimodau.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LoiMoDau;
