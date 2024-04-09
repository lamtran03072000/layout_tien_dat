import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const ShowDes = ({ des }) => {
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
      <button className="text-white font-extralight" onClick={showModal}>
        Xem chi tiết công việc <i className="fa-solid fa-angles-right"></i>
      </button>
      <Modal
        title="Chi tiết công việc"
        open={isModalOpen}
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {des}
      </Modal>
    </>
  );
};

export default ShowDes;
