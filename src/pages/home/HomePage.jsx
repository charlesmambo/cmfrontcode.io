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
import LearningPaths from '../../assets/components/learnPath/LearnPath';
import CodeReviewAd from '../../assets/components/codeAd/CodeReviewAd';
import PremiumAd from '../../assets/components/premium/PremiumAd';
import JoinCommunity from '../../assets/components/joinCommunity/JoinCommunity';
import LeaderAd from '../../assets/components/leaderAd/LeaderAd';
import Fq from '../../assets/components/fq/Fq';
import Btn from '../../assets/components/buttons/Btn';


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

<div class="cm_user_container">
  <div class="cm_user_card">
    <div class="cm_user_number">5,000+</div>
    <div class="cm_user_label">ACTIVE DEVELOPERS</div>
  </div>

  <div class="cm_user_card">
    <div class="cm_user_number">100+</div>
    <div class="cm_user_label">PRO CHALLENGES</div>
  </div>

  <div class="cm_user_card">
    <div class="cm_user_number">25,000+</div>
    <div class="cm_user_label">SUBMISSIONS</div>
  </div>
</div>

<div className="home_everything_you_need">
  <h2>Everything You Need to Level Up</h2>

  <div className="home_everything_you_need_card_container">

    {/* Card */}
    <div className="card">
      <div className="icon purple">
        <PiBracketsAngleBold />
      </div>
      <h4>100+ Design Challenges</h4>
      <p>Real-world projects from beginner to advanced. Build portfolio-ready applications.</p>
    </div>

    <div className="card">
      <div className="icon blue">
        <GoTrophy />
      </div>
      <h4>Points & Leaderboard</h4>
      <p>Earn points for every submission. Compete globally and track progress.</p>
    </div>

    <div className="card">
      <div className="icon cyan">
        <TbUsers />
      </div>
      <h4>Code Reviews</h4>
      <p>Get detailed feedback from experienced developers.</p>
    </div>

    <div className="card">
      <div className="icon purple">
        <HiStar />
      </div>
      <h4>Premium Content</h4>
      <p>Access exclusive challenges and advanced materials.</p>
    </div>

    <div className="card">
      <div className="icon pink">
        🤖
      </div>
      <h4>AI Feedback</h4>
      <p>Instant AI-powered code analysis and insights.</p>
    </div>

    <div className="card">
      <div className="icon green">
        📈
      </div>
      <h4>Learning Paths</h4>
      <p>Structured roadmaps from beginner to expert.</p>
    </div>

  </div>
</div>

<div className="how_it_works">
  <h2>How It Works</h2>

  <div className="how_it_works_steps">

    <div className="how_it_works_step">
      <div className="circle purple">1</div>
      <h4>Choose a Challenge</h4>
      <p>
        Browse challenges by difficulty and technology.
        Download design files and assets.
      </p>
    </div>

    <div className="how_it_works_step">
      <div className="circle blue">2</div>
      <h4>Build & Code</h4>
      <p>
        Use any framework or tools you prefer.
        Build at your own pace with full creative freedom.
      </p>
    </div>

    <div className="how_it_works_step">
      <div className="circle cyan">3</div>
      <h4>Submit & Get Feedback</h4>
      <p>
        Receive AI + community feedback.
        Earn points and climb the leaderboard.
      </p>
    </div>

  </div>

</div>

<LearningPaths/>
<CodeReviewAd/>
<PremiumAd/>
<JoinCommunity/>
<LeaderAd/>
<Fq/>

<div className="start_wrapper">
      <div className="start_card">
        <h1>
          Start Building Real-World <br />
          Projects Today
        </h1>

        <p>
          Join thousands of developers mastering frontend development through
          hands-on challenges and AI-powered feedback.
        </p>

        <div className="start_buttons">
          <Btn text='Get Started Free' />
          <button className="secondary-btn">
            Browse Challenges
          </button>
        </div>

        <small>
          No credit card required • 30-day money-back guarantee
        </small>
      </div>
    </div>

      {/* <UserProfile/> */}
    </div>
  );
};

export default HomePage;
