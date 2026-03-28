import React from 'react';
import '../buttons/Button.css';

const DeleteBtn = ({ 
  onClick, 
  type = "button", 
  children = "Delete", 
  className = "", 
  icon 
}) => {
  return (
    <button 
      type={type} 
      className={`delete_btn ${className}`} 
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default DeleteBtn;