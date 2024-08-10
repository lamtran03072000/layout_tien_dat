import React from 'react';
import { useSelector } from 'react-redux';

import { NavLink, useSearchParams } from 'react-router-dom';
const pl = {
  vn: '',
  en: 'pr-20',
};
const HeaderVeChungToi = () => {
  const { content, language } = useSelector((state) => state.contentPageSlice);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className=" col-span-10 grid grid-cols-10 ">
      <div className="col-span-2 "></div>
      <div className={`col-span-8 pt-14 `}>
        <div className=" flex justify-between color_text_content cursor-pointer">
          <span className="flex-1"></span>
          <div
            className={`${
              searchParams.get('language')
                ? pl[searchParams.get('language')]
                : 'pl-1'
            } space-y-8 font-semibold flex-1`}
          >
            <a href={`/tuyen-dung?language=${language}`}>
              {content?.headerPage?.titlePage['5']}
            </a>
            <p> {content?.headerPage?.titlePage['6']}</p>
          </div>
          <span className="flex-1"></span>
          <span className="flex-1"></span>
          <div className="flex flex-1 space-x-3">
            <img className="flag opacity-0" />
            <img className="flag opacity-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderVeChungToi;
