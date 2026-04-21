import React, { useState } from 'react';
import '../solutionsCard/SolutionCard.css';
import { LuClock } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FiMessageCircle, FiEye } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoLogoGithub, IoMdHeart } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";


const SolutionCard = ({
  title,
  image,
  profileImage,
  userName,
  points,
  timeAgo,
  likes,
  comments,
  views,
  externalLink,
  githubLink,
  hideUserInfo = false, 
  id,
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeToggle = () => {
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLiked(!liked);
  };

   const navigate = useNavigate();
    const handleClick = () => {
    navigate(`/view-solution/${id}`);
  };

  return (
<div className='solution_card_container'>
  
  {/* Links */}
  <div className="solution_links">
    {externalLink && (
      <a href={externalLink} target="_blank" rel="noopener noreferrer">
        <HiOutlineExternalLink className="solution_links_icon" />
      </a>
    )}
    {githubLink && (
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <IoLogoGithub className="solution_links_icon" />
      </a>
    )}
  </div>

  {/* IMAGE WITH OVERLAY */}
  <div className="solution_card_img">

    <img src={image} alt={title} />


    {/* hover overlay */}
    <div className="solution_card_overlay">
      <button className="view_solution_btn" onClick={handleClick}>
        View Solution
      </button>
    </div>

  </div>

  {/* CONTENT */}
  <div className="solution_card_content">
    <h4>{title}</h4>

    {!hideUserInfo && (
      <div className="sc">
      <div className="solution_card_content_profile">
        <div className="solution_card_content_wrapper">
          <div className="solution_card_content_profile_wrapper">
        <div className="solution_card_content_profile_img">
          <img src={profileImage} alt={userName} />
        </div>
        <div className="solution_card_content_profile_info">
          <p className='solution_user_name'>{userName}</p>
        </div>
        </div>
        </div>
        <div className="solution_card_content_level_tag">
          <GoDotFill className='solution_card_content_level_tag_icon'/>
          Beginner
        </div>
      </div>
      <div className="sc_lang">
         <span>html</span>
         <span>css</span>
         <span>javascript</span>
      </div>
      </div>
    )}

    <div className="social_card_user_interactions">
      <div className='social_card_user_interactions_content'>
      <p onClick={handleLikeToggle}>
        {liked ? <IoMdHeart /> : <FaRegHeart />}
        <span>{likeCount}</span>
      </p>

            <p>
        <FiEye />
        <span>{views}</span>
      </p>

      <p>
        <FiMessageCircle />
        <span>{comments}</span>
      </p>
      </div>
            <span>
               {timeAgo}
            </span>
    </div>
  </div>
</div>
  );
};

export default SolutionCard;