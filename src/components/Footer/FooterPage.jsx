import React from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';

const titleSPCC = {
  vn: ' Sản phẩm chúng tôi <br /> cung cấp',
  en: 'Products we <br /> provide',
};
const titleCS = {
  vn: ' Chính sách',
  en: 'Policy',
};
const titleFormLienHe = {
  vn: 'Form liên hệ',
  en: 'Contact form',
};
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
                <p className="font-bold">
                  {content?.headerPage?.titlePage['1']}
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/', 'loiMoDau');
                  }}
                >
                  {parse(`${content?.homePage?.loiMoDau?.title}`)}
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/', 'sanPhamcc');
                  }}
                >
                  {parse(`${titleSPCC[language]}`)}
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/', 'linhVucUngDung');
                  }}
                >
                  {parse(`${content?.homePage?.linhVucUngDung?.title}`)}
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/', 'tlhahp');
                  }}
                >
                  {parse(`${content?.homePage?.tuLieuHinhAnh?.title}`)}
                </p>
              </div>

              <div className=" space-y-2 ">
                <p className="font-bold">
                  {content?.headerPage?.titlePage['2']}
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/ve-chung-toi', 'giaTriCotLoi');
                  }}
                >
                  {parse(`${content?.about?.coreValues?.title}`)}
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/ve-chung-toi', 'tuLieuHinhAnhAbout');
                  }}
                >
                  {parse(`${content?.homePage?.tuLieuHinhAnh?.title}`)}
                </p>
              </div>

              <div className=" space-y-2 ">
                <p
                  onClick={() => {
                    navigateScrool('/list-product', 'dsspPageSp');
                  }}
                  className="font-bold"
                >
                  {content?.headerPage?.titlePage['3']}
                </p>

                {renderSp()}
              </div>

              <div className=" space-y-2 ">
                <p className="font-bold">
                  {content?.headerPage?.titlePage['4']}
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/lien-he', 'ttlienhe');
                  }}
                >
                  {parse(`${content?.lienHe?.banner?.title}`)}
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/lien-he', 'chinhSachLienHe');
                  }}
                >
                  {titleCS[language]}
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/lien-he', 'formLienHe');
                  }}
                >
                  {titleFormLienHe[language]}
                </p>
              </div>

              <div className=" space-y-2">
                <p className="font-bold">
                  {content?.headerPage?.titlePage['5']}
                </p>
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
                  {parse(`${content?.tuyenDung?.giaTri?.title}`)}
                </p>

                <p
                  onClick={() => {
                    navigateScrool('/tuyen-dung', 'cvtTd');
                  }}
                >
                  {parse(`${content?.tuyenDung?.cacViTriTuyenDung?.title}`)}
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
