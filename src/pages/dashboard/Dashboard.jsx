import React from 'react';
import '../dashboard/Dashboard.css'
import DashboardCard from '../../assets/components/customCard/DashboardCard';
import { GoTrophy } from "react-icons/go";
import { PiBracketsCurly } from "react-icons/pi";
import { LuMessageSquareCode } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import RecentCard from '../../assets/components/cards/RecentCard';
import ActionCard from '../../assets/components/cards/ActionCard';
import AchievementCard from '../../assets/components/customCard/AchievementCard';
import Achievement from '../../assets/components/cards/Achievement';




const Dashboard = () => {
  return (
    <div className='dasboard_wrapper'>
        <div className="dashboard_intro_container">
          <h2>Welcome back, <span>Charles Mambo</span> 👋</h2>
          <p>Level: <span className='dashboard_level'>Advanced</span> • Member since <span>15/08/2025</span></p>
        </div>

        <div className="dashboard_card_container">
          <DashboardCard
            icon={GoTrophy}
            value="1,250"
            label="Total Points"
            iconBgColor="#e49d2127"  
            iconColor="#D97706"    
            valueColor="#c37b00ff"
          />
          <DashboardCard
            icon={PiBracketsCurly}
            value="12"
            label="Completed Challenges"
            iconBgColor="#1f5def24"  
            iconColor="#1f5defd5"    
            valueColor="#0542d0f9"
          />
          <DashboardCard
            icon={LuMessageSquareCode}
            value="28"
            label="Reviews Given"
            iconBgColor="#06923e1b"  
            iconColor="#06923E"    
            valueColor="#01903aff"
          />
          <DashboardCard
            icon={FaArrowTrendUp }
            value="#47"
            label="Current Rank"
            iconBgColor="#9e1c5f22"  
            iconColor="#9E1C60"    
            valueColor="#990250ff"
          />
        </div>

        {/* Quick Action Wrapper */}
        <div className="quick_action_cards_wrapper">
          <RecentCard/>

          <div className="action_cards_wrapper">
              <ActionCard/>
              <Achievement/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard