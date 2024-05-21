import React from 'react';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';

const DesChungToi = () => {
  const { content } = useSelector((state) => state.contentPageSlice);

  const dataAbout = content.about;

  return (
    <div className="">
      <div className=" section container_td">
        <div className="grid_td">
          <div className="col-start-4 lg:col-start-1 col-end-10 lg:col-end-5 space-y-5 color_text_content ">
            <div className="relative">
              <i className="fa-solid fa-quote-left text-4xl text-red-800 absolute -top-2 -left-12 lg:left-0 lg:text-xl"></i>
              <p className="lg:px-6 text-pretty">
                <p className="lg:px-6">{parse(`${dataAbout?.des}`)}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesChungToi;
