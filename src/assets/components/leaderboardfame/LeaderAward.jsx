import React from 'react';
import '../leaderboardfame/LeaderAward.css';
import { FaCrown } from "react-icons/fa";

const LeaderAward = ({ name, username, points, position, image, highlight, icon: Icon, bgColor }) => {
  const formattedPoints = typeof points === "number" 
    ? points.toLocaleString() 
    : points;

  return (
    <div className='leaderaward-wrapper'>
      <div className="leaderaward-user-pro-container">
        <div className="leaderaward-user-pro-card" style={{ backgroundColor: bgColor || '#E9E9E9' }}>
          {image && <img src={image} alt={name} />}
        </div>
        {highlight && (Icon ? <Icon className="leaderaward-icon" /> : <FaCrown className="leaderaward-icon" />)}
      </div>

      <div className="leaderaward-user-content">
        <p>{name}</p>
        <p>@{username}</p>
        <p>{formattedPoints} pts</p>
      </div>

      <div className="leaderaward-user-position" style={{ backgroundColor: bgColor || 'var(--gold-bg)' }}>
        #{position}
      </div>
    </div>
  );
};

export default LeaderAward;
