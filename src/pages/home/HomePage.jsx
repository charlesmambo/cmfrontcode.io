import React from 'react';
import '../home/HomePage.css';
import Primary from '../../assets/components/buttons/Primary';
import { PiBracketsAngleBold } from "react-icons/pi";
import { GoTrophy } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import { HiStar } from "react-icons/hi2";


const HomePage = () => {
  return (
    <div className="home_container">
        <div className="home_intro_section">
            <h1>Master Frontend Development with <span className='home_intro_span'>Real Design Challenges</span></h1>
            <p>Turn beautiful UI/UX designs into code. Build, submit, get reviewed, and earn points while mastering frontend development with real-world challenges.</p>

            <div className="home_intro_btns">
              <Primary 
              type="submit"
              className='home_intro_solid_btn'
              >
                 Get Started Free
              </Primary>
              <Primary 
              type="submit"
              className='home_intro_outline_btn'
              >
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
                <GoTrophy  />
              </div>
              <div className="home_everything_you_need_card_content">
                <h4>Points & Leaderboard</h4>
                <p>Earn points for quality submissions and climb the global leaderboard.</p>
              </div>
            </div>

            <div className="home_everything_you_need_card">
              <div className="home_everything_you_need_card_icon">
                <TbUsers  />
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

    </div>
  )
}

export default HomePage