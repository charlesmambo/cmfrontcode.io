import React from 'react';
import '../modeSwitch/ModeSwitch.css';
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { GrSystem } from "react-icons/gr";

const ModeSwitch = () => {
  return (
    <div className='mode-switch-card'>
      <div className="mode-switch-flex">
        <MdLightMode />
        Light
      </div>
      <div className="mode-switch-flex">
        <MdOutlineDarkMode />
        Dark
      </div>
      <div className="mode-switch-flex">
        <GrSystem />
        System
      </div>
    </div>
  )
}

export default ModeSwitch