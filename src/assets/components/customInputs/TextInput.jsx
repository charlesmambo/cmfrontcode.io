import React from 'react';
import '../customInputs/Input.css';

const TextInput = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  icon: Icon,
  name,
  label,
  required = false
}) => {
  return (
    <div className='text-input-container'>
      {label && <label className='custom-input-label' htmlFor={name}>{label}</label>}
      <div className='input-with-icon'>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          id={name}
          required={required}
        />
        {Icon && <Icon className='custom-input-icon' />}
      </div>
    </div>
  );
};

export default TextInput;
