import React from 'react';
import Bannertd from './Bannertd';
import LoiMoDau from './LoiMoDau';
import Number from './Number';
import LinhVucUngDung from './LinhVucUngDung';
import TuLieuHinhAnh from './TuLieuHinhAnh';
import SanPhamCungCap from './SanPhamCungCap';
import BanMuonBietThem from '../../components/BanMuonBietThem';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { content } = useSelector((state) => state.contentPageSlice);
  return (
    <div>
      <Bannertd dataBanner={content.homePage?.banner} />
      <LoiMoDau dataLoiMoDau={content.homePage?.loiMoDau} />
      <Number dataNumber={content.homePage?.number} />
      <SanPhamCungCap dataSanPhamCungCap={content.homePage?.sanPhamCungCap} />
      <LinhVucUngDung dataLinhVucUngDung={content.homePage?.linhVucUngDung} />
      <TuLieuHinhAnh dataTuLieuHinhAnh={content.homePage?.tuLieuHinhAnh} />
      <BanMuonBietThem
        dataBanMuonBietThem={content.homePage?.banMuonBietThem}
      />
    </div>
  );
};

export default HomePage;
