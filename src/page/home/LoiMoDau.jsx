import React from 'react';
import parse from 'html-react-parser';
import { NavLink } from 'react-router-dom';
import ImgFetch from '../../components/ImgFetch/ImgFetch';

const LoiMoDau = ({ dataLoiMoDau }) => {
  return (
    <div className="container_td section" id="loiMoDau">
      <div className="grid_td grid lg:space-y-6">
        <div className="col-start-1 col-end-7 lg:col-start-1 lg:col-end-5 space-y-8 lg:space-y-5 my-auto">
          <h3 className="font-bold text-3xl lg:text-xl color_text_content">
            {parse(`${dataLoiMoDau?.title}`)}
          </h3>

          <div className="color_text_content  space-y-8 lg:space-y-5">
            {parse(`${dataLoiMoDau?.content}`)}
          </div>
          <div>
            <a
              href={'/ve-chung-toi'}
              className="button_td text-xl inline-block lg:w-full lg:text-base"
            >
              {parse(`${dataLoiMoDau?.button}`)}
            </a>
          </div>
        </div>
        <div className="col-start-8  col-end-13 lg:col-start-1 lg:col-end-5  rounded-3xl overflow-hidden lg:w-[100%] lg:h-[327px]">
          <ImgFetch imgId={dataLoiMoDau?.img} />
        </div>
      </div>
    </div>
  );
};

export default LoiMoDau;
