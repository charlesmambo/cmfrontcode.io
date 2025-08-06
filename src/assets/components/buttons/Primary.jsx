import React from 'react';
import '../buttons/Button.css';

const Primary = ({ type = 'button', onClick, children, className = '', disabled = false }) => {
  return (
    <div className='primary-btn-container'>
      <button
        type={type}
        onClick={onClick}
        className={`primary-btn ${className}`}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Primary;
