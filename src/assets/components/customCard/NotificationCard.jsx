import React from 'react';
import '../customCard/CustomCard.css';
import { FaRegDotCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";

const NotificationCard = () => {
  return (
    <div className='notification_card'>
       <h4>Notifications</h4>
       {/* <div className="notification_content empty_notify">
         <p>No notifications</p>
       </div> */}
       <div className="receive_notify_container">
       <div className="receive_notify">
         <div className="receive_notify_content_title">
            <p>
             <FaRegDotCircle className='receive_notify_icon rn_icon'/>
              Welcome to cmfrontendCode
            </p>
            <FaCircle className='receive_notify_icon unread'/>
         </div>
         <span>Start your first challenge and earn XP to level up your skills.
about 7 hours ago</span>
       </div>
       <div className="receive_notify">
         <div className="receive_notify_content_title">
            <p>
             <FaRegDotCircle className='receive_notify_icon rn_icon'/>
              New Challenge Available
            </p>
            <FaCircle className='receive_notify_icon unread'/>
         </div>
         <span>The 'E-commerce Product Card' challenge is now live. Try it out! about 8 hours ago.</span>
       </div>
       <div className="receive_notify">
         <div className="receive_notify_content_title">
            <p>
             <FaRegDotCircle className='receive_notify_icon rn_icon'/>
              Weekly Streak Reminder
            </p>
            <FaCircle className='receive_notify_icon unread'/>
         </div>
         <span>Keep your streak alive! Complete a challenge today to maintain your progress 1 day ago.</span>
       </div>
       </div>

    </div>
  )
}

export default NotificationCard