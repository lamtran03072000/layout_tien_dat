import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import YouTubeVideo from '../../components/VideoYoutube/VideoYoutube';
import { Button, Modal } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';
import ImgFetch from '../../components/ImgFetch/ImgFetch';
const QuyTrinh = () => {
  const { content, language } = useSelector((state) => state.contentPageSlice);
  console.log('content: ', content);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  if (!content.pageSanPham?.quytrinh) return;
  return (
    <div className="container_td section lg:w-full">
      <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center mb-12">
        {content.pageSanPham.quytrinh.title}
      </h3>

      <div className="flex flex-wrap">
        <div className="w-1/2  aspect-video">
          <div className=" relative  w-full h-full">
            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-20 w-20 h-20 lg:w-10 lg:h-10 rounded-full bg-gray-100"
              onClick={() => {
                showModal();
                setActiveLink(content.pageSanPham.quytrinh.link1);
              }}
            >
              <PlayCircleFilled className="text-[#015A62] text-4xl lg:text-2xl  " />
            </button>

            <ImgFetch imgId={content.pageSanPham.quytrinh.img1} />
          </div>
          {/* <YouTubeVideo videoId={content.pageSanPham.quytrinh.link1} /> */}
        </div>
        <div className="w-1/2  aspect-video">
          <div className=" relative w-full h-full">
            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-20 w-20 h-20 lg:w-10 lg:h-10 rounded-full bg-gray-100"
              onClick={() => {
                showModal();
                setActiveLink(content.pageSanPham.quytrinh.link2);
              }}
            >
              <PlayCircleFilled className="text-[#015A62] text-4xl lg:text-2xl  " />
            </button>

            <ImgFetch imgId={content.pageSanPham.quytrinh.img2} />
          </div>
          {/* <YouTubeVideo videoId={content.pageSanPham.quytrinh.link1} /> */}
        </div>
        <div className="w-1/2  aspect-video">
          <div className=" relative w-full h-full">
            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-20 w-20 h-20 lg:w-10 lg:h-10 rounded-full bg-gray-100"
              onClick={() => {
                showModal();
                setActiveLink(content.pageSanPham.quytrinh.link3);
              }}
            >
              <PlayCircleFilled className="text-[#015A62] text-4xl lg:text-2xl  " />
            </button>

            <ImgFetch imgId={content.pageSanPham.quytrinh.img3} />
          </div>
          {/* <YouTubeVideo videoId={content.pageSanPham.quytrinh.link1} /> */}
        </div>
        <div className="w-1/2  aspect-video">
          <div className=" relative w-full h-full">
            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-20 w-20 h-20 lg:w-10 lg:h-10 rounded-full bg-gray-100"
              onClick={() => {
                showModal();
                setActiveLink(content.pageSanPham.quytrinh.link4);
              }}
            >
              <PlayCircleFilled className="text-[#015A62] text-4xl lg:text-2xl  " />
            </button>

            <ImgFetch imgId={content.pageSanPham.quytrinh.img4} />
          </div>
          {/* <YouTubeVideo videoId={content.pageSanPham.quytrinh.link1} /> */}
        </div>
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
            <YouTubeVideo isPlay={true} isMute={false} videoId={activeLink} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default QuyTrinh;
