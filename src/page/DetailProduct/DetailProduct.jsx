import React from 'react';
import ThongTinSp from './ThongTinSp';
import MotaSp from './MotaSp';
import SanPhamKhac from './SanPhamKhac';
import BannerSp from '../../components/BannerSp';

const DetailProduct = () => {
  return (
    <div>
      <BannerSp content={<span>Sản phẩm 1</span>} />
      <ThongTinSp />
      <MotaSp />
      <SanPhamKhac />
    </div>
  );
};

export default DetailProduct;
