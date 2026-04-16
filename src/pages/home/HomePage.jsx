import React, { useEffect } from 'react';
import '../home/HomePage.css';
import Primary from '../../assets/components/buttons/Primary';
import { PiBracketsAngleBold } from "react-icons/pi";
import { GoTrophy } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import { HiStar } from "react-icons/hi2";
import { MdOutlineDownload } from "react-icons/md";
import { RiBracesLine } from "react-icons/ri";
import { LuCircleCheck } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import UserProfile from '../userProfile/UserProfile';
import { NavLink } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";


const HomePage = () => {
   const navigate = useNavigate();

  const handleBrowseChallenges = () => {
    navigate("/challenges"); 
  };

  const codeSnippets = [
    '{ }', '< >', '[ ]', '( )', '&&', '||', '===', '!==', 
    'JS', 'CSS', 'HTML', 'React', 'Bootstrap', 'Tailwind',
    'if', 'else', 'for', 'while', 'try', 'catch',
    '→', '←', '↑', '↓', '⚡', '⭐', '🚀', '💻',
    'API', 'JSON', 'HTTP', 'DOM', 'UI', 'UX',
    'git', 'npm', 'dev', 'prod', 'build'
  ];

     const handleLoginClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    function createBubble() {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';

      const size = Math.random() * 80 + 40;
      bubble.style.width = size + 'px';
      bubble.style.height = size + 'px';
      bubble.style.left = Math.random() * 100 + '%';
      bubble.style.animationDuration = Math.random() * 10 + 15 + 's';
      bubble.style.animationDelay = Math.random() * 5 + 's';

      const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      bubble.textContent = snippet;

      const fontSize = Math.max(8, Math.min(16, size / snippet.length * 2));
      bubble.style.fontSize = fontSize + 'px';

      return bubble;
    }

    const container = document.getElementById('codingBubbles');
    if (!container) return;

    // Initial bubbles
    for (let i = 0; i < 15; i++) {
      container.appendChild(createBubble());
    }

    // Continuous bubbles
    const bubbleInterval = setInterval(() => {
      const bubble = createBubble();
      container.appendChild(bubble);
      setTimeout(() => bubble.remove(), 25000);
    }, 2000);

    return () => clearInterval(bubbleInterval);
  }, []);

  return (
    <div className="home_container">
<div className="hero_section">
  <div className="hero_left">   
    <span className="version"><GoDotFill className='version_icon' /> V2.0 IS LIVE</span>
    <h1>
      Master <span>Frontend</span><br />
      Development with
      Real Challenges
    </h1>
    <p>
      Elevate your coding skills by building real-world projects. 
      Get AI-powered feedback, professional design files, 
      and join a community of top-tier developers.
    </p>
    <div className="hero_buttons">
      <button className="btn_primary" onClick={handleLoginClick}>
        Get Started Free →
      </button>

      <button className="btn_secondary" onClick={handleBrowseChallenges}>
        Browse Challenges
      </button>
    </div>

    <div className="hero_social">
      <div className="avatars">
        <div></div><div></div><div></div>
      </div>
      <p>
        <strong>Join 5,000+</strong> developers building today.
      </p>
    </div>
  </div>

 <div className="hero_right">
  <div className="code_card">

    {/* TOP BAR */}
    <div className="code_header">
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="url">app.cmfrontend.code</div>
    </div>

    {/* CODE CONTENT */}
    <div className="code_body">
      <div className="code_body_content">
      <p className="code_title">AI Feedback Analysis</p>

      <div className="cd_content">
        <p><span className='const'>const</span> accessibility = <span className='cd_blue'>"Excellent"</span> ;</p>
        <p><span className='const'>const</span> performance = <span className='cd_blue'>"Optimized"</span> ;</p>
        <p className='cds'>// Suggestion: Consider using React.memo for the Card component</p>
      </div>

      <div className="score">Score: 94/100</div>
      </div>
    </div>

    {/* BOTTOM STATS */}
    <div className="code_footer">
      <div className="stat_show">
        <p>Current Streak</p>
        <h3>14 🔥</h3>
      </div>

      <div className="stat_show">
        <p>Global Rank</p>
        <h3>#42 🏆</h3>
      </div>
    </div>

  </div>
</div>
</div>

      <div className="home_everything_you_need">
        <h2>Everything You Need to Level Up</h2>
        <p>Our platform provides all the tools and resources you need to improve your frontend skills</p>

        <div className="home_everything_you_need_card_container">
          <div className="home_everything_you_need_card">
            <div className="home_everything_you_need_card_icon">
              <PiBracketsAngleBold />
            </div>
            <div className="home_everything_you_need_card_content">
              <h4>100+ Design Challenges</h4>
              <p>Premium UI/UX designs converted into coding challenges for skill development.</p>
            </div>
          </div>

          <div className="home_everything_you_need_card">
            <div className="home_everything_you_need_card_icon">
              <GoTrophy />
            </div>
            <div className="home_everything_you_need_card_content">
              <h4>Points & Leaderboard</h4>
              <p>Earn points for quality submissions and climb the global leaderboard.</p>
            </div>
          </div>

          <div className="home_everything_you_need_card">
            <div className="home_everything_you_need_card_icon">
              <TbUsers />
            </div>
            <div className="home_everything_you_need_card_content">
              <h4>Code Reviews</h4>
              <p>Get feedback from peers and review others' code to improve together.</p>
            </div>
          </div>

          <div className="home_everything_you_need_card">
            <div className="home_everything_you_need_card_icon">
              <HiStar />
            </div>
            <div className="home_everything_you_need_card_content">
              <h4>Premium Content</h4>
              <p>Access exclusive premium challenges and advanced design systems.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How it works section with bubbles */}
      <div className="home_everything_you_need how_it_works_container">
        <div className="coding-bubbles" id="codingBubbles"></div>
        <h2>How It Works</h2>
        <p>Simple steps to start your coding journey</p>

        <div className="home_everything_you_need_card_container">
          <div className="home_everything_you_need_card home_how_works_card">
            <div className="home_everything_you_need_card_icon home_how_works_card_icon">
              <MdOutlineDownload />
            </div>
            <div className="home_everything_you_need_card_content">
              <h4>1. Choose & Download</h4>
              <p>Select a challenge and download the design files and requirements</p>
            </div>
          </div>

          <div className="home_everything_you_need_card home_how_works_card">
            <div className="home_everything_you_need_card_icon home_how_works_card_icon">
              <RiBracesLine />
            </div>
            <div className="home_everything_you_need_card_content">
              <h4>2. Build & Code</h4>
              <p>Code the design using your preferred framework and tools</p>
            </div>
          </div>

          <div className="home_everything_you_need_card home_how_works_card">
            <div className="home_everything_you_need_card_icon home_how_works_card_icon">
              <LuCircleCheck />
            </div>
            <div className="home_everything_you_need_card_content">
              <h4>3. Submit & Earn</h4>
              <p>Submit your solution, get reviewed, and earn points for quality work</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Start Your Journey? */}
      <div className="home_to_start_your_journey_container">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join thousands of developers improving their skills with real design challenges</p>

        
      <div className="home_to_start_your_journey_btns">
          <Primary type="submit" className=''   onClick={handleLoginClick}>
            Start Free Today
          </Primary>
      </div>
      </div>

      {/* <UserProfile/> */}
    </div>
  );
};

export default HomePage;
