import React from "react";
import "../customCard/CustomCard.css";
import Primary from "../buttons/Primary";
import Btn from "../buttons/Btn";

const CustomCard = ({
  image,
  title,
  description,
  languages = [],
  buttonText = "Start Challenge",
  challengeLevel = "Beginner",
  isPremium = false,
  onButtonClick
}) => {

  const getLevelColor = () => {
    switch (challengeLevel.toLowerCase()) {
      case "advanced":
        return "#ef4444"; // red
      case "intermediate":
        return "#f97316"; // orange
      default:
        return "#22c55e"; // green
    }
  };

  const truncateText = (text, maxLength = 70) => {
  if (text.length <= maxLength) return text;

  const trimmed = text.slice(0, maxLength);

  return trimmed.slice(0, trimmed.lastIndexOf(" ")) + "...";
};

  return (
    <div className="custom_card">

      {/* IMAGE */}
      <div className="custom_card_img">
        <img src={image} alt={title} />

        <span className={`badge ${isPremium ? "premium" : "free"}`}>
          {isPremium ? "Premium" : "Free"}
        </span>
      </div>

      {/* CONTENT */}
      <div className="custom_card_content">
        <h3>{title}</h3>
        <p>{truncateText(description, 70)}</p>

        {/* TAGS */}
        <div className="custom_card_lang">
          {languages.map((lang, index) => (
            <span key={index} className="lang">{lang}</span>
          ))}
        </div>

        {/* FOOTER */}
        <div className="custom_card_footer">
          <div className="level">
            <span
              className="dot"
              style={{ backgroundColor: getLevelColor() }}
            ></span>
            <span>{challengeLevel}</span>
          </div>
          <Btn text="Start Challenge" onClick={onButtonClick}/>
        </div>
      </div>

    </div>
  );
};

export default CustomCard;