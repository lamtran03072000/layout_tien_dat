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
          className="flex flex-col items-center space-y-3 w-1/4 group  mb-10"
        >
          <div className="w-[141px] h-[141px]">
            <ImgFetch imgId={ds.img} />
          </div>
          <p className="font-semibold">{ds[nameDssp]}</p>
          <div className="flex space-x-3 flex-col   max-h-0 group-hover:max-h-[200px] opacity-0 group-hover:opacity-100 overflow-hidden duration-1000  justify-center items-center">
            {ds.sanPham.map((sp, index) => (
              <a
                href={`/detail/${sp.id}?language=${language}`}
                className=""
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
    <div className="col-span-10 flex  flex-wrap  pt-14  items-start">
      {renderListSP()}
    </div>
  );
};

export default HeaderSanPham;
