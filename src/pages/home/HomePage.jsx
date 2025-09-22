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
      <div className="home_intro_section">
        <h1>
          Master Frontend Development with <span className='home_intro_span'>Real Design Challenges</span>
        </h1>
        <p>
          Turn beautiful UI/UX designs into code. Build, submit, get reviewed, and earn points while mastering frontend development with real-world challenges.
        </p>

        <div className="home_intro_btns">
          <Primary type="submit" className='home_intro_solid_btn'>
            Get Started Free
          </Primary>
          <Primary type="submit" className='home_intro_outline_btn' onClick={handleBrowseChallenges}>
            Browse Challenges
          </Primary>
        </div>

        <div className="home_intro_abt">
          <div className="home_intro_abt_card">
            <h3>5,000 +</h3>
            <p>Active Developers</p>
          </div>
          <div className="home_intro_abt_card home_intro_abt_card-last">
            <h3>100 +</h3>
            <p>Challenges</p>
          </div>
          <div className="home_intro_abt_card home_intro_abt_card-last">
            <h3>25,000 +</h3>
            <p>Submissions</p>
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
          <Primary type="submit" className=''>
            Start Free Today
          </Primary>
      </div>
      </div>

    </div>
  );
};

export default HomePage;
