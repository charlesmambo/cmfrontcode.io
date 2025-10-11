import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import RecentActivityCard from '../customCard/RecentActivityCard';
import { GoDotFill } from "react-icons/go";

const RecentCard = () => {
  return (
    <div className='recent_card_wrapper'>
        <div className="recent_card_headings">
            <h4>Recent Challenges</h4>
            <p className="recent_card_link">
                view all
                <IoIosArrowRoundForward className="recent_card_link_icon"/>
            </p>
        </div>
        
        <div className="recent_card_content_wrapper">
           <RecentActivityCard
            icon={GoDotFill}
            iconColor="#10B981"
            title="E-commerce Product Card"
            level="Intermediate"
            points={25}
            status="completed"
            statusColor="#10B981"
            date="3 days ago"
           />
           <RecentActivityCard
            icon={GoDotFill}
            iconColor="#e49c21"
            title="Social Media Dashboard"
            level="Advanced"
            points={30}
            status="in progress"
            statusColor="#e49c21"
            statusBgColor="#e49d2116"
            date=""
           />
           <RecentActivityCard
            icon={GoDotFill}
            iconColor="#10B981"
            title="Landing Page Hero"
            level="Beginner"
            points={20}
            status="Completed"
            statusColor="#10B981"
            date="5 days ago"
           />
           <RecentActivityCard
            icon={GoDotFill}
            iconColor="#10B981"
            title="Landing Page Hero"
            level="Beginner"
            points={20}
            status="Completed"
            statusColor="#10B981"
            date="5 days ago"
           />
           <RecentActivityCard
            icon={GoDotFill}
            iconColor="#10B981"
            title="Landing Page Hero"
            level="Beginner"
            points={20}
            status="Completed"
            statusColor="#10B981"
            date="5 days ago"
           />
        </div>
    </div>
  )
}

export default RecentCard