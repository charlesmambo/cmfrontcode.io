import React from 'react';
import '../learningPath/LearningPath.css';
import Primary from '../../assets/components/buttons/Primary';
import SmallCard from '../../assets/components/cards/SmallCard';
import { CgFileDocument } from "react-icons/cg";
import { LuUsers } from "react-icons/lu";
import { AiOutlineInteraction } from "react-icons/ai";
import { MdOutlineCalendarToday } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";

const LearningPath = () => {
  return (
    <section className='learning-path-container'>
        <div className="learning-path-container-intro">
            <h1>Master Frontend Development</h1>
            <p>Accelerate your coding journey with personalized learning paths, exclusive documents, and weekly one-on-one mentoring sessions with industry experts.</p>

            <div className="learning-path-container-intro-btn">
            <Primary type="submit" className='solid-btn'>
               Start You Journey
            </Primary>
            <Primary type="submit" className='outline-btn'>
               View Roadmap
            </Primary>
            </div>
        </div>

        <div className="why-choose-us-wrapper">
            <div className="why-choose-us-wrapper-intro">
            <h2>Why Choose Our Platform?</h2>
            <p>We provide everything you need to become a successful frontend developer, from beginner to expert level.</p>
            </div>


            <div className="why-choose-us-card-wrapper">
                    <SmallCard
                    icon={CgFileDocument}
                    title="Comprehensive Documents"
                    subtitle="500+ Docs"
                    description="Access hundreds of detailed guides, cheat sheets, and reference materials"
                     />
                    <SmallCard
                    icon={LuUsers}
                    title="1-on-1 Mentoring"
                    subtitle="2h/week"
                    description="Weekly 2-hour personalized sessions with senior developers"
                    className='mentoring-card'
                     />
                    <SmallCard
                    icon={AiOutlineInteraction}
                    title="Interactive Learning"
                    subtitle="/ Coding"
                    description="Hands-on projects and coding challenges with real-time feedback"
                    className='community-card'
                     />
                    <SmallCard
                    icon={MdOutlineCalendarToday}
                    title="Flexible Schedule"
                    subtitle="24/7 Access"
                    description="Learn at your own pace with personalized scheduling"
                     />
                    <SmallCard
                    icon={LuMessageCircle }
                    title="Community Support"
                    subtitle="500+ Members"
                    description="Connect with peers and get help from our active community"
                    className='community-card'
                     />
            </div>
        </div>

    </section>
  )
}

export default LearningPath