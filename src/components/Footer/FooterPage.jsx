import React from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
const FooterPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigateScrool = (url, idSection) => {
    const language = searchParams.get('language') || 'vn';
    navigate(`${url}?language=${language}&sectionId=${idSection}`);
  };
  return (
    <div className="section pb-0">
      <div className="border-t shadow">
        <div className="container_td py-12 border-b border-[#585858]">
          <div className="grid_td color_text_content">
            <div className="col-start-1 col-end-3">
              <img src="./img/footer_logo.png" alt="" />
            </div>
            <div className="col-start-4 col-end-13 flex justify-between  font-light ">
              <div className=" space-y-2 flex-1">
                <p className="font-bold">Trang chủ</p>
                <p>Lời mở đầu</p>
                <p>Sản phẩm chúng tôi cung cấp</p>
                <p>Lĩnh vực ứng dụng</p>
                <p>Thư viện hình ảnh</p>
              </div>

              <div className=" space-y-2 flex-1">
                <p className="font-bold">Về chúng tôi</p>
                <p>Giá trị cốt lõi</p>
                <p>Thư viện hình ảnh</p>
              </div>

              <div className=" space-y-2 mr-9">
                <p className="font-bold">Sản phẩm</p>
                <p>PE Foam</p>
                <p>Ống gen</p>
                <p>Ống giấy</p>
                <p>Xốp khí</p>
                <p>Băng keo</p>
                <p>Màng CO</p>
                <p>Xốp EPS</p>
              </div>

              <div className=" space-y-2 flex-1">
                <p className="font-bold">Hỗ trợ khách hàng</p>
                <p>Thông tin</p>
                <p>Chính sách</p>
                <p>Form liên hệ</p>
              </div>

              <div className=" space-y-2 flex-1">
                <p className="font-bold">Tuyển Dụng </p>
                <p>Tại sao làm việc tại Đại Tiến Đạt</p>
                <p>Giá trị tại Đại Tiến Đạt</p>
                <p>Các vị trí tuyển dụng</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container_td">
          <div className="flex justify-between items-center color_text_content py-3 ">
            <p>© 2024 bởi Công ty TNHH MTV Đại Tiến Đạt</p>
            <div className="text-3xl space-x-3 font-bold">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-square-youtube"></i>
              <i className="fa-brands fa-square-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;

{
  /* <p
onClick={() => {
  navigateScrool('/ve-chung-toi', 'giaTriCotLoi');
}}
>
Giá trị cốt lõi
</p>
<p
onClick={() => {
  navigateScrool('/', 'linhVucUngDung');
}}
>
Lĩnh vực ứng dụng
</p>
<p
onClick={() => {
  navigateScrool('/ve-chung-toi', 'tuLieuHinhAnhAbout');
}}
>
Tư liệu hình ảnh
</p> */
}
