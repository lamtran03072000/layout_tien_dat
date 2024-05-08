import React from 'react';
import ShowDes from './ShowDes';
import parse from 'html-react-parser';

const CacViTriTuyenDung = ({ dataCacViTriTuyenDung }) => {
  const renderViTriTuyenDung = () => {
    return dataCacViTriTuyenDung?.cacViTri.map((d, i) => {
      return (
        <div key={i} className="h-[350px] lg:h-[180px] relative grid grid_td">
          <img
            src="./img/vitrituyendung.png"
            alt=""
            className="absolute w-full h-full top-0 left-0 -z-10 object-cover"
          />
          <div className="col-start-8 lg:col-start-3 col-end-13 lg:col-end-5 my-auto space-y-14 container_td">
            <div>
              <p className="text-white text-xl lg:text-base font-medium">
                {d.tenViTri}
              </p>
              <p className="text-white text-xl lg:text-xs font-extralight">
                Số Lượng : {d.soLuong} nhân công
              </p>
            </div>
            <div>
              <ShowDes des={d.chiTiet} />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className=" section ">
      <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center mb-12 lg:mb-3">
        {parse(`${dataCacViTriTuyenDung?.title}`)}
      </h3>
      <div className="space-y-10 lg:space-y-4">{renderViTriTuyenDung()}</div>;
    </div>
  );
};

export default CacViTriTuyenDung;
