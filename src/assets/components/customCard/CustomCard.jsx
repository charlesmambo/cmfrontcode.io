import React from "react";
import "../customCard/CustomCard.css";
import Primary from "../buttons/Primary";

const CustomCard = ({ 
  image, 
  title, 
  description, 
  languages = [], 
  buttonText = "Start Challenge", 
  onButtonClick 
}) => {
  return (
    <div className="custom_card">
      <div className="custom_card_img">
        <img src={image} alt={title} />
      </div>

      <div className="custom_card_content">
        <h3>{title}</h3>
        <p>{description}</p>
        
        {languages.length > 0 && (
          <div className="custom_card_lang">
            {languages.map((lang, index) => (
              <div key={index} className="lang">
                {lang}
              </div>
            ))}
          </div>
        )}

        <div className="custom_card_btn">
          <Primary type="button" onClick={onButtonClick}>
            {buttonText}
          </Primary>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
