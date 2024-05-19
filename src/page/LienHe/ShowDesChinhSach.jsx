import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
const ShowDesChinhSach = ({ children, data }) => {
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
    <>
      <button className="lg:text-xs color_text_content" onClick={showModal}>
        {children}
      </button>
      <Modal
        title={data?.title}
        open={isModalOpen}
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
        width={'75%'}
      >
        <div>{parse(`${data?.detail}`)}</div>
      </Modal>
    </>
  );
};

export default ShowDesChinhSach;
