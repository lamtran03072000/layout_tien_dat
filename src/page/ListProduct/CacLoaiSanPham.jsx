import React from 'react';
import { useSelector } from 'react-redux';
import ImgFetch from '../../components/ImgFetch/ImgFetch';

const CacLoaiSanPham = () => {
  const { content, language } = useSelector((state) => state.contentPageSlice);

  const renderListLoaiSp = () => {
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
          className="w-1/3 lg:w-full flex flex-col items-center space-y-3 p-5"
        >
          <div className="bg-gray-300 h-[340px] lg:h-[309px] w-full">
            <ImgFetch imgId={ds.img} />
          </div>
          <p className="text-xl color_text_content font-bold lg:text-base">
            {ds[nameDssp]}
          </p>
          <div className="flex items-center justify-between space-x-6">
            {ds.sanPham.map((sp, index) => {
              return (
                <p key={index} className="text-[#818181] ">
                  {sp[nameSp]}
                </p>
              );
            })}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container_td section" id="dsspPageSp">
      <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center mb-12">
        Các loại sản phẩm
      </h3>
      <div className="flex justify-center items-center flex-wrap">
        {renderListLoaiSp()}
      </div>
    </div>
  );
};

export default CacLoaiSanPham;
