import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
