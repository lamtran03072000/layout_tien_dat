import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ImgFetch from '../ImgFetch/ImgFetch';

const HeaderSanPham = () => {
  const { content, language } = useSelector((state) => state.contentPageSlice);

  const renderListSP = () => {
    let langueDinamicKey = {
      en: 'En',
      vn: 'Vn',
    };

    let nameSp = 'name' + langueDinamicKey[language];
    let nameDssp = 'name' + langueDinamicKey[language];

    return content.dssp.map((ds, index) => {
      return (
        <div
          key={index}
          className="flex flex-col items-center space-y-3 w-1/4 "
        >
          <div className="w-[141px] h-[141px]">
            <ImgFetch imgId={ds.img} />
          </div>
          <p>{ds[nameDssp]}</p>
          <div className="flex space-x-3">
            {ds.sanPham.map((sp, index) => (
              <a
                href={`/detail/${sp.id}?language=${language}`}
                className="whitespace-nowrap"
                key={index}
              >
                {sp[nameSp]}
              </a>
            ))}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="col-span-10 flex justify-center flex-wrap  pt-14 space-y-3 items-end">
      {renderListSP()}
    </div>
  );
};

export default HeaderSanPham;
