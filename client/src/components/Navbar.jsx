// Navbar.js
import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import btslogo from '../pics/bts-logo.png';
import { useNavigate } from 'react-router-dom';
import './Styles/Navbar.css';


const Navbar = () => {

  const navigate = useNavigate();
  const navigateTo = (link) => { 
    navigate(link);

  };
  
  return (
    <div>
    <nav>
         <div className="logo">
        <img src={btslogo} alt="BTS Logo" />
          <h2>BTS</h2>
      </div>
     
      <ul className="hover"> 
        <li><h3 className="hover-2" onClick={() => navigateTo('/home')}>Home</h3></li>
        {/* <li><h3 className="hover-2" onClick={() => scrollToSection('about')}>About</h3></li>
        <li><h3 className="hover-2" onClick={() => scrollToSection('members')}>Members</h3></li> */}
        <li><h3 className="hover-2" onClick={() => navigateTo('/song')} >Songs</h3></li>
        <li><h3 className="hover-2" onClick={() => navigateTo('/movie')}>Movies</h3></li> 
        </ul>
         <h3 className='chat-bar' onClick={() => navigateTo('/army')}>Fan Zone 💬</h3> 
    </nav>
    <Outlet />
    </div>
  );
};

export default Navbar;
