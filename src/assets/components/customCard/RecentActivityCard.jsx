import React from "react";
import { GoDotFill } from "react-icons/go";

const RecentActivityCard = ({
  title,
  level,
  points,
  status,
  date,
  icon: Icon = GoDotFill,
  iconColor = "#2563eb",     
  statusColor = "#10b981", 
  statusBgColor = "#d1fae5",   
  className = "",
}) => {
  return (
    <div className={`recent_activity_card ${className}`}>
      {/* Left Section */}
      <div className="recent_activity_card_content">
        <Icon
          className="recent_activity_card_icon"
          style={{ color: iconColor, fontSize: "1.2rem" }}
        />
        <div className="recent_activity_card_content_headings">
          <h4>{title}</h4>
          <p>
            {level} • <span>{points}</span> points
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="recent_activity_ld">
        <p
          className="recent_activity_ld_level"
          style={{
            backgroundColor: statusBgColor,
            color: statusColor,
            textTransform: "capitalize",
          }}>
          {status}
        </p>
        <p className="recent_activity_ld_date">{date}</p>
      </div>
    </div>
  );
};

export default RecentActivityCard;
