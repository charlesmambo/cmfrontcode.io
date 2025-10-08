import React, { useState } from 'react';
import '../navbar/Navbar.css';
import Primary from '../buttons/Primary';
import { MdLightMode } from "react-icons/md";
import LOGO from '../../../../public/cmlogo.png';
import SubNavbar from './SubNavbar';
import ModeSwitch from '../modeSwitch/ModeSwitch';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [showModeSwitch, setShowModeSwitch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // <-- track login
  const navigate = useNavigate(); 

  const toggleModeSwitch = () => {
    setShowModeSwitch(prev => !prev);
  };

  const handleLoginClick = () => {
    navigate("/login");
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
            {!isLoggedIn && (
              <Primary type="submit" onClick={handleLoginClick}>
                LOG IN
              </Primary>
            )}

            {isLoggedIn && (
              <div className="navbar_profile">
                <CgProfile className='navbar_profile_icon'/>
              </div>
            )}
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
