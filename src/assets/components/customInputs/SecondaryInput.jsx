import React from 'react';
import '../customInputs/input.css';

const SecondaryInput = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  id,
  className = "",
  ...props
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        className={`secondary_input ${className}`}
        {...props}
      />
    </div>
  );
};

export default SecondaryInput;