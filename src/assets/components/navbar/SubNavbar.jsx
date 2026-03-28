import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import  { useState, useEffect, useRef } from 'react';
import '../navbar/Navbar.css';
import Primary from '../buttons/Primary';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6"
import { IoSettingsOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineNotifications } from "react-icons/md";
import NotificationCard from '../customCard/NotificationCard';

const SubNavbar = () => {
  
  // const { isLoggedIn } = useAuth(); // check login state
  const [showDropdown, setShowDropdown] = useState(false); 
  const { isLoggedIn,logout } = useAuth(); 
  const navigate = useNavigate();


  const handleLoginClick = () => navigate("/login");

  const dropdownRef = useRef(null);

    // 👇 dynamic logo click based on login
  const handleSettingsClick = () => {
      navigate("/profile");
    }
  const handleSettingClick = () => {
      navigate("/settings");
    }

    // 👇 toggle dropdown when clicking profile icon
  const handleProfileClick = () => {
    setShowDropdown(prev => !prev);
  };

    const handleLogout = () => {
    logout(); // 👈 call logout from context
    setShowDropdown(false);


      toast.success("Logged out successfully", {
      autoClose: 2000,
      });
    navigate("/"); 
  };
  useEffect(() => {
const handleClickOutside = (event) => {
if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
setShowDropdown(false);
}
};


document.addEventListener("mousedown", handleClickOutside);


return () => {
document.removeEventListener("mousedown", handleClickOutside);
};
}, []);

const [showNotifications, setShowNotifications] = useState(false);
  
  return (
    <div className="sub-navbar-container">
      <div className="logo">
       <NavLink to={isLoggedIn ? "/dashboard" : "/"}>
          <h4 className='logo'>cmFrontendCode</h4>
        </NavLink>
      </div>
      <ul>
          {/*Only show Dashboard if logged in */}
        {isLoggedIn && (
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Dashboard
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to="/leaderboard"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/challenges"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Challenges
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/solutions"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Community
          </NavLink>
        </li>
          {/* Only show My Solutions if logged in */}
          {isLoggedIn && (
            <li>
              <NavLink
                to="/my_solution"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                My Solutions
              </NavLink>
            </li>
          )}
      </ul>
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
                <div className="navbar_icon_container">
                <div className="navbar_icon_container">
                  <div 
                    className="notify_user_icon_container"
                    onClick={() => setShowNotifications(prev => !prev)}
                  >
                    <MdOutlineNotifications className='notify_user_icon'/>
                    <p className='notify_num'>3</p>
                  </div>

                  {showNotifications && (
                    <div className="notification_card2">
                      <NotificationCard/>
                    </div>
                  )}

                  <CgProfile
                    className='navbar_profile_icon'
                    onClick={handleProfileClick}
                  />
                </div>
                </div>

                {showDropdown && (
                  <div className="logout_dropdown">
                    <ul className='user_drops_info'>
                      <li className='user_name'>Charles Mambo</li>
                      <li onClick={handleSettingsClick} >Profile</li>
                      <li  onClick={handleSettingClick}>Settings</li>
                    </ul>
                    
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
  );
};

export default SubNavbar;
