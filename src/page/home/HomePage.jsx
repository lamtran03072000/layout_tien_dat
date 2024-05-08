import React from 'react';
import Bannertd from './Bannertd';
import LoiMoDau from './LoiMoDau';
import Number from './Number';
import LinhVucUngDung from './LinhVucUngDung';
import TuLieuHinhAnh from './TuLieuHinhAnh';
import SanPhamCungCap from './SanPhamCungCap';
import BanMuonBietThem from '../../components/BanMuonBietThem';
import { useSelector } from 'react-redux';
import QuyTrinhGiaoHang from './QuyTrinhGiaoHang';

const HomePage = () => {
  const { content } = useSelector((state) => state.contentPageSlice);
  return (
    <div>
      {/* <div className="bg-black h-20 xl:bg-yellow-400 lg:bg-blue-600"></div> */}
      <Bannertd dataBanner={content.homePage?.banner} />
      <LoiMoDau dataLoiMoDau={content.homePage?.loiMoDau} />
      <Number dataNumber={content.homePage?.number} />
      <SanPhamCungCap dataSanPhamCungCap={content.homePage?.sanPhamCungCap} />
      <LinhVucUngDung dataLinhVucUngDung={content.homePage?.linhVucUngDung} />
      <QuyTrinhGiaoHang />
      <TuLieuHinhAnh dataTuLieuHinhAnh={content.homePage?.tuLieuHinhAnh} />
      <BanMuonBietThem
        dataBanMuonBietThem={content.homePage?.banMuonBietThem}
      />

      {/* <div dangerouslySetInnerHTML={{ __html: zaloWidget }} /> */}
    </div>
  );
};

export default HomePage;
