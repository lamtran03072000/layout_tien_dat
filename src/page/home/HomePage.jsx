import React from 'react';
import Bannertd from './Bannertd';
import LoiMoDau from './LoiMoDau';
import Number from './Number';
import LinhVucUngDung from './LinhVucUngDung';
import TuLieuHinhAnh from './TuLieuHinhAnh';
import SanPhamCungCap from './SanPhamCungCap';
import BanMuonBietThem from '../../components/BanMuonBietThem';

const HomePage = () => {
  return (
    <div>
      <Bannertd />
      <LoiMoDau />
      <Number />
      <SanPhamCungCap />
      <LinhVucUngDung />
      <TuLieuHinhAnh />
      <BanMuonBietThem />
    </div>
  );
};

export default HomePage;
