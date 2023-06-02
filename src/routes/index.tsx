import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';

const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesMain;
