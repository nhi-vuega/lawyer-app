// In frontend/src/App.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* The Outlet component will render the matched route's component */}
      {/* For example, LoginPage or SignUpPage will be displayed here */}
      <Outlet />
    </div>
  );
}

export default App;