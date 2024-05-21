import React from 'react';
import { useSelector } from 'react-redux';
import ImgFetch from '../ImgFetch/ImgFetch';

const btnXemTatCaSp = {
  vn: 'Xem tất cả sản phẩm',
  en: 'View all products',
};

const HeaderSanPhamMobile = () => {
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
          className="w-1/2 px-2 flex flex-col items-center space-y-1  mb-3"
        >
          <div
            style={{
              width: 141,
              height: 141,
            }}
          >
            <ImgFetch imgId={ds.img} />
          </div>
          <p className="text-base font-semibold color_text_content">
            {ds[nameDssp]}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {ds.sanPham.map((sp, index) => {
              const isOdd = ds.sanPham.length % 2 !== 0;
              const lastItemIndex = ds.sanPham.length - 1;
              return (
                <div
                  key={index}
                  className={`text-xs text-[#818181] ${
                    isOdd && index === lastItemIndex
                      ? 'col-span-2 text-center'
                      : ''
                  }`}
                >
                  <a href={`/detail/${sp.id}?language=${language}`}>
                    {sp[nameSp]}
                  </a>
                </div>
              );
              // <div className="w-1/2 text-center">
              //   <a href={'/detail'} className="text-xs" key={index}>
              //     {sp.name}
              //   </a>
              // </div>;
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <button className="hidden button_td lg:block lg:text-base font-bold w-3/4 mx-auto mb-4">
        <a href={`/list-product?language=${language}`}>
          {btnXemTatCaSp[language]}
        </a>
      </button>
      <div className="flex flex-wrap items-start">{renderListSP()}</div>
    </div>
  );
};

export default HeaderSanPhamMobile;
