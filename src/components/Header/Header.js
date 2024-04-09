import React, { useEffect, useState } from 'react';
import HeaderSp from './HeaderSp';
import HeaderVeChungToi from './HeaderVeChungToi';
import HeaderSanPham from './HeaderSanPham';
import { NavLink } from 'react-router-dom';
import SvgLogo from './SvgLogo';
import { useDispatch } from 'react-redux';
import {
  setActiveHeaderAction,
  setIsOpenHeaderSpAction,
} from '../../store/Animation/animationSlice';
import { useSelector } from 'react-redux';
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
  useEffect(() => {
    handleOpenHeader();
  }, [activeHeader, isOnHeaderSp]);

  return (
    <div className="absolute w-full z-10">
      <div className="container_td header_td grid_td ">
        <div className="col-span-2">
          <SvgLogo />
        </div>
        <div className="col-start-5 col-span-8 relative  mb-auto">
          <div className="absolute w-full h-full z-50">
            <div
              className={`w-full  flex justify-between text-white   font-semibold  ${
                isOpenHeaderSp ? 'color_text_content' : ''
              } cursor-pointer duration-500`}
            >
              <NavLink
                onMouseEnter={() => {
                  dispatch(setActiveHeaderAction(0));
                }}
                to={'/'}
                className=""
              >
                TRANG CHỦ
              </NavLink>
              <NavLink
                onMouseEnter={() => {
                  dispatch(setActiveHeaderAction(1));
                }}
                to="/ve-chung-toi"
              >
                VỀ CHÚNG TÔI
              </NavLink>
              <NavLink
                to="/list-product"
                onMouseEnter={() => {
                  dispatch(setActiveHeaderAction(2));
                }}
                className=""
              >
                SẢN PHẨM
              </NavLink>
              <span
                onMouseEnter={() => {
                  dispatch(setActiveHeaderAction(3));
                }}
                className=""
              >
                LIÊN HỆ
              </span>
              <div className="flex space-x-3">
                <img className="flag" src="./img/flag_vn.png" alt="" />
                <img className="flag" src="./img/flag_en.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <HeaderSp>{dataActiveHeader[activeHeader]?.children}</HeaderSp>
      </div>
    </div>
  );
}
