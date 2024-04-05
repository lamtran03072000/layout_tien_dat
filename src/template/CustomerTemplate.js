import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import FooterPage from '../components/FooterPage';

export default function CustomerTemplate() {
  return (
    <div>
      <Header />
      <Outlet />
      <FooterPage />
    </div>
  );
}
