import React from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';

const titleCS = {
  vn: ' Chính sách',
  en: 'Policy',
};
const titleFormLienHe = {
  vn: 'Form liên hệ',
  en: 'Contact form',
};
const FooterMobile = () => {
  const { content, language } = useSelector((state) => state.contentPageSlice);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigateScrool = (url, idSection) => {
    const language = searchParams.get('language') || 'vn';
    navigate(`${url}?language=${language}&sectionId=${idSection}`);

    const sectionElement = document.getElementById(idSection);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
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
            navigateScrool('/list-product', `dssp${ds.id}`);
          }}
        >
          {ds[nameDssp]}
        </p>
      );
    });
  };

  return (
    <div className="section pb-0">
      <div className="border-t shadow space-y-6 pt-6  ">
        <div className="flex justify-center items-center">
          <img src="/img/footer_logo.png" alt="" width={105} height={132} />
        </div>
        <div className=" border-b border-[#585858] space-y-6 pb-6 color_text_content">
          <div className="container_td flex justify-between space-x-7">
            <div className="w-1/2 space-y-7">
              <div className=" space-y-2">
                <p className="font-bold text-base">
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
                  {parse(`${content?.homePage?.sanPhamCungCap?.title}`)}
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
              <div className=" space-y-2">
                <p
                  onClick={() => {
                    navigateScrool('/list-product', 'dsspPageSp');
                  }}
                  className="font-bold text-base"
                >
                  {content?.headerPage?.titlePage['3']}
                </p>
                {renderSp()}
              </div>
            </div>
            <div className="w-1/2  space-y-7">
              <div className=" space-y-2">
                <p className="font-bold text-base">
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
              <div className=" space-y-2">
                <p className="font-bold text-base">
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
                <p className="font-bold text-base">
                  {content?.headerPage?.titlePage['5']}
                </p>
                <p
                  onClick={() => {
                    navigateScrool('/tuyen-dung', 'tslvTd');
                  }}
                >
                  {parse(`${content?.tuyenDung?.taiSaoLamViec?.title}`)}
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
