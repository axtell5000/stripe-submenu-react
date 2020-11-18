import React from 'react';
import { FaBars } from 'react-icons/fa';

import { useGlobalContext } from './context';
import logo from './images/logo.svg';

const Navbar = () => {
  // fetching functions from context
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' title="Products">
              products
            </button>
          </li>
          <li>
            <button className='link-btn' title="Developers">
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' title="Company">
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn' title="Sign in">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
