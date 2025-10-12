import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const SubNavbar = () => {
  const { isLoggedIn } = useAuth(); // check login state
  return (
    <div className="sub-navbar-container">
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
            Solutions
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SubNavbar;
