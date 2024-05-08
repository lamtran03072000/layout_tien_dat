import React, { useState, useEffect } from 'react';
import style from './buttonToTop.module.css';
import { UpOutlined } from '@ant-design/icons';
const BtnToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={`${style['top-to-btm']}`}>
      {showTopBtn && (
        <div
          className={`${style['icon-position']} ${style['icon-style']} flex items-center justify-center right-12 lg:right-3 bottom-32`}
          onClick={goToTop}
        >
          <UpOutlined />
        </div>
      )}
    </div>
  );
};

export default BtnToTop;
