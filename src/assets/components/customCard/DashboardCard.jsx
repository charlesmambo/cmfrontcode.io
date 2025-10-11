import React from "react";

const DashboardCard = ({
  icon: Icon,
  value,
  label,
  iconBgColor = "#f3f4f6",
  iconColor = "#000000",   
  valueColor = "#111827", 
  className = "",
}) => {
  return (
    <div className={`dashboard_custom_card ${className}`}>
      <div
        className="dashboard_custom_card_icon_wrapper"
        style={{
          backgroundColor: iconBgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10%",
          width: "62px",
          height: "58px",
        }}
      >
        {Icon && <Icon className="dashboard_custom_card_icon" style={{ color: iconColor, fontSize: "24px" }} />}
      </div>

      <div className="dashboard_custom_card_content">
        <h3 style={{ color: valueColor }}>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
