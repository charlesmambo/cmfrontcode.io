import React from 'react';
import { useState } from "react";
import '../userProfile/UserProfile.css';
import AVATAR from '../../../public/char.jpg';
import { FiEdit3 } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { IoIosGitBranch } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CompletedChallenge from '../../assets/components/customCard/CompletedChallenge';



const UserProfile = () => {
 const [active, setActive] = useState("Completed");   
  return (
    <div className='user_profile_wrapper container-flex'>
        <div className="user_profile_container">
            <div className="user_profile_card">
                <div className="user_profile_card_avatar">
                    <img src={AVATAR} alt="" />
                </div>
                <div className="user_profile_card_content">
                <div className="user_profile_card_name">
                    <h4>charles mambo</h4>
                    <p>@charlesm</p>
                </div>
                <div className="edit_user_profile">
                    <div className="user_profile_edit_btn"><FiEdit3 />Edit profile</div>
                    <div className="">
                     <IoSettingsOutline className="user_profile_settings" />
                    </div>
                </div>
              </div>
            </div>
            <div className="user_profile_bio">
                <p>Full Stack Web Developer | Passionate about Crafting Engaging Digital Experiences 🚀 | Driven by Curiosity and Perseverance to Learn and Grow 💡 | Proficient in HTML, CSS, JavaScript, and Frameworks like React ⚛️ | Skilled in Front-End Development and Responsive Design 📱 | UI/UX-Oriented Problem</p>

                <ul className="user_profile_bio_list">
                    <li>
                    <MdOutlineEmail />
                    charles@example.com
                    </li>
                    <li>
                        <IoLocationOutline />
                        South Africa, Cape Town
                    </li>
                    <li>
                        <CiCalendarDate />
                         Joined January 2024
                    </li>
                </ul>
                <ul className="user_profile_bio_list user_profile_bio_list_links">
                    <li>
                    <TbWorld />
                    <a href="#">Website</a>
                    </li>
                    <li>
                        <IoIosGitBranch />
                        <a href="#">GitHub</a>
                    </li>
                    <li>
                       <FaLinkedinIn />
                         <a href="#">LinkedIn</a>
                    </li>
                    <li>
                        <FaXTwitter />
                         <a href="#">Twitter</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="user_comp">
            <div className="user_comp_card">
                <h4>2450</h4>
                <p>Total Points</p>
            </div>
            <div className="user_comp_card">
                <h4>#12</h4>
                <p>Global Rank</p>
            </div>
            <div className="user_comp_card">
                <h4>28</h4>
                <p>Completed</p>
            </div>
            <div className="user_comp_card">
                <h4>3</h4>
                <p>Inprogress</p>
            </div>
            <div className="user_comp_card">
                <h4>43</h4>
                <p>Reviews</p>
            </div>
            <div className="user_comp_card">
                <h4>7</h4>
                <p>Day Streak</p>
            </div>
            {/* <div className="user_comp_card">
                <h4>Level</h4>
                <p>Advanced</p>
            </div> */}
        </div>

        <div className="user_work_stats_container">
            <div className="user_work_stats_toggle">
                <div
                className={`user_work_stats_toggle_text ${active === "Completed" ? "active" : ""}`}
                onClick={() => setActive("Completed")}
                >
                Completed
                </div>
                <div
                className={`user_work_stats_toggle_text ${active === "Achievements" ? "active" : ""}`}
                onClick={() => setActive("Achievements")}
                >
                Achievements
                </div>
            </div>

            <div className="user_work_stats_challenges">
               <CompletedChallenge
                    title="Interactive Rating Component"
                    level="Newbie"
                    date="10/01/2025"
                    points={15}
                    technologies={["HTML", "CSS", "JavaScript"]}
                />

                <CompletedChallenge
                    title="E-commerce Product Page"
                    level="Junior"
                    date="22/01/2025"
                    points={30}
                    technologies={["React", "Tailwind", "TypeScript"]}
                />
                <CompletedChallenge
                    title="Multi-step Form"
                    level="Advanced"
                    date="24/01/2025"
                    points={50}
                    technologies={["React", "Css", "TypeScript"]}
                />
            </div>
        </div>
        
    </div>
  )
}

export default UserProfile