import React, { useState } from 'react';
import '../settings/Settings.css';
import { IoSettingsOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import DeleteBtn from '../../assets/components/buttons/DeleteBtn';
import { AiOutlineDelete } from "react-icons/ai";
import Primary from '../../assets/components/buttons/Primary';
import { LiaToggleOffSolid } from "react-icons/lia";
import { LiaToggleOnSolid } from "react-icons/lia";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";


const Settings = () => {
const [challengeToggle, setChallengeToggle] = useState(false);
const [weeklyToggle, setWeeklyToggle] = useState(false);
const [leaderboardToggle, setLeaderboardToggle] = useState(false);
const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='settings_container'>
      <div className="settings_title">
        <h2>
          <IoSettingsOutline className='settings_icon'/>
           Settings
        </h2>
        <p>Manage your account preferences and notifications</p>
      </div>

      <div className="account">
         <div className="account_title">
          <span><FiUser /></span>
          <div className="account_title_content">
           <h4>Account</h4>
           <p>Your account information</p>
           </div>
         </div>

         <div className="account_content">
           <label>Email Address</label>
           <input type="text" placeholder='chylah11st@gmail.com'disabled />
         </div>

         <div className="account_content account_border">
           <label>Password</label>
           <div className="account_password_input_container">
            <input  placeholder='********' className='account_password_input' disabled  type={showPassword ? "text" : "password"} />
             <Primary>Change</Primary>
              {showPassword ? (
                <FiEye
                  className='p_icon open_eye_icon'
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaRegEyeSlash
                  className='p_icon hide_eye_icon'
                  onClick={() => setShowPassword(true)}
                />
              )}
           </div>
         </div>
      </div>

      <div className="account notifications">
         <div className="account_title">
          <span><MdOutlineNotificationsActive /></span>
          <div className="account_title_content">
           <h4>Notifications</h4>
           <p>Choose what updates you receive</p>
          </div>
         </div>

         <div className="email_notification">
           <p className='email_notification_title'><MdOutlineMailOutline />
               Email Notifications
          </p>
           <div className="email_notify">
            <div className="account_title_content account_sub_title">
              <h4>Challenge Updates</h4>
              <p>New challenges and deadline reminders</p>
            </div>
            <div className="toggle_btn" onClick={() => setChallengeToggle(!challengeToggle)}>
              {challengeToggle ? (
                <LiaToggleOnSolid className='toggle_icon toggle_solid'/>
              ) : (
                <LiaToggleOffSolid className='toggle_icon toggle_outline'/>
              )}
            </div>
           </div>
           <br />
           <div className="email_notify account_border">
            <div className="account_title_content account_sub_title">
              <h4>Weekly Digest</h4>
              <p>Summary of your progress and new challenges</p>
            </div>
            <div className="toggle_btn" onClick={() => setWeeklyToggle(!weeklyToggle)}>
              {weeklyToggle ? (
                <LiaToggleOnSolid className='toggle_icon toggle_solid'/>
              ) : (
                <LiaToggleOffSolid className='toggle_icon toggle_outline'/>
              )}
            </div>
           </div>
           <br />
           <div className="email_notify account_border">
            <div className="account_title_content account_sub_title">
              <h4>Leaderboard Updates</h4>
              <p>When your ranking changes</p>
            </div>
            <div className="toggle_btn" onClick={() => setLeaderboardToggle(!leaderboardToggle)}>
              {leaderboardToggle ? (
                <LiaToggleOnSolid className='toggle_icon toggle_solid'/>
              ) : (
                <LiaToggleOffSolid className='toggle_icon toggle_outline'/>
              )}
            </div>
           </div>
      </div>
      </div>

      <div className="account notifications delete_account">
         <div className="account_title delete_title_icon">
          <span><MdOutlineDeleteSweep /></span>
          <div className="account_title_content">
           <h4>Danger Zone</h4>
           <p>Irreversible actions</p>
           </div>
         </div>

         <div className="email_notification">
           <div className="email_notify">
            <div className="account_title_content account_sub_title">
              <h4>
               Delete Account
              </h4>
              <p>
              Permanently delete your account and all data.
            </p>
            </div>
            <DeleteBtn icon={<AiOutlineDelete />}>Delete</DeleteBtn>
           </div>
         </div>
      </div>

    </div>
  )
}

export default Settings