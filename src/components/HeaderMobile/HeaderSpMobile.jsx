import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CloseOutlined, LeftOutlined } from '@ant-design/icons';
import {
  setActiveHeaderMobileAction,
  setIsOpenHeaderSpMobileAction,
} from '../../store/Animation/animationSlice';

const HeaderSpMobile = ({ children }) => {
  const dispatch = useDispatch();

  const { isOpenHeaderSpMb, activeHeaderMobile } = useSelector(
    (state) => state.animationSlice,
  );
  const contentRef = useRef(null);

  const handleCloseHeader = () => {
    dispatch(setIsOpenHeaderSpMobileAction(false));
  };
  const handleBackMainHeader = () => {
    dispatch(setActiveHeaderMobileAction(0));
  };
  return (
    <div
      style={{
        maxHeight: isOpenHeaderSpMb ? '100%' : '0%',
      }}
      ref={contentRef}
      className="fixed w-full h-full  z-50 duration-200 bg-white overflow-hidden overflow-y-scroll"
    >
      <div className="py-5 container_td flex justify-between color_text_content">
        {activeHeaderMobile ? (
          <LeftOutlined
            style={{ fontSize: '20px' }}
            onClick={handleBackMainHeader}
            className="font-bold"
          />
        ) : (
          <span></span>
        )}
        <img
          className="w-[70px] h-[78px]"
          src="/./img/footer_logo.png"
          alt=""
        />

        <CloseOutlined
          onClick={handleCloseHeader}
          style={{ fontSize: '20px' }}
        />
      </div>
      <div className="py-6">{children}</div>
    </div>
  );
};

export default HeaderSpMobile;
