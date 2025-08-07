import React from 'react';
import { NavLink } from 'react-router-dom';

const SubNavbar = () => {
  return (
    <div className='sub-navbar-container'>
      <ul>
        <li>
          <NavLink
            to="/learning-path"
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            Learning Path
          </NavLink>
        </li>
        <li>
          <a href="#">Challenges</a>
        </li>
        <li>
          <a href="#">Solutions</a>
        </li>
      </ul>
    </div>
  );
};

export default SubNavbar;
