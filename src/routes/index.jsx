import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from '../pages/Users';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Dashboard from '../pages/Dashboard';
import Articles from '../pages/Articles';
import Settings from '../pages/Settings';
import About from '../pages/About';

const Router = function () {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div style={{ width: '220px', height: '100vh' }}><Sidebar /></div>
        <div className="d-flex flex-column" style={{ flex: '1' }}>
          <Navbar />
          <div style={{ flex: '1' }}>
            <Routes>
              <Route path="/users" element={<Users />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
