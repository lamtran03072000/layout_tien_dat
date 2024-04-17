import React, { useEffect, useState } from 'react';
import HeaderSp from './HeaderSp';
import HeaderVeChungToi from './HeaderVeChungToi';
import HeaderSanPham from './HeaderSanPham';
import { NavLink, useSearchParams } from 'react-router-dom';
import SvgLogo from './SvgLogo';
import { useDispatch } from 'react-redux';
import {
  setActiveHeaderAction,
  setIsOpenHeaderSpAction,
} from '../../store/Animation/animationSlice';
import { useSelector } from 'react-redux';
import { getContentPageThunk } from '../../store/contentPage/contentPageThunk';
const dataActiveHeader = [
  {
    id: 0,
    children: '',
  },
  {
    id: 1,
    children: <HeaderVeChungToi />,
  },
  {
    id: 2,
    children: <HeaderSanPham />,
  },
  {
    id: 3,
    children: '',
  },
];
export default function Header() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { content } = useSelector((state) => state.contentPageSlice);

  const { isOpenHeaderSp, activeHeader, isOnHeaderSp } = useSelector(
    (state) => state.animationSlice,
  );

  const handleOpenHeader = () => {
    if (activeHeader === 2 || activeHeader === 1 || isOnHeaderSp) {
      dispatch(setIsOpenHeaderSpAction(true));
    } else {
      dispatch(setIsOpenHeaderSpAction(false));
    }
  };
  const handleSwitchLanguage = (lg) => {
    setSearchParams({ language: lg });
    dispatch(getContentPageThunk(lg));
  };
  useEffect(() => {
    handleOpenHeader();
  }, [activeHeader, isOnHeaderSp]);
  useEffect(() => {
    const language = searchParams.get('language');
    if (language) {
      dispatch(getContentPageThunk(language));
    }
  }, []);
  console.log('isOpenHeaderSp: ', isOpenHeaderSp);
  return (
    <div className="absolute w-full z-10">
      <div className="container_td header_td grid_td ">
        <div className="col-span-2">
          <NavLink to={'/'}>
            <SvgLogo w={177} h={193} />
          </NavLink>
        </div>
        <div className="col-start-5 col-span-8 relative  mb-auto">
          <div className="absolute w-full h-full z-50">
            <div
              className={`w-full  flex justify-between    font-semibold  ${
                isOpenHeaderSp ? 'color_text_content' : 'text-white'
              } cursor-pointer duration-500`}
            >
              <NavLink
                onMouseEnter={() => {
                  dispatch(setActiveHeaderAction(0));
                }}
                to={'/'}
                className="flex-1"
              >
                {content?.headerPage?.titlePage['1']}
              </NavLink>
              <NavLink
                className="flex-1"
                onMouseEnter={() => {
                  dispatch(setActiveHeaderAction(1));
                }}
                to="/ve-chung-toi"
              >
                {content?.headerPage?.titlePage['2']}
              </NavLink>
              <NavLink
                className="flex-1"
                to="/list-product"
                onMouseEnter={() => {
                  dispatch(setActiveHeaderAction(2));
                }}
              >
                {content?.headerPage?.titlePage['3']}
              </NavLink>
              <NavLink
                to={'/lien-he'}
                onMouseEnter={() => {
                  dispatch(setActiveHeaderAction(3));
                }}
                className="flex-1"
              >
                {content?.headerPage?.titlePage['4']}
              </NavLink>
              <div className="flex space-x-3">
                <div
                  onClick={() => {
                    handleSwitchLanguage('en');
                  }}
                >
                  <img className="flag" src="./img/flag_vn.png" alt="" />
                </div>
                <div
                  onClick={() => {
                    handleSwitchLanguage('vn');
                  }}
                >
                  <img className="flag" src="./img/flag_en.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <HeaderSp>{dataActiveHeader[activeHeader]?.children}</HeaderSp>
      </div>
    </div>
  );
}
