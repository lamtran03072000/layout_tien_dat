import React from 'react';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
let langueDinamicKey = {
  en: 'En',
  vn: 'Vn',
};
const MotaSp = ({ dataSp }) => {
  const { content, language } = useSelector((state) => state.contentPageSlice);
  const desSp = 'des' + langueDinamicKey[language];

  return (
    <div className="bg-[#F7F7F7]">
      <div className=" section container_td">
        <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center mb-12 lg:mb-3">
          Mô tả sản phẩm
        </h3>
        <div className="grid_td">
          <div className="col-start-3 col-end-11 lg:col-start-1 lg:col-end-5 space-y-5 lg:space-y-3 color_text_content font-light">
            {parse(`${dataSp[desSp]}`)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotaSp;
