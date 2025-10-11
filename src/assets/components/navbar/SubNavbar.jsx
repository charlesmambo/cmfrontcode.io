import React from 'react';
import { NavLink } from 'react-router-dom';

const SubNavbar = () => {
  return (
    <div className="sub-navbar-container">
      <ul>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Dashboard
          </NavLink>
        </li>
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
