import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    let navbarList = document.querySelector('.nav-list');
    if (!click) {
      navbarList.style.left = '0%';
    } else {
      navbarList.style.left = '-100%';
    }
  };

  return (
    <div className='navbar'>
      <nav>
        <ul className='nav-list'>
          <li className='nav-list-item'>
            <i class='fa-solid fa-house'></i>
            <Link to='/' className='nav-link' onClick={handleClick}>
              Dashboard
            </Link>
          </li>

          <li className='nav-list-item'>
            <i class='fa-solid fa-user-plus'></i>
            <Link to='/addUser' className='nav-link' onClick={handleClick}>
              Add Person
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
