import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import FooterPage from '../components/Footer/FooterPage';
import { DesktopReponsive, MobileReponsive } from '../HOC/reponsive';
import HeaderMobile from '../components/HeaderMobile/HeaderMobile';
import FooterMobile from '../components/Footer/FooterMobile';

export default function CustomerTemplate() {
  return (
    <div>
      <DesktopReponsive>
        <Header />
      </DesktopReponsive>
      <MobileReponsive>
        <HeaderMobile />
      </MobileReponsive>
      <Outlet />

      <DesktopReponsive>
        <FooterPage />
      </DesktopReponsive>
      <MobileReponsive>
        <FooterMobile />
      </MobileReponsive>
    </div>
  );
}
