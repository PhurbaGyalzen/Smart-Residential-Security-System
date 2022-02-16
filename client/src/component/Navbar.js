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
            <Link to='/'>
              <i className='fa-solid fa-house fa-2x'></i>
            </Link>
          </li>

          <li className='nav-list-item fa-2x'>
            <Link to='/addUser'>
              <i className='fa-solid fa-user-plus'></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
