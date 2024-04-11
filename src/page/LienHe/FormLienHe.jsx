import React from 'react';

const FormLienHe = () => {
  return (
    <div>
      <div className="grid_td section color_text_content">
        <div className="grid col-start-3 col-end-11">
          <h3 className="text-3xl  font-bold  mb-10">
            Gửi thông tin cho chúng tôi
          </h3>
          <div className="space-y-5">
            <input
              type="text"
              className="p-5 border border-[#E5E5E5] w-full"
              placeholder="Họ tên"
            />
            <input
              type="text"
              className="p-5 border border-[#E5E5E5] w-full"
              placeholder="Điện Thoại"
            />
            <input
              type="text"
              className="p-5 border border-[#E5E5E5] w-full"
              placeholder="Email"
            />
            <input
              type="text"
              className="p-5 border border-[#E5E5E5] w-full"
              placeholder="Họ tên"
            />
            <input
              type="text"
              className="p-5 border border-[#E5E5E5] w-full"
              placeholder="Tiêu đề"
            />
            <textarea
              placeholder="Nội dung"
              className="p-5 border border-[#E5E5E5] w-full"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="p-5 border border-[#E5E5E5] w-full">
              Gửi thông tin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLienHe;
