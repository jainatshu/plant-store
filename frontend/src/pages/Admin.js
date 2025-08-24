import React from 'react';
import AdminPanel from '../components/Admin/AdminPanel';

const Admin = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
      <AdminPanel />
    </div>
  );
};

export default Admin;