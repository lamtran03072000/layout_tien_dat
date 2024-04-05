import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function AdminTemplate() {
  return (
    <div className="flex">
      <div className="w-1/6 border-2 border-blue-200  top-0 left-0 h-screen">
        <NavLink to={'/admin/aboutvn'}>About VN</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
