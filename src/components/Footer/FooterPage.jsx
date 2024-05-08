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
            <div className="col-start-6 col-end-13 flex justify-between">
              <div className=" space-y-2 flex flex-col">
                <NavLink to="/">Trang chủ</NavLink>
                <NavLink to="/list-product">Sản phẩm</NavLink>
                <p
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
                </p>
              </div>
              <div className=" space-y-2 ">
                <p>PE Foam</p>
                <p>Ống Gen</p>
                <p>Ống Giấy</p>
                <p>Xốp Khí</p>
                <p>Băng Keo</p>
              </div>
              <div className=" space-y-2 ">
                <p>Mảng CO</p>
                <p>Xốp EPS</p>
                <p
                  onClick={() => {
                    navigateScrool('/tuyen-dung', '');
                  }}
                >
                  Tuyển dụng
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/lien-he', '');
                  }}
                >
                  Liên hệ
                </p>
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
