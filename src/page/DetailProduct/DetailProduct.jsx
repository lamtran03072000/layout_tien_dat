import React from 'react';
import ThongTinSp from './ThongTinSp';
import MotaSp from './MotaSp';
import SanPhamKhac from './SanPhamKhac';
import BannerSp from '../../components/BannerSp';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { sanPhamService } from '../../service/sanPhamService';
import { useSelector } from 'react-redux';
import ListImgDes from './ListImgDes';
let langueDinamicKey = {
  en: 'En',
  vn: 'Vn',
};
const DetailProduct = () => {
  const { idSp } = useParams();
  const { content, language } = useSelector((state) => state.contentPageSlice);

  const nameSp = 'name' + langueDinamicKey[language];

  const [dataSp, setDataSp] = useState({});
  const fetchSpApi = async () => {
    try {
      const data = await sanPhamService.getSp(idSp);
      setDataSp(data.data);
    } catch (error) {
      console.log('error ở đây nha: ', error);
    }
  };
  useEffect(() => {
    fetchSpApi();
  }, [idSp]);
  return (
    <div>
      <BannerSp content={<span>{dataSp[nameSp]}</span>} />
      <ThongTinSp dataSp={dataSp} />
      <MotaSp dataSp={dataSp} />
      <SanPhamKhac />
    </div>
  );
};

export default DetailProduct;
