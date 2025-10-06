import React from 'react';
import { GrTrophy } from "react-icons/gr";

const AchievementCard = ({ title, description, earnedDate, Icon }) => {
  return (
    <div className='achieve_card_wrapper'>
      <div className="achieve_icon_container">
        {Icon ? <Icon className='achieve_icon' /> : <GrTrophy className='achieve_icon' />}
      </div>
      <div className="achieve_card_content">
        <h4>{title}</h4>
        <p>{description}</p>
        {earnedDate && <p className="earned_text">Earned {earnedDate}</p>}
      </div>
    </div>
  )
}

export default AchievementCard;
