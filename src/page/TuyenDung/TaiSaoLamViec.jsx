import React from 'react';
import parse from 'html-react-parser';

const TaiSaoLamViec = ({ dataTaiSaoLamViec }) => {
  return (
    <div>
      <div className=" section container_td" id="tslvTd">
        <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center mb-12 lg:mb-3">
          {parse(`${dataTaiSaoLamViec?.title}`)}
        </h3>
        <div className="grid_td">
          <div className="col-start-2 col-end-12 lg:col-start-1 lg:col-end-5 space-y-5 color_text_content font-light">
            <p className="text-pretty">
              {parse(`${dataTaiSaoLamViec?.content}`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaiSaoLamViec;
