import React from 'react';
import { FaCircle } from "react-icons/fa";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { LuClock } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import { VscOpenPreview } from "react-icons/vsc";

const CourseCard = ({
  level = 'Beginner',
  title,
  description,
  duration,
  documents,
  features,
  onViewCourse,
  className = '', 
}) => {
  return (
    <div className={`course-card ${className}`}> 
      <p className='course-tag-headings'>
        <HiMiniCodeBracket className='course-tag-headings-icon' />
        <span className='course-tag'>{level}</span>
      </p>

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="course-duration-wrapper">
        <p className='course-duration'>
          <LuClock />
          {duration}
        </p>
        <p className='course-duration'>
          <GrDocumentText />
          {documents}
        </p>
      </div>

      <ul>
        <h4>What you'll get:</h4>
        {features.map((feature, index) => (
          <li key={index}>
            <FaCircle className='list-icon' />
            {feature}
          </li>
        ))}
      </ul>

      <div className="course-btn-container">
        <button onClick={onViewCourse}>
          <VscOpenPreview />
          View Course
        </button>
      </div>
    </div>
  );
};


export default CourseCard;
