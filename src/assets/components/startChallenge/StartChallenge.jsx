import React, { useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import Primary from "../buttons/Primary";
import "../startChallenge/StartChallenge.css";
import { GoDotFill } from "react-icons/go";
import { GrView } from "react-icons/gr";
import { AiOutlineDesktop } from "react-icons/ai";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiCursor } from "react-icons/pi";
import SubmitChallenge from "../submitChallenge/SubmitChallenge";
import BackBtn from "../buttons/BackBtn";

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

// Helper function to get badge color
const getLevelColor = (level) => {
  switch (level.toLowerCase()) {
    case "newbie":
      return "level_green";
    case "intermediate":
      return "level_orange";
    case "advanced":
      return "level_red";
    default:
      return "level_default";
  }
};

const StartChallenge = ({ steps = [], challenge = {}, resources = [], stats = [], onBack }) => {
  const [showSubmit, setShowSubmit] = useState(false);

  const handleSubmitClick = () => {
    setShowSubmit(true);
  };

return (
  <div className="challenge_page">

    {/* HEADER */}
    <div className="challenge_header">
      <BackBtn onClick={onBack} />
      <h2>{challenge.title}</h2>
      <div className="challenge_badges">
        <span className="badge green">{challenge.level}</span>
        <span className="badge outline">FREE</span>
      </div>
    </div>

    <div className="challenge_layout">

      {/* LEFT CONTENT */}
      <div className="challenge_main">

        {/* OVERVIEW */}
        <div className="card">
          <h3>Challenge Overview</h3>
          <p>{challenge.description}</p>

          <div className="tech_stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JS (Optional)</span>
          </div>
        </div>

        {/* REQUIREMENTS */}
        <div className="card">
          <h3>Project Requirements</h3>

          <div className="requirement_item">
            <h4>Responsive Layout</h4>
            <p>View optimal layout across devices</p>
          </div>

          <div className="requirement_item">
            <h4>Interactive Elements</h4>
            <p>Hover states for all buttons</p>
          </div>

          <div className="requirement_item">
            <h4>Asset Integration</h4>
            <p>Use provided SVGs correctly</p>
          </div>
        </div>

        {/* SUBMISSION */}
        <div className="card">
          <h3>Submission Guidelines</h3>

          <div className="accordion active">
            <p>1. Set up your workspace</p>
          </div>

          <div className="accordion open">
            <p>2. Write your code</p>
            <span>
              Structure HTML semantically, then style with CSS variables.
            </span>
          </div>

          <div className="accordion">
            <p>3. Submit your solution</p>
          </div>
        </div>

      </div>

      {/* RIGHT SIDEBAR */}
      <div className="challenge_sidebar">

        {/* PREVIEW */}
        <div className="card preview">
          <div className="tabs">
            <span className="active">Desktop</span>
            <span>Mobile</span>
            <span>Active</span>
          </div>

          <div className="preview_box"></div>

          <button className="primary_btn">Start Challenge</button>

          <div className="actions">
            <button>Download Assets</button>
            <button onClick={handleSubmitClick}>Submit Solution</button>
          </div>
        </div>

        {/* STATS */}
        <div className="card stats">
          <h4>Challenge Stats</h4>

          <div className="stat">
            <span>Participants</span>
            <strong>15,420</strong>
          </div>

          <div className="stat">
            <span>Completed</span>
            <strong>11,256</strong>
          </div>

          <div className="progress">
            <div className="bar"></div>
          </div>

          <small>73% completion rate</small>
        </div>

      </div>
    </div>

    {showSubmit && <SubmitChallenge onClose={() => setShowSubmit(false)} />}
  </div>
);
}

export default StartChallenge;
