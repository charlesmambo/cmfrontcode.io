import React from 'react'
import '../profile/Profile.css';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Primary from '../../assets/components/buttons/Primary';
import { FaCheck } from "react-icons/fa6";
import { TiLocationOutline } from "react-icons/ti";
import { IoStarOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { RiImageEditFill } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";
import CancelBtn from '../../assets/components/buttons/CancelBtn';
import SaveBtn from '../../assets/components/buttons/SaveBtn';
import { RxDividerVertical } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import EditBtn from '../../assets/components/buttons/EditBtn';
import { FiPlus } from "react-icons/fi";
import { BiSolidEdit } from "react-icons/bi";


const Profile = () => {
  return (
    <div className='profile_container'>
       <div className="top_deck">
        <div className="profile_img_container">
         {/* <img src="" alt="" /> */}
         <RiImageEditFill className='edit_img_icon'/>
        </div>

    <div className="top_deck_content">
        <h4>Charles Mambo</h4>
        <p className='top_deck_title'>Frontend Developer | UI UX Designer</p>
        <div className="top_deck_location">
        <SlCalender className='top_deck_icon'/>
        <p>Joined 11 January 2026</p>
        </div>
        <div className="top_deck_location">
            <TiLocationOutline className='top_deck_icon'/>
            <p>Cape Town, South Africa</p>
        </div>
        <div className="top_deck_plan top_deck_location">
           <IoStarOutline className='top_deck_icon'/>
            | free plan
        </div>
    </div>
        <div className="profile_btn_edit">
            <CancelBtn/>
            <SaveBtn/>
            <EditBtn
            text="Edit"
            RightIcon={BiSolidEditAlt}
            />
        </div>
    </div>

    <fieldset className="profile_social_links">
        <legend>Social Links</legend>
        <div className="profile_social_links_content">
          <p>
            <FaGithub />
            github.com/in/...
          </p>
          <p>
            <FaLinkedin />
            linkedin.com/in/...
          </p>
          <p>
            <BsTwitterX />
            twitter.com/in/...
          </p>
          <p>
            <TbWorld />
            yourwebsite.com
          </p>
          <p>
            <FaInstagramSquare />
            instagram.com/in/...
          </p>
          <p>
            <FaFacebook />
            facebook.com/in/...
          </p>
        </div>
    </fieldset>
    <fieldset className="profile_social_links">
        <legend>Skills</legend>
        <div className="profile_skills_links_content">
          <p>
            HTML
            <span className='skills_close_btn'>
                <RxDividerVertical />
                <IoMdClose className='skills_close_icon' />
            </span>
          </p>
          <p>
            CSS
            <span className='skills_close_btn'>
                <RxDividerVertical />
                <IoMdClose className='skills_close_icon' />
            </span>
          </p>
          <p>
           Javascript
            <span className='skills_close_btn'>
                <RxDividerVertical />
                <IoMdClose className='skills_close_icon' />
            </span>
          </p>
          <p>
            React
            <span className='skills_close_btn'>
                <RxDividerVertical />
                <IoMdClose className='skills_close_icon' />
            </span>
          </p>
          <p>
            WordPress
            <span className='skills_close_btn'>
                <RxDividerVertical />
                <IoMdClose className='skills_close_icon' />
            </span>
          </p>
           <EditBtn
            text="Add Skill"
            LeftIcon={FiPlus}
            />
        </div>
    </fieldset>

    <fieldset className="profile_social_links">
        <legend>Premium Membership</legend>
        <div className="premium_membership_content">
          <p>Upgrade to Premium to unlock:</p>
          <ul>
            <li>
                <FaCheck className='premium_icon'/>
                Premium challenges
            </li>
            <li>
                <FaCheck className='premium_icon'/>
                Advanced UI designs challenges
            </li>
            <li>
                <FaCheck className='premium_icon'/>
               Exclusive code reviews
            </li>
            <li>
                <FaCheck className='premium_icon'/>
               One on one mentorship
            </li>
            <li>
                <FaCheck className='premium_icon'/>
               Courses and documents
            </li>
          </ul>

         <Primary type="button">
             Upgrade to Premium
        </Primary>
        </div>
    </fieldset>







    
    </div>
  )
}

export default Profile