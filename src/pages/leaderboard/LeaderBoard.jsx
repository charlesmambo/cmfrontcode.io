import React, { useState } from 'react';
import '../leaderboard/LeaderBoard.css'
import LeaderAward from '../../assets/components/leaderboardfame/LeaderAward';
import { TbAward } from "react-icons/tb";
import { FaAward } from "react-icons/fa";

const LeaderBoard = () => {
  const [activeBtn, setActiveBtn] = useState("all time");

  const buttons = ["all time", "monthly", "weekly"];

  return (
    <div className='leaderboard-wrapper'>
      <div className="leaderboard-intro-headings">
        <h2>Leaderboard</h2>
        <p>Top performers in the cmfrontendcode community</p>
      </div>

      <div className="leaderboard-toggle">
        {buttons.map((btn) => (
          <div
            key={btn}
            className={`toggle-btn ${activeBtn === btn ? "active" : ""}`}
            onClick={() => setActiveBtn(btn)}
          >
            {btn}
          </div>
        ))}
      </div>

      <div className="top-performers">
        <LeaderAward 
        name="Jay Ricks" 
        username="ricks_web" 
        points={2000} 
        position={2} 
        // image={userImage} 
        highlight
        icon={TbAward }          
        bgColor="#C9CBFF" 
      />
        <LeaderAward 
        name="Charles Mambo" 
        username="charlestheawedeveloper" 
        points={2400} 
        position={1} 
        // image={userImage} 
        highlight
      />
        <LeaderAward 
        name="Cay Smith" 
        username="cay_smith" 
        points={1800} 
        position={3} 
        // image={userImage} 
        highlight
        icon={FaAward}  
         bgColor="#EB8317" 
      />
      </div>
    </div>
  )
}

export default LeaderBoard;
