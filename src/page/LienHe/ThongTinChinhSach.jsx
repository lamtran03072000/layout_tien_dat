import React from 'react';
import ShowDesChinhSach from './ShowDesChinhSach';
import { useSelector } from 'react-redux';

const titleLg = {
  vn: 'Thông Tin Chính Sách',
  en: 'Policy Information',
};

const ThongTinChinhSach = () => {
  const { content, language } = useSelector((state) => state.contentPageSlice);

  const dataLienHe = content.lienHe;
  return (
    <div className="container_td">
      <div className="grid_td section color_text_content" id="chinhSachLienHe">
        <div className="grid col-start-3 col-end-11 lg:col-start-1 lg:col-end-5">
          <h3 className="text-3xl color_text_content font-bold mb-12 lg:text-xl">
            {titleLg[language]}
          </h3>

          <div className="flex justify-between  color_text_content items-end">
            <ShowDesChinhSach data={dataLienHe?.chinhSachThanhToan[0]}>
              <div className="flex flex-col justify-center items-center space-y-3 ">
                <div className="w-[99px] h-[81px] lg:w-[60px] lg:h-[50px] ">
                  <img
                    src="./img/lien-he/2.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <p className="w-3/4 text-center">
                  {dataLienHe?.chinhSachThanhToan[0].title}
                </p>
              </div>
            </ShowDesChinhSach>
            <ShowDesChinhSach data={dataLienHe?.chinhSachThanhToan[1]}>
              <div className="flex flex-col justify-center items-center space-y-3 ">
                <div className="w-[123px] h-[66px] lg:w-[80px] lg:h-[40px]">
                  <img
                    src="./img/lien-he/1.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <p className="w-3/4 text-center">
                  {' '}
                  {dataLienHe?.chinhSachThanhToan[1].title}
                </p>
              </div>
            </ShowDesChinhSach>
            <ShowDesChinhSach data={dataLienHe?.chinhSachThanhToan[2]}>
              <div className="flex flex-col justify-center items-center space-y-3 ">
                <div className="w-[81px] h-[81px]  lg:w-[50px] lg:h-[50px]">
                  <img
                    src="./img/lien-he/3.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <p className="w-3/4 text-center">
                  {dataLienHe?.chinhSachThanhToan[2].title}
                </p>
              </div>
            </ShowDesChinhSach>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThongTinChinhSach;
