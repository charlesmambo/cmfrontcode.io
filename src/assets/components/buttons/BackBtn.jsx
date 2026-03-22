import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";

const BackBtn = ({ label = "back to challenge", onClick, className = "" }) => {
  return (
    <div className={`back_btn ${className}`} onClick={onClick}>
      <MdOutlineArrowBack className="back_icon" />
      {label}
    </div>
  );
};

export default BackBtn;