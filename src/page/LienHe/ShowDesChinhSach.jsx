import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
const ShowDesChinhSach = ({ children }) => {
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
        title="Chính sách"
        open={isModalOpen}
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
        width={'75%'}
      >
        <div className="space-y-9 flex flex-col items-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
          blanditiis quas! Sunt ducimus temporibus aspernatur tempora voluptas
          vero eius unde hic veritatis dolorem! Placeat voluptatem beatae
          consectetur voluptas itaque, soluta et nihil dolorum ut architecto
          temporibus harum? Tenetur possimus molestias atque harum sequi labore
          iusto ducimus reprehenderit, eligendi aperiam numquam!
        </div>
      </Modal>
    </>
  );
};

export default ShowDesChinhSach;
