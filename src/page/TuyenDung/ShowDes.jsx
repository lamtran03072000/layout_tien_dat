import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

const buttonXemChiTiet = {
  vn: 'Xem chi tiết công việc',
  en: 'View job details',
};

const button = {
  vn: 'Liên hệ ngay',
  en: 'contact now',
};

const title = {
  en: 'Detail job',
  vn: 'Chi tiết công việc',
};

const ShowDes = ({ des }) => {
  const { content, language } = useSelector((state) => state.contentPageSlice);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
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
    <>
      <button
        className="text-white font-extralight lg:text-xs"
        onClick={showModal}
      >
        {buttonXemChiTiet[language]}{' '}
        <i className="fa-solid fa-angles-right"></i>
      </button>
      <Modal
        title={title[language]}
        open={isModalOpen}
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
        width={'75%'}
      >
        <div className="space-y-9 ">
          {parse(`${des}`)}
          <div className="flex justify-center">
            <button
              onClick={() => {
                window.location.href = '/lien-he';
              }}
              className="button_td text-xl !rounded-xl lg:text-base"
            >
              {button[language]}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ShowDes;
