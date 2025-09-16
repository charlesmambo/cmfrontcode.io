import React, { useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { LuDownload, LuCodeXml } from "react-icons/lu";
import Primary from "../buttons/Primary";
import "../startChallenge/StartChallenge.css";
import { GoDotFill } from "react-icons/go";
import { GrView } from "react-icons/gr";
import { AiOutlineDesktop } from "react-icons/ai";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiCursor } from "react-icons/pi";
import SubmitChallenge from "../submitChallenge/SubmitChallenge";

// Step Card Component
const StepCard = ({ number, title, text, active }) => (
  <div className="step_card">
    <div className={`step_num ${!active ? "step_num_grey" : ""}`}>{number}</div>
    <div className="step_content">
      <p className="step_headings">{title}</p>
      <p className="step_challenge_text">{text}</p>
    </div>
  </div>
);

// Resource Card Component
const ResourceCard = ({ icon: Icon, title, subtitle }) => (
  <div className="start_challenge_content_resources">
    <Icon className="resources_icon" />
    <div className="start_challenge_content_resources_txt">
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  </div>
);

// Stat Card Component
const StatCard = ({ value, label, color }) => (
  <div className={`start_challenge_stats ${color}`}>
    <div className="start_challenge_statss">
      <h4>{value}</h4>
      <p>{label}</p>
    </div>
  </div>
);

const StartChallenge = ({ steps = [], challenge = {}, resources = [], stats = [], onBack }) => {
  // State to control SubmitChallenge visibility
  const [showSubmit, setShowSubmit] = useState(false);

  // Handler for submit button click
  const handleSubmitClick = () => {
    setShowSubmit(true);
  };

  return (
    <div className="start_challenge_wrapper">
      {/* Back Button */}
      <div className="challenge-steps">
      <div className="back_btn" onClick={onBack}>
        <MdOutlineArrowBack className="back_icon" />
        back to challenge
      </div>

      {/* Steps */}
      <div className="start_challenge_steps">
        {steps.map((step, i) => (
          <StepCard key={i} {...step} />
        ))}
      </div>
      </div>

      {/* Main Content */}
      <div className="start_challenge_content_wrapper">
        <div className="start_challenge_content">
          {/* Challenge Info */}
          <div className="start_challenge_content_card">
            <div className="start_challenge_content_card_headings">
              <div className="start_challenge_content_card_headings_info">
                <div className="start_challenge_content_card_headings_level">
                  {challenge.level}
                </div>
              </div>
              <div className="start_challenge_content_card_headings_offer">
                {challenge.price}
              </div>
            </div>

            <div className="start_challenge_content_details">
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </div>
            <p className="start_challenge_content_card_headings_lang">
              {challenge.language}
            </p>
            <Primary type="submit" className="start_challenge">
              Download Assets
            </Primary>
          </div>

          {/* Resources */}
          <div className="start_challenge_content_card start_challenge_content_card_resources">
            <h3>Actions</h3>
            <div className="start_challenge_content_resources_wrapper tw">
              {resources.map((res, i) => (
                <ResourceCard key={i} {...res} />
              ))}
            </div>
            <Primary
              type="button"
              className="start_challenge"
              onClick={handleSubmitClick}
            >
              Submit Solution
            </Primary>
          </div>

          {/* Challenge Stats */}
          <div className="start_challenge_content_card start_challenge_content_card_resources">
            <h3>Challenge Stats</h3>
            <div className="start_challenge_content_resources_wrapper">
              {stats.map((stat, i) => (
                <StatCard key={i} {...stat} />
              ))}
            </div>
          </div>
          
        </div>

        {/* Design & Stats */}
        <div className="start_challenge_design_review_wrapper">
          <div className="start_challenge_design_review start_challenge_content_card">
            <h3>Design Preview</h3>
            <div className="start_challenge_design_review_card"></div>
            <div className="start_challenge_design_review_toggles">
              <div className="design_review_toggle_btn">
                <AiOutlineDesktop />
                Desktop Design
              </div>
              <div className="design_review_toggle_btn design_review_toggle_outline">
                <HiOutlineDevicePhoneMobile />
                Mobile Design
              </div>
              <div className="design_review_toggle_btn design_review_toggle_outline">
                <PiCursor />
                Active Design
              </div>
            </div>
          </div>

          <div className="start_challenge_content_card rs_card">
            <h3>Requirements</h3>
            <ul className="rs_list_items">
              <li>
                <GoDotFill className="rs_list_items_icon" />
                Responsive design that works on mobile, tablet, and desktop
              </li>
              <li>
                <GoDotFill className="rs_list_items_icon" />
                Product image with zoom functionality on hover
              </li>
              <li>
                <GoDotFill className="rs_list_items_icon" />
                Price display with discount calculations
              </li>
              <li>
                <GoDotFill className="rs_list_items_icon" />
                Add to cart button with loading state
              </li>
            </ul>
          </div>

          <div className="start_challenge_content_card rs_card">
            <h3>Submission Guidelines</h3>
            <ul className="rs_list_items">
              <li>
                <GoDotFill className="rs_list_items_icon" />
                Upload your completed code as a zip file or provide a GitHub repository link
              </li>
              <li>
                <GoDotFill className="rs_list_items_icon" />
                Include a README.md with setup instructions and demo screenshots
              </li>
              <li>
                <GoDotFill className="rs_list_items_icon" />
                Ensure your code is well-commented and follows best practices
              </li>
              <li>
                <GoDotFill className="rs_list_items_icon" />
                Submissions will be reviewed by peers and scored based on code quality, design accuracy, and functionality
              </li>
            </ul>
          </div>
        </div>
      </div>
       {/* Conditionally render SubmitChallenge */}
        {showSubmit && (
          <SubmitChallenge 
            onClose={() => setShowSubmit(false)} // <-- important!
          />
        )}

    </div>
  );
};

export default StartChallenge;
