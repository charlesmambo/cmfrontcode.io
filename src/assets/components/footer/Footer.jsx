import React from 'react';
import '../footer/Footer.css';
import { NavLink } from 'react-router-dom';
import { PiNewspaperClipping } from "react-icons/pi";
import { CgCommunity } from "react-icons/cg";
import { RiUserCommunityFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useAuth } from '../auth/AuthContext'; 
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { isLoggedIn } = useAuth(); // 👈 get login status

  const navigate = useNavigate();

  const handleSupportClick =()=> {
    navigate("/support")
}

  return (
    <footer>
      <div className="footer_intro">
        <h3>cmFrontendCode</h3>
        <p>
          Master frontend development through hands-on challenges and real-world projects.
          Join thousands of developers improving their skills daily.
        </p>
      </div>

      <div className="footer_links">
        <h3>Quick links</h3>
        <ul>
          {/* 👇 Only show Dashboard if logged in */}
          {isLoggedIn && (
            <li>
            <NavLink
              to="/dashboard">
              Dashboard
               </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/challenges">Challenges
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/solutions">Solutions
            </NavLink>
          </li>
          <li>
            <NavLink 
            to="/leaderboard">Leaderboard
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="footer_links">
        <h3>Community</h3>
        <ul>
          <li>
              <NavLink to="/support">
    <PiNewspaperClipping className='footer_icon' />
    Support
  </NavLink>
          </li>
          <li>
            <a href="#">
              <PiNewspaperClipping className='footer_icon' />
              Blog
            </a>
          </li>
          <li>
            <a href="#">
              <RiUserCommunityFill className='footer_icon' />
              Discord
            </a>
          </li>
        </ul>
      </div>

      <div className="footer_links footer_socials_icon">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="#">
              <BsTwitterX />
            </a>
          </li>
          <li>
            <a href="#">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
