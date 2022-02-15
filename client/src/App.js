import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navbar from './component/Navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
