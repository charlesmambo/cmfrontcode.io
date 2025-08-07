import React from 'react';
import '../cards/Card.css';

const SmallCard = ({ icon: Icon, title, subtitle, description, className = '' }) => {
  return (
    <div className={`small-card ${className}`}>
      {Icon && <Icon className="small-card-icon" />}
      {subtitle && <span className="small-card-specification-text">{subtitle}</span>}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </div>
  );
};


export default SmallCard;
