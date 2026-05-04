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
import Btn from '../buttons/Btn';

const SubNavbar = () => {
  const notificationRef = useRef(null);
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
    // close profile dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }

    // close notifications
    if (notificationRef.current && !notificationRef.current.contains(event.target)) {
      setShowNotifications(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

const [showNotifications, setShowNotifications] = useState(false);
return (
  <nav className="navbar">
    {/* LEFT */}
    <div className="nav_left">
      <NavLink to={isLoggedIn ? "/dashboard" : "/"} className="logo">
        <div className="logo_icon">&lt;/&gt;</div>
        <h2>cm<span>Frontend</span>Code</h2>
      </NavLink>

      <ul className="nav_links">
        <li><NavLink to="/challenges">Challenges</NavLink></li>
        <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
        <li><NavLink to="/solutions">Community</NavLink></li>
        <li className="premium">👑 Premium</li>
      </ul>
    </div>

    {/* RIGHT */}
    <div className="nav_right">
      {!isLoggedIn ? (
        <>
          <span className="signin" onClick={handleLoginClick}>Sign in</span>
          <Btn text='Start Free' onClick={handleLoginClick}/>
        </>
      ) : (
        <div className="nav_icons">
          <div className="notify_wrapper" ref={notificationRef}>
            <MdOutlineNotifications
              className="notify_icon"
              onClick={() => setShowNotifications(prev => !prev)}
            />
            <span className="notify_badge">3</span>

            {showNotifications && (
              <div className="notification_dropdown">
                <NotificationCard />
              </div>
            )}
          </div>

          <div className="profile_wrapper" ref={dropdownRef}>
            <CgProfile
              className="profile_icon"
              onClick={handleProfileClick}
            />

            {showDropdown && (
              <div className="dropdown">
                <p className="user">Charles Mambo</p>
                <span onClick={handleSettingsClick}>Profile</span>
                <span onClick={handleSettingClick}>Settings</span>

                <button onClick={handleLogout}>
                  Log Out <FaArrowRightLong />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  </nav>
);
}

export default SubNavbar;
