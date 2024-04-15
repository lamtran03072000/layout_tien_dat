import React from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
const HeaderVeChungToi = () => {
  const { content } = useSelector((state) => state.contentPageSlice);

  return (
    <div className=" col-span-10 grid grid-cols-10 ">
      <div className="col-span-2 "></div>
      <div className={`col-span-8 pt-14`}>
        <div className=" flex justify-between color_text_content cursor-pointer">
          <span className=""></span>
          <div className="pl-12 space-y-8 font-semibold">
            <a href="/tuyen-dung"> {content?.headerPage?.titlePage['5']}</a>
            <p> {content?.headerPage?.titlePage['6']}</p>
          </div>
          <span className=""></span>
          <span className=""></span>
          <div className="flex space-x-3">
            <img className="flag opacity-0" />
            <img className="flag opacity-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderVeChungToi;
