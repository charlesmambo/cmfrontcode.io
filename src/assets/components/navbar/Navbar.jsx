import React, { useState } from 'react';
import '../navbar/Navbar.css';
import Primary from '../buttons/Primary';
import { MdLightMode } from "react-icons/md";
import LOGO from '../../../../public/cmlogo.png';
import SubNavbar from './SubNavbar';
import ModeSwitch from '../modeSwitch/ModeSwitch';

const Navbar = () => {
  const [showModeSwitch, setShowModeSwitch] = useState(false);

  const toggleModeSwitch = () => {
    setShowModeSwitch(prev => !prev);
  };

  return (
    <div className="nav-wrapper">
      <nav>
        <div className="logo-container">
          <a href="/">
          <img src={LOGO} alt="Logo" />
          </a>
        </div>

        <div className="mode-signin-container">
          <div className="mode-switch" onClick={toggleModeSwitch}>
            <MdLightMode className='mode-switch-icon' />
          </div>

          <div className="navbar-login-btn-container">
            <Primary type="submit">
              LOG IN
            </Primary>
          </div>
        </div>

        {showModeSwitch && (
          <div className="mode-switch-container">
            <ModeSwitch />
          </div>
        )}
      </nav>

      <SubNavbar />
    </div>
  );
};

export default Navbar;
