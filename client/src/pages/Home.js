import React from 'react';
import Parking from './parking';
import Entry from './entry';
import Smoke from './smoke';
import User from './user';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='homeContainer'>
      {/* User */}
      <div className='userContainer'>
        <User />
      </div>

      {/* Parking */}
      <div className='parkingContainer'>
        <Parking />
      </div>

      {/* Entry */}
      <div className='entryContainer'>
        <Entry />
      </div>

      {/* Smoke */}
      <div className='smokeContainer'>
        <Smoke />
      </div>
    </div>
  );
};

export default Home;
