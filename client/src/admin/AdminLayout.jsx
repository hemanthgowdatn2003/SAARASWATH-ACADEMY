import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './components/AdminSidebar';

export const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f1f5f9' }}>
      <AdminSidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
