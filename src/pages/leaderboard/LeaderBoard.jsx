import React, { useState } from 'react';
import '../leaderboard/LeaderBoard.css'
import LeaderAward from '../../assets/components/leaderboardfame/LeaderAward';
import { TbAward } from "react-icons/tb";
import { FaAward } from "react-icons/fa";
import Total from '../../assets/components/totals/Total';
import { LuUsers } from "react-icons/lu";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { GoTrophy } from "react-icons/go";
import Table from '../../assets/components/table/Table';

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

      <div className="totals-container">
        <Total 
        icon={LuUsers} 
        value="5,234" 
        label="Total Participants"
        bgColor="#F5F7FF"
        iconColor="#4A90E2"
        />
        <Total 
        icon={HiArrowTrendingUp} 
        value="28,567" 
        label="Total Submissions"
        bgColor="#009d54ff"
        iconColor="#009d54ff"
        iconBg="#009d541d"
        />
        <Total 
        icon={GoTrophy} 
        value="1,248" 
        label="Average Points"
        bgColor="#F5F7FF"
        iconColor="#640D5F"
        iconBg="#640d6022"
        />
      </div>

      <div className="table-container">
        <Table/>
      </div>
    </div>
  )
}

export default LeaderBoard;
