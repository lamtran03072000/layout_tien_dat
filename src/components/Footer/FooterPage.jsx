import React from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FooterPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { content, language } = useSelector((state) => state.contentPageSlice);

  const navigateScrool = (url, idSection) => {
    const language = searchParams.get('language') || 'vn';
    navigate(`${url}?language=${language}&sectionId=${idSection}`);
  };

  const renderSp = () => {
    let langueDinamicKey = {
      en: 'En',
      vn: 'Vn',
    };
    let nameDssp = 'name' + langueDinamicKey[language];

    return content.dssp?.map((ds, index) => {
      return (
        <p
          key={ds.id}
          onClick={() => {
            navigateScrool('/list-product', 'dsspPageSp');
          }}
        >
          {ds[nameDssp]}
        </p>
      );
    });
  };
  return (
    <div className="section pb-0">
      <div className="border-t shadow">
        <div className="container_td py-12 border-b border-[#585858]">
          <div className="grid_td color_text_content">
            <div className="col-start-1 col-end-3">
              <img src="/./img/footer_logo.png" alt="" />
            </div>
            <div className="col-start-4 col-end-13 flex font-light cursor-pointer justify-between ">
              <div className=" space-y-2  ">
                <p className="font-bold">Trang chủ</p>
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
                  Sản phẩm chúng tôi <br /> cung cấp
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

              <div className=" space-y-2 ">
                <p className="font-bold">Về chúng tôi</p>
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

              <div className=" space-y-2 ">
                <p
                  onClick={() => {
                    navigateScrool('/list-product', 'dsspPageSp');
                  }}
                  className="font-bold"
                >
                  Sản phẩm
                </p>

                {renderSp()}
              </div>

              <div className=" space-y-2 ">
                <p className="font-bold">Hỗ trợ khách hàng</p>
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
                <p className="font-bold">Tuyển Dụng </p>
                <p
                  onClick={() => {
                    navigateScrool('/tuyen-dung', 'tslvTd');
                  }}
                >
                  Tại sao làm việc tại <br /> Đại Tiến Đạt
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
