
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx'
import Aircraft from './pages/Aircraft.jsx';
import Maintenance from './pages/Maintenance.jsx';


const App = () => {
  return (
    <div className='background'>
      {/* Navigation Bar */}
      <nav className="header">

        <Link to="/Dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/aircraft" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>Aircraft</Link>
        <Link to="/maintenance" style={{ color: 'white', textDecoration: 'none' }}>Maintenance</Link>
      </nav>

      {/* Page Content */}
      <div style={{ padding: '20px' }}>


        <Routes>
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/aircraft" element={<Aircraft />} />
          <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;