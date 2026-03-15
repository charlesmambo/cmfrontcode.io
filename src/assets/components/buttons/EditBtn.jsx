import React from "react";


const EditBtn = ({ text, LeftIcon, RightIcon, className = "", onClick }) => {
  return (
    <div className="global_action_btn">
      <button
        type="button"
        className={`edit_btn ${className}`}
        onClick={onClick}
      >
        {LeftIcon && <LeftIcon />}
        {text}
        {RightIcon && <RightIcon />}
      </button>
    </div>
  );
};

export default EditBtn;