// In frontend/src/components/Sidebar.jsx
import React from 'react';

// You can use a library like 'react-icons' for the icons later
// For now, we'll use simple text placeholders
const Sidebar = () => {
  return (
    <div className="flex h-screen w-64 flex-col bg-gray-800 text-white">
      <div className="flex h-16 items-center justify-center border-b border-gray-700">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-2 rounded bg-gray-700 p-2">
            <a href="#" className="block">Dashboard</a>
          </li>
          <li className="mb-2 rounded p-2 hover:bg-gray-700">
            <a href="#" className="block">Transactions</a>
          </li>
          <li className="mb-2 rounded p-2 hover:bg-gray-700">
            <a href="#" className="block">Tables</a>
          </li>
          <li className="mb-2 rounded p-2 hover:bg-gray-700">
            <a href="#" className="block">Page examples</a>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <a href="#" className="block rounded p-2 text-red-400 hover:bg-gray-700">
          Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;