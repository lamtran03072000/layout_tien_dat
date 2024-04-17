import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
const ShowDes = ({ des }) => {
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
        Xem chi tiết công việc <i className="fa-solid fa-angles-right"></i>
      </button>
      <Modal
        title="Chi tiết công việc"
        open={isModalOpen}
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
        width={'100%'}
      >
        <div className="space-y-9">
          {des}
          <button
            onClick={() => {
              window.location.href = '/lien-he';
            }}
            className="button_td text-xl !rounded-xl lg:text-base"
          >
            Liên hệ ngay
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ShowDes;
