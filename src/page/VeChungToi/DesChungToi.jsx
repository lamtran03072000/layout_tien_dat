import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import ImgFetch from '../../components/ImgFetch/ImgFetch';
import { Button, Modal } from 'antd';
import YouTubeVideo from '../../components/VideoYoutube/VideoYoutube';
import { PlayCircleFilled } from '@ant-design/icons';
const DesChungToi = () => {
  const { content } = useSelector((state) => state.contentPageSlice);

  const dataAbout = content.about;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="">
      <div className=" section container_td">
        <div className="flex flex-wrap lg:space-y-8">
          <div className="w-2/5 my-auto lg:w-full ">
            <h3 className="text-3xl color_text_content font-bold  mb-12 lg:text-xl lg:mb-8">
              {dataAbout?.des.title}
            </h3>
            <p className="text-pretty">
              <p>{parse(`${dataAbout?.des.des}`)}</p>
            </p>
          </div>
          <div className="w-3/5 lg:w-full aspect-video">
            <div className="border relative w-full h-full">
              <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-20 w-20 h-20 rounded-full bg-gray-100"
                onClick={showModal}
              >
                <PlayCircleFilled className="text-[#015A62] text-4xl  " />
              </button>

              <ImgFetch imgId={dataAbout?.des.img} />
            </div>
          </div>
        </div>
        {/* <div className="grid_td">
          <div className="col-start-4 lg:col-start-1 col-end-10 lg:col-end-5 space-y-5 color_text_content ">
            <div className="relative">
              <i className="fa-solid fa-quote-left text-4xl text-red-800 absolute -top-2 -left-12 lg:left-0 lg:text-xl"></i>
              <p className="lg:px-6 text-pretty">
                <p className="lg:px-6">{parse(`${dataAbout?.des}`)}</p>
              </p>
            </div>
          </div>
        </div> */}
      </div>
      {isModalOpen && (
        <Modal
          modalRender={(modal) => {
            return React.cloneElement(modal, {
              style: {
                ...modal.props.style,
                ...{ borderRadius: 0, padding: 0 },
              },
            });
          }}
          footer={false}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={'80%'}
        >
          <div className="h-[600px] lg:h-[200px]">
            <YouTubeVideo
              isPlay={true}
              isMute={false}
              videoId={dataAbout?.des.linkYoutube}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DesChungToi;
