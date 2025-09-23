import React, { useState } from 'react';
import '../solutionsCard/SolutionCard.css';
import { LuClock } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FiMessageCircle, FiEye } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";

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
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeToggle = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className='solution_card_container'>
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

      <div className="solution_card_img">
        <img src={image} alt={title} />
      </div>

      <div className="solution_card_content">
        <h3>{title}</h3>

        <div className="solution_card_content_profile">
          <div className="solution_card_content_profile_img">
            <img src={profileImage} alt={userName} />
          </div>
          <div className="solution_card_content_profile_info">
            <p className='solution_user_name'>{userName}</p>
            <p className='solution_user_points'>
              <span>{points} points</span>
              <span className='solution_user_points_icon'>
                <LuClock /> {timeAgo}
              </span>
            </p>
          </div>
        </div>

        <div className="social_card_user_interactions">
          <p
            className='social_card_user_interactions_icon'
            onClick={handleLikeToggle}
            style={{ cursor: "pointer" }}
          >
            {liked ? (
              <IoMdHeart className='social_card_user_interactions_hearticon' />
            ) : (
              <FaRegHeart />
            )}
            <span>{likeCount}</span>
          </p>

          <p className='social_card_user_interactions_icon'>
            <FiMessageCircle />
            <span>{comments}</span>
          </p>
          <p className='social_card_user_interactions_icon'>
            <FiEye />
            <span>{views}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
