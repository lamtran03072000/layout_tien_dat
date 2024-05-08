import React from 'react';
import { useFormik } from 'formik';
import { mailService } from '../../service/mailService';
import { message, notification } from 'antd';
import * as Yup from 'yup';
const FormLienHe = () => {
  const formLienHe = useFormik({
    initialValues: {
      hoTen: '',
      sdt: '',
      email: '',
      tieuDe: '',
      noiDung: '',
    },
    validationSchema: Yup.object({
      hoTen: Yup.string().required('Họ tên không được để trống'),
      sdt: Yup.string()
        .required('Số điện thoại không được để trống')
        .matches(/^[0-9]+$/, 'Số điện thoại chỉ bao gồm số')
        .min(10, 'Số điện thoại phải có ít nhất 10 chữ số')
        .max(11, 'Số điện thoại không quá 11 chữ số'),
      email: Yup.string()
        .email('Địa chỉ email không hợp lệ')
        .required('Email không được để trống'),
      tieuDe: Yup.string().required('Tiêu đề không được để trống'),
      noiDung: Yup.string().required('Nội dung không được để trống'),
    }),
    onSubmit: async (value, { resetForm }) => {
      try {
        await mailService.postFormLienHe(value);
        notification.success({
          message: `Send info success`,
          placement: 'top',
        });
        resetForm();
      } catch (error) {}
      console.log('value: ', value);
    },
  });
  return (
    <div className="container_td">
      <div className="grid_td section color_text_content">
        <div className="grid col-start-3 col-end-11 lg:col-start-1 lg:col-end-5">
          <h3 className="text-3xl lg:text-xl font-bold  mb-10">
            Gửi thông tin cho chúng tôi
          </h3>
          <form onSubmit={formLienHe.handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                className="p-5 border border-[#E5E5E5] w-full"
                placeholder="Họ tên"
                name="hoTen"
                value={formLienHe.values.hoTen}
                onChange={formLienHe.handleChange}
                onBlur={formLienHe.handleBlur} // Thêm vào đ
              />
              {formLienHe.errors.hoTen && formLienHe.touched.hoTen ? (
                <div className="text-red-500 text-sm">
                  {formLienHe.errors.hoTen}
                </div>
              ) : (
                <div className="text-sm h-5"></div>
              )}{' '}
              {/* Giữ khoảng trống */}
            </div>
            <div>
              <input
                type="text"
                className="p-5 border border-[#E5E5E5] w-full"
                placeholder="Điện Thoại"
                name="sdt"
                value={formLienHe.values.sdt}
                onChange={formLienHe.handleChange}
                onBlur={formLienHe.handleBlur} // Thêm vào đ
              />
              {formLienHe.errors.sdt && formLienHe.touched.sdt ? (
                <div className="text-red-500 text-sm">
                  {formLienHe.errors.sdt}
                </div>
              ) : (
                <div className="text-sm h-5"></div>
              )}{' '}
              {/* Giữ khoảng trống */}
            </div>
            <div>
              <input
                type="text"
                className="p-5 border border-[#E5E5E5] w-full"
                placeholder="Email"
                name="email"
                value={formLienHe.values.email}
                onChange={formLienHe.handleChange}
                onBlur={formLienHe.handleBlur} // Thêm vào đ
              />
              {formLienHe.errors.email && formLienHe.touched.email ? (
                <div className="text-red-500 text-sm">
                  {formLienHe.errors.email}
                </div>
              ) : (
                <div className="text-sm h-5"></div>
              )}{' '}
              {/* Giữ khoảng trống */}
            </div>
            <div>
              <input
                type="text"
                className="p-5 border border-[#E5E5E5] w-full"
                placeholder="Tiêu đề"
                name="tieuDe"
                value={formLienHe.values.tieuDe}
                onChange={formLienHe.handleChange}
                onBlur={formLienHe.handleBlur} // Thêm vào đ
              />
              {formLienHe.errors.tieuDe && formLienHe.touched.tieuDe ? (
                <div className="text-red-500 text-sm">
                  {formLienHe.errors.tieuDe}
                </div>
              ) : (
                <div className="text-sm h-5"></div>
              )}{' '}
              {/* Giữ khoảng trống */}
            </div>
            <div>
              <textarea
                placeholder="Nội dung"
                className="p-5 border border-[#E5E5E5] w-full"
                name="noiDung"
                value={formLienHe.values.noiDung}
                onChange={formLienHe.handleChange}
                onBlur={formLienHe.handleBlur} // Thêm vào đ
                cols="30"
                rows="10"
              ></textarea>
              {formLienHe.errors.noiDung && formLienHe.touched.noiDung ? (
                <div className="text-red-500 text-sm">
                  {formLienHe.errors.noiDung}
                </div>
              ) : (
                <div className="text-sm h-5"></div>
              )}{' '}
              {/* Giữ khoảng trống */}
            </div>
            <button
              type="submit"
              className="p-5 border border-[#E5E5E5] w-full"
            >
              Gửi thông tin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLienHe;
