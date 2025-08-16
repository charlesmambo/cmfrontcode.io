import React from 'react';
import '../totals/Total.css';

const Total = ({ icon: Icon, value, label, iconColor, iconBg }) => {
  return (
    <div className="total-wrapper">
      {Icon && (
        <Icon
          className="total-icon"
          style={{
            color: iconColor || "#1f5defd5",
            backgroundColor: iconBg || "#1f5def1f"
          }}
        />
      )}
      <div className="total-content">
        <h4>{value}</h4>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default Total;
