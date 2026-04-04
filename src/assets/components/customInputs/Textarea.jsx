import React from 'react';
import '../customInputs/Input.css';

const Textarea = ({
  placeholder = "Your Message",
  name,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`textarea_wrapper ${className}`}>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Textarea;