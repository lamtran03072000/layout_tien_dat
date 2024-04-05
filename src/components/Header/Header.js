import React, { useState } from 'react';
import HeaderSp from './HeaderSp';
import HeaderVeChungToi from './HeaderVeChungToi';
import HeaderSanPham from './HeaderSanPham';

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
  const [activeHeader, setActiveHeader] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const handleActiveHeader = (id) => {
    if (id != activeHeader) {
      setIsOpen(false);
    }
    setIsOpen(!isOpen);

    setActiveHeader(id);
  };
  //
  return (
    <div>
      <div className="container_td header_td grid_td  absolute left-1/2 -translate-x-1/2 z-30">
        <div className="col-span-2">
          <svg
            className={`${isOpen ? 'opacity-0' : ''} duration-500`}
            width={177}
            height={193}
            viewBox="0 0 177 193"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_634_240)">
              <path
                d="M88.5 193L0 144.798V48.2024L88.5 0L177 48.2024V144.798L88.5 193ZM3.87198 142.494L88.5 188.583L173.128 142.494V50.4977L88.5 4.4084L3.87198 50.4977V142.494Z"
                fill="white"
              />
              <path
                d="M163.005 69.4325L161.024 71.8439L151.505 64.0381H90.0593V170.337H86.9419V64.0381H25.496L15.9777 71.8439L13.9961 69.4325L24.3766 60.9141H152.625L163.005 69.4325Z"
                fill="white"
              />
              <path
                d="M153.205 69.5807L153.197 72.6384V72.6467L153.172 72.6965L103.002 170.336L100.83 170.344H99.6112V106.621L74.1241 106.679V106.654H72.5654L72.5571 72.5639L24.7336 72.5224L81.1882 170.336H77.5816L21.127 72.5224L21.1352 69.3984L72.5571 69.4399V69.4233H75.6829V103.555L102.704 103.497V105.055H102.729V164.046L149.673 72.6799L101.17 72.5224L101.178 69.3984L153.205 69.5807Z"
                fill="white"
              />
              <path
                d="M153.197 72.6465V72.6967H153.172L153.197 72.6465Z"
                fill="white"
              />
              <path
                d="M33.7778 46.4539V41.5566H38.5038C41.9529 41.5566 44.2247 43.8354 44.2247 47.3489C44.2247 50.8623 42.0192 53.4311 38.3794 53.4311H33.7778V48.2107H32.4844V46.4539H33.7778ZM36.3398 46.4539H38.8603V48.2107H36.3398V51.3678H38.2716C40.5434 51.3678 41.5632 49.6608 41.5632 47.3489C41.5632 45.4016 40.618 43.6283 38.2882 43.6283H36.3398V46.4539Z"
                fill="white"
              />
              <path
                d="M48.6679 50.6883L47.7558 53.4311H45.2188L49.2566 41.5566H52.4818L56.7103 53.4311H53.9991L53.0125 50.6883H48.6679ZM52.4652 48.5918C51.6195 46.0728 51.0889 44.4735 50.7904 43.4045H50.7738C50.4836 44.5729 49.895 46.4374 49.2234 48.5918H52.4652ZM49.6877 56.8783V54.4669H52.2414V56.8783H49.6877Z"
                fill="white"
              />
              <path
                d="M60.8808 41.5566V53.4311H58.3105V41.5566H60.8808Z"
                fill="white"
              />
              <path
                d="M70.258 43.6614H66.6348V41.5566H76.4266V43.6614H72.82V53.4311H70.2497V43.6614H70.258Z"
                fill="white"
              />
              <path
                d="M80.5898 41.5566V53.4311H78.0195V41.5566H80.5898Z"
                fill="white"
              />
              <path
                d="M91.6014 48.3097H85.9136V51.3259H92.19L91.8833 53.4307H83.418V41.5562H91.8501V43.661H85.9136V46.1966H91.6014V48.318V48.3097ZM88.8321 38.2831L91.1039 40.537H88.6414L87.6382 39.468L86.6681 40.537H84.1725L86.3282 38.2831H88.8321ZM94.5696 36.7832L92.0822 38.888H90.1504L91.8584 36.7832H94.5613H94.5696Z"
                fill="white"
              />
              <path
                d="M94.0703 53.4311V41.5566H97.2624C98.7465 44.2083 101.491 49.0393 102.038 50.332H102.071C101.93 49.089 101.93 47.0257 101.93 45.0784V41.5649H104.26V53.4394H101.242C99.9653 51.1109 96.9308 45.6004 96.3255 44.2166H96.2923C96.3753 45.2524 96.4167 47.6969 96.4167 49.8182V53.4394H94.0703V53.4311Z"
                fill="white"
              />
              <path
                d="M111.434 46.4539V41.5566H116.16C119.609 41.5566 121.889 43.8354 121.889 47.3489C121.889 50.8623 119.683 53.4311 116.043 53.4311H111.442V48.2107H110.148V46.4539H111.442H111.434ZM114.004 46.4539H116.524V48.2107H114.004V51.3678H115.936C118.216 51.3678 119.227 49.6608 119.227 47.3489C119.227 45.4016 118.282 43.6283 115.952 43.6283H114.004V46.4539Z"
                fill="white"
              />
              <path
                d="M126.332 50.6883L125.42 53.4311H122.883L126.921 41.5566H130.146L134.374 53.4311H131.663L130.677 50.6883H126.332ZM130.121 48.5918C129.275 46.0728 128.745 44.4735 128.446 43.4045H128.43C128.139 44.5729 127.551 46.4374 126.879 48.5918H130.121ZM127.343 56.8783V54.4669H129.897V56.8783H127.343Z"
                fill="white"
              />
              <path
                d="M138.346 43.6614H134.723V41.5566H144.515V43.6614H140.908V53.4311H138.338V43.6614H138.346Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_634_240">
                <rect width={177} height={193} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        {/* note */}
        <div className="col-span-2"></div>
        <div
          className={`col-span-8 flex justify-between text-white font-semibold  ${
            isOpen ? 'color_text_content' : ''
          } cursor-pointer duration-500`}
        >
          <span className="">TRANG CHỦ</span>
          <span
            className=""
            onClick={() => {
              handleActiveHeader(1);
            }}
          >
            VỀ CHÚNG TÔI
          </span>
          <span
            onClick={() => {
              handleActiveHeader(2);
            }}
            className=""
          >
            SẢN PHẨM
          </span>
          <span className="">LIÊN HỆ</span>
          <div className="flex space-x-3">
            <img className="flag" src="./img/flag_vn.png" alt="" />
            <img className="flag" src="./img/flag_en.png" alt="" />
          </div>
        </div>
      </div>
      <HeaderSp isOpen={isOpen}>
        {dataActiveHeader[activeHeader]?.children}
      </HeaderSp>
    </div>
  );
}
