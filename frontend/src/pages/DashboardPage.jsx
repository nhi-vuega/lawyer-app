// In frontend/src/pages/DashboardPage.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';

const DashboardPage = () => {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">My Dashboard</h1>
        {/* All the other components like charts and tables will go here */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <p>Welcome to your dashboard! Content will be added here.</p>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;