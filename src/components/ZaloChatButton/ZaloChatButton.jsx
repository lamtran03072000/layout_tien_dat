import React from 'react';
import style from './Zalo.module.css';
import { useSelector } from 'react-redux';

const ZaloChatButton = () => {
  const { content, language } = useSelector((state) => state.contentPageSlice);

  return (
    <div className="fixed bottom-24 right-20 lg:bottom-24 lg:right-10 z-30">
      <div className="relative ">
        <div
          className={`${style['bell-border']} absolute left-1/2 top-1/2   -translate-x-1/2 -translate-y-1/2 rounded-2xl w-14 h-14 lg:w-12 lg:h-12`}
        ></div>
        <a
          target="_blank"
          // href="https://zalo.me/0328383533"
          href={`https://zalo.me/${content?.dataThongTinThem?.sdt}`}
          className={`overflow-hidden absolute left-1/2 top-1/2 -translate-x-1/2   rounded-2xl border-blue-400 border w-14 h-14 lg:w-12 lg:h-12`}
        >
          <img
            src="/./img/zalo.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    </div>
  );
};

export default ZaloChatButton;
