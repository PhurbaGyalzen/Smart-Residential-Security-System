import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/addUser';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addUser' element={<AddUser />} />
    </Routes>
  );
};

export default AppRoutes;
