import React from 'react';
import '../mySolution/MySolution.css'
import { IoTrophySharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa6";
import SolutionCard from '../../assets/components/solutionsCard/SolutionCard';
import IMG1 from '../../../public/sn6.png';
import IMG2 from '../../../public/sn3.png';

const MySolution = () => {
  return (
    <div className='mysolution_wrapper'>

        <div className="mysolution_content_container">
        <div className="mysolution_content_container_title">
            <h2>My Solutions</h2>
            <p>Your completed challenges and community engagement</p>
        </div>
        
        <div className="mysolution_content_container_achievement_container">
            <div className="ms_achievement_card">
               <IoTrophySharp className='ms_achievement_icon trophy' />
               <h4>1</h4>
               <span>completed</span>
            </div>
            <div className="ms_achievement_card">
               <FaRegHeart  className='ms_achievement_icon heart'/>
               <h4>1</h4>
               <span>total likes</span>
            </div>
            <div className="ms_achievement_card">
               <FaRegEye  className='ms_achievement_icon eye'/>
               <h4>3</h4>
               <span>total views</span>
            </div>
            <div className="ms_achievement_card">
               <FaRegComments  className='ms_achievement_icon comments'/>
               <h4>2</h4>
               <span>comments</span>
            </div>
        </div>
        

        <div className="mysolution_card_wrapper">
         <SolutionCard
            title="Interactive rating component"
            image={IMG1}
            profileImage={IMG2}
            userName="Charles Mambo"
            points={10}
            timeAgo="about 2 hours ago"
            likes={5}
            comments={2}
            views={15}
            externalLink="https://example.com"
            githubLink="https://github.com/example"
             hideUserInfo={true}
            />
         <SolutionCard
        title="Interactive rating component"
        image={IMG1}
        points={10}
        timeAgo="about 2 hours ago"
        likes={5}
        comments={2}
        views={15}
        externalLink="https://example.com"
        githubLink="https://github.com/example"
        hideUserInfo={true}
        />
        </div>

        </div>
   </div>
  )
}

export default MySolution