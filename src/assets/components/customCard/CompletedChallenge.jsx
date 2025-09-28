import React from "react";

const CompletedChallenge = ({
  title,
  level,
  date,
  points,
  technologies = [],
}) => {
  // Assign a class based on level
  const getLevelClass = (level) => {
    switch (level.toLowerCase()) {
      case "newbie":
        return "level-newbie";
      case "junior":
        return "level-junior";
      case "intermediate":
        return "level-intermediate";
      case "advanced":
        return "level-advanced";
      default:
        return "";
    }
  };

  return (
    <div className="complete_challenge_card">
      <div className="complete_challenge_card_header">
        <h4>{title}</h4>
        <p className={`complete_challenge_card_header_level ${getLevelClass(level)}`}>
          {level}
        </p>
      </div>

      <div className="complete_challenge_card_content">
        <p className="complete_challenge_check">
          <span>Completed</span>
          <span className="complete_challenge_date">{date}</span>
        </p>
        <p className="complete_challenge_check ccp">
          <span>Points Earned</span>
          <span className="complete_challenge_points">+{points}</span>
        </p>
        <p className="complete_challenge_card_leng">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default CompletedChallenge;
