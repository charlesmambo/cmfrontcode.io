import React, { useState } from 'react'
import '../profile/Profile.css';
import { FaGithub, FaLinkedin, FaInstagramSquare, FaFacebook, FaCheck } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { TiLocationOutline } from "react-icons/ti";
import { IoStarOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { RiImageEditFill } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

import Primary from '../../assets/components/buttons/Primary';
import CancelBtn from '../../assets/components/buttons/CancelBtn';
import SaveBtn from '../../assets/components/buttons/SaveBtn';
import EditBtn from '../../assets/components/buttons/EditBtn';

const Profile = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
   const handleUpgradeClick = () => navigate("/upgrade");

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    
  };

  const handleSave = () => {
    setEditMode(false);
  };

  return (
    <div className='profile_container'>

      {/* TOP SECTION */}
      <div className="top_deck">

        <div className="profile_img_container">
          {/* <img src="" alt="" /> */}
          {editMode && <RiImageEditFill className='edit_img_icon' />}
        </div>

        <div className="top_deck_content">
          <h4>Charles Mambo</h4>
          <p className='top_deck_title'>Frontend Developer | UI UX Designer</p>

          <div className="top_deck_location">
            <SlCalender className='top_deck_icon' />
            <p>Joined 11 January 2026</p>
          </div>

          <div className="top_deck_location">
            <TiLocationOutline className='top_deck_icon' />
            <p>Cape Town, South Africa</p>
          </div>

          <div className="top_deck_plan top_deck_location">
            <IoStarOutline className='top_deck_icon' />
            | free plan
          </div>
        </div>

        {/* BUTTONS */}
        <div className="profile_btn_edit">

          {!editMode && (
            <EditBtn
              text="Edit"
              RightIcon={BiSolidEditAlt}
              onClick={handleEdit}
            />
          )}

          {editMode && (
            <>
              <CancelBtn onClick={handleCancel} />
              <SaveBtn onClick={handleSave} />
            </>
          )}

        </div>

      </div>

      {/* SOCIAL LINKS */}
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

      {/* SKILLS */}
      <fieldset className="profile_social_links">
        <legend>Skills</legend>

        <div className="profile_skills_links_content">

          <p>
            HTML
            {editMode && (
              <span className='skills_close_btn'>
                <RxDividerVertical />
                <IoMdClose className='skills_close_icon' />
              </span>
            )}
          </p>

          <p>
            CSS
            {editMode && (
              <span className='skills_close_btn'>
                <RxDividerVertical />
                <IoMdClose className='skills_close_icon' />
              </span>
            )}
          </p>

          <p>
            Javascript
            {editMode && (
              <span className='skills_close_btn'>
                <RxDividerVertical />
                <IoMdClose className='skills_close_icon' />
              </span>
            )}
          </p>

          <p>
            React
            {editMode && (
              <span className='skills_close_btn'>
                <RxDividerVertical />
                <IoMdClose className='skills_close_icon' />
              </span>
            )}
          </p>

          <p>
            WordPress
            {editMode && (
              <span className='skills_close_btn'>
                <RxDividerVertical />
                <IoMdClose className='skills_close_icon' />
              </span>
            )}
          </p>

          {editMode && (
            <EditBtn
              text="Add Skill"
              LeftIcon={FiPlus}
            />
          )}

        </div>
      </fieldset>

      {/* PREMIUM MEMBERSHIP */}
      <fieldset className="profile_social_links">
        <legend>Premium Membership</legend>

        <div className="premium_membership_content">

          <p>Upgrade to Premium to unlock:</p>

          <ul>
            <li>
              <FaCheck className='premium_icon' />
              Premium challenges
            </li>

            <li>
              <FaCheck className='premium_icon' />
              Advanced UI designs challenges
            </li>

            <li>
              <FaCheck className='premium_icon' />
              Exclusive code reviews
            </li>

            <li>
              <FaCheck className='premium_icon' />
              One on one mentorship
            </li>

            <li>
              <FaCheck className='premium_icon' />
              Courses and documents
            </li>
          </ul>

          <Primary type="button" onClick={handleUpgradeClick}>
            Upgrade to Premium
          </Primary>

        </div>
      </fieldset>

    </div>
  )
}

export default Profile