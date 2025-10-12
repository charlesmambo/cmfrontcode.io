import React, { useState, useEffect, useRef } from 'react';
import '../navbar/Navbar.css';
import Primary from '../buttons/Primary';
import { MdLightMode } from "react-icons/md";
import LOGO from '../../../../public/cmlogo.png';
import SubNavbar from './SubNavbar';
import ModeSwitch from '../modeSwitch/ModeSwitch';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { useAuth } from '../auth/AuthContext';
import { FaArrowRightLong } from "react-icons/fa6";


const Navbar = () => {
  const [showModeSwitch, setShowModeSwitch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // dropdown visibility
  const { isLoggedIn,logout } = useAuth(); 
  const navigate = useNavigate();

  const toggleModeSwitch = () => setShowModeSwitch(prev => !prev);

  const handleLoginClick = () => navigate("/login");

  const dropdownRef = useRef(null);

    // 👇 toggle dropdown when clicking profile icon
  const handleProfileClick = () => {
    setShowDropdown(prev => !prev);
  };

    const handleLogout = () => {
    logout(); // 👈 call logout from context
    setShowDropdown(false);
    navigate("/"); // 👈 redirect after logout (optional)
  };

  // 👇 dynamic logo click based on login
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
    
  };

  return (
    <div className="nav-wrapper">
      <nav>
        <div className="logo-container">
          <a href="#" onClick={handleLogoClick}>
            <img src={LOGO} alt="Logo" />
          </a>
        </div>

        <div className="mode-signin-container">
          <div className="mode-switch" onClick={toggleModeSwitch}>
            <MdLightMode className='mode-switch-icon' />
          </div>

          <div className="navbar-login-btn-container">
            {/* LOGIN BUTTON */}
            {!isLoggedIn && (
              <div className="navbar-login-btn">
                <Primary type="button" onClick={handleLoginClick}>
                  LOG IN
                </Primary>
              </div>
            )}

           {/* PROFILE ICON + DROPDOWN */}
            {isLoggedIn && (
              <div className="navbar-profile-container" ref={dropdownRef}>
                <CgProfile
                  className='navbar_profile_icon'
                  onClick={handleProfileClick}
                />

                {showDropdown && (
                  <div className="logout_dropdown">
                    <p className="name">Charles mambo</p>
                    <p className='settings'>Settings</p>
                    <button className="logout_btn" onClick={handleLogout}>
                      Log Out
                      <FaArrowRightLong />
                    </button>
                  </div>
                )}
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
