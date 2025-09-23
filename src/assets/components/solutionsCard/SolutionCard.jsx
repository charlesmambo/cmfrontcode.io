import React from 'react';
import '../solutionsCard/SolutionCard.css';
import { LuClock } from "react-icons/lu";
import IMG1 from '../../../../public/sn-img.png';
import { FaRegHeart } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";


const SolutionCard = () => {
  return (
    <div className='solution_card_container'>
        <div className="solution_links">
            <a href="#">
                <HiOutlineExternalLink className="solution_links_icon"/>
            </a>
            <a href="#">
                <IoLogoGithub className="solution_links_icon"/>
            </a>
        </div>
        <div className="solution_card_img">
            <img src={IMG1} alt="" />
        </div>

        <div className="solution_card_content">
            <h3>Interactive rating component</h3>
            
            <div className="solution_card_content_profile">
               <div className="solution_card_content_profile_img">
                <img src={IMG1} alt="" />
               </div> 
               <div className="solution_card_content_profile_info">
                <p className='solution_user_name'>Charles Mambo</p>
                <p className='solution_user_points'>
                    <span>160 points</span>
                    <span className='solution_user_points_icon'><LuClock /> about 2 hours ago</span>
                </p>
               </div>
            </div>

            <div className="social_card_user_interactions">
                <p className='social_card_user_interactions_icon'>
                    <FaRegHeart />
                    <span>likes</span>
                </p>
                <p className='social_card_user_interactions_icon'>
                    <FiMessageCircle />
                    <span>comments</span>
                </p>
                <p className='social_card_user_interactions_icon'>
                    <FiEye />
                    <span>45</span>
                </p>
            </div>
        </div>

    </div>
  )
}

export default SolutionCard