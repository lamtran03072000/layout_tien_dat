import React from 'react';
import parse from 'html-react-parser';
import { NavLink } from 'react-router-dom';

const LoiMoDau = ({ dataLoiMoDau }) => {
  return (
    <div className="container_td section">
      <div className="grid_td">
        <div className="col-start-1 col-end-7 space-y-8 my-auto">
          {parse(`${dataLoiMoDau?.title}`)}
          <div className="color_text_content  space-y-8">
            {parse(`${dataLoiMoDau?.content}`)}
          </div>
          <div>
            <a href={'/ve-chung-toi'} className="button_td text-xl">
              {parse(`${dataLoiMoDau?.button}`)}
            </a>
          </div>
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
