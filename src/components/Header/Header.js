import React, { useEffect, useState } from 'react';
import HeaderSp from './HeaderSp';
import HeaderVeChungToi from './HeaderVeChungToi';
import HeaderSanPham from './HeaderSanPham';
import { NavLink } from 'react-router-dom';
import SvgLogo from './SvgLogo';
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
  const [isOnHeaderSp, setIsOnHeaderSP] = useState(false);
  const handleActiveHeader = (id) => {
    console.log('id: ', id);
    setActiveHeader(id);
  };

  const handleOpenHeader = (id) => {
    if (activeHeader === 2 || activeHeader === 1 || isOnHeaderSp) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    handleOpenHeader();
  }, [activeHeader]);

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
                isOpen ? 'color_text_content' : ''
              } cursor-pointer duration-500`}
            >
              <a
                onMouseEnter={() => {
                  handleActiveHeader(0);
                }}
                href={'/'}
                className=""
              >
                TRANG CHỦ
              </a>
              <a
                onMouseEnter={() => {
                  handleActiveHeader(1);
                }}
                href="/ve-chung-toi"
              >
                VỀ CHÚNG TÔI
              </a>
              <span
                onMouseEnter={() => {
                  handleActiveHeader(2);
                }}
                className=""
              >
                SẢN PHẨM
              </span>
              <span
                onMouseEnter={() => {
                  handleActiveHeader(3);
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
        <HeaderSp
          isOpen={isOpen}
          setIsOnHeaderSP={setIsOnHeaderSP}
          handleActiveHeader={handleActiveHeader}
        >
          {dataActiveHeader[activeHeader]?.children}
        </HeaderSp>
      </div>
    </div>
  );
}
