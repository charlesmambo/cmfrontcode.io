import React from 'react';
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { RiMessage3Line } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { IoTrophyOutline } from "react-icons/io5";


const ActionCard = () => {
  return (
    <div className='action_card'>
        <h4>Quick Actions</h4>

        <div className="action_card_content">
           <div className="action_card_link">
             <HiOutlineCodeBracketSquare className='browse-icon'/>
             <p>Browse challenges</p>
           </div> 
           <div className="action_card_link review_code_link">
             <RiMessage3Line  className='browse-icon review_code_icon'/>
             <p>Review Code</p>
           </div> 
           <div className="action_card_link view_leaderboard_link">
             <IoTrophyOutline   className='browse-icon view_leaderboard_icon'/>
             <p>View Leaderboard</p>
           </div> 
           <div className="action_card_link view_solution_link">
             <LuEye  className='browse-icon view_solution_icon'/>
             <p>View Solutions</p>
           </div> 
        </div>
    </div>
  )
}

export default ActionCard