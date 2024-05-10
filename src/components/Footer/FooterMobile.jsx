import React from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';

const FooterMobile = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigateScrool = (url, idSection) => {
    const language = searchParams.get('language') || 'vn';
    navigate(`${url}?language=${language}&sectionId=${idSection}`);
  };
  return (
    <div className="section pb-0">
      <div className="border-t shadow space-y-6 pt-6  ">
        <div className="flex justify-center items-center">
          <img src="./img/footer_logo.png" alt="" width={105} height={132} />
        </div>
        <div className=" border-b border-[#585858] space-y-6 pb-6 color_text_content">
          <div className="container_td flex justify-between space-x-7">
            <div className="w-1/2 space-y-7">
              <div className=" space-y-2">
                <p className="font-bold text-base">Trang chủ</p>
                <p
                  onClick={() => {
                    navigateScrool('/', 'loiMoDau');
                  }}
                >
                  Lời mở đầu
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/', 'sanPhamcc');
                  }}
                >
                  Sản phẩm chúng tôi cung cấp
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
                    navigateScrool('/', 'tlhahp');
                  }}
                >
                  Thư viện hình ảnh
                </p>
              </div>
              <div className=" space-y-2">
                <p
                  onClick={() => {
                    navigateScrool('/list-product', 'dsspPageSp');
                  }}
                  className="font-bold text-base"
                >
                  Sản phẩm
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/detail', 'ttSpDetail');
                  }}
                >
                  PE Foam
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/detail', 'ttSpDetail');
                  }}
                >
                  Ống gen
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/detail', 'ttSpDetail');
                  }}
                >
                  Ống giấy
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/detail', 'ttSpDetail');
                  }}
                >
                  Xốp khí
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/detail', 'ttSpDetail');
                  }}
                >
                  Băng keo
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/detail', 'ttSpDetail');
                  }}
                >
                  Màng CO
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/detail', 'ttSpDetail');
                  }}
                >
                  Xốp EPS
                </p>
              </div>
            </div>
            <div className="w-1/2  space-y-7">
              <div className=" space-y-2">
                <p className="font-bold text-base">Về chúng tôi</p>
                <p
                  onClick={() => {
                    navigateScrool('/ve-chung-toi', 'giaTriCotLoi');
                  }}
                >
                  Giá trị cốt lõi
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/ve-chung-toi', 'tuLieuHinhAnhAbout');
                  }}
                >
                  Thư viện hình ảnh
                </p>
              </div>
              <div className=" space-y-2">
                <p className="font-bold text-base">Hỗ trợ khách hàng</p>
                <p
                  onClick={() => {
                    navigateScrool('/lien-he', 'ttlienhe');
                  }}
                >
                  Thông tin
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/lien-he', 'chinhSachLienHe');
                  }}
                >
                  Chính sách
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/lien-he', 'formLienHe');
                  }}
                >
                  Form liên hệ
                </p>
              </div>
              <div className=" space-y-2">
                <p className="font-bold text-base">Tuyển Dụng </p>
                <p
                  onClick={() => {
                    navigateScrool('/tuyen-dung', 'tslvTd');
                  }}
                >
                  Tại sao làm việc tại Đại Tiến Đạt
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/tuyen-dung', 'giatriDTD');
                  }}
                >
                  Giá trị tại Đại Tiến Đạt
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/tuyen-dung', 'cvtTd');
                  }}
                >
                  Các vị trí tuyển dụng
                </p>
              </div>
            </div>
          </div>
          <div className="text-3xl space-x-3 font-bold container_td flex items-center justify-center">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-youtube"></i>
            <i className="fa-brands fa-square-instagram"></i>
          </div>
        </div>

        <div className="container_td">
          <div className="flex justify-center items-center color_text_content py-3 ">
            <p>© 2024 bởi Công ty TNHH MTV Đại Tiến Đạt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
