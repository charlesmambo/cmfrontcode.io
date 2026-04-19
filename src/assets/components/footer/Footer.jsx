import React from 'react';
import '../footer/Footer.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useAuth } from '../auth/AuthContext';

const Footer = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer_container">

        {/* LEFT INTRO */}
        <div className="footer_brand">
                <NavLink to={isLoggedIn ? "/dashboard" : "/"} className="logo">
                  <div className="logo_icon">&lt;/&gt;</div>
                  <h2>cm<span>Frontend</span>Code</h2>
                </NavLink>
          <p>
            The most advanced platform to master frontend development
            through real-world challenges.
          </p>

          <div className="footer_socials">
            <a href="#"><BsTwitterX /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* PLATFORM */}
        <div className="footer_column">
          <h3>Platform</h3>
          <ul>
            <li><NavLink to="/challenges">Challenges</NavLink></li>
            <li><NavLink to="/solutions">Solutions</NavLink></li>
            <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
            <li><NavLink to="/premium">Premium</NavLink></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div className="footer_column">
          <h3>Resources</h3>
          <ul>
            <li><NavLink to="/learning-paths">Learning Paths</NavLink></li>
            <li><NavLink to="/articles">Articles</NavLink></li>
            <li><NavLink to="/community">Community</NavLink></li>
            <li><NavLink to="/help">Help Center</NavLink></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer_column">
          <h3>Company</h3>
          <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/terms">Terms</NavLink></li>
            <li><NavLink to="/privacy">Privacy</NavLink></li>
            <li onClick={() => navigate("/support")}>Contact</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer_bottom">
        <p>© {new Date().getFullYear()} cmFrontendCode. All rights reserved.</p>

        <div className="footer_status">
          <span className="status_dot"></span>
          <span>All systems operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;