import React from 'react';
import '../learningPath/LearningPath.css';
import Primary from '../../assets/components/buttons/Primary';
import SmallCard from '../../assets/components/cards/SmallCard';
import { CgFileDocument } from "react-icons/cg";
import { LuUsers } from "react-icons/lu";
import { AiOutlineInteraction } from "react-icons/ai";
import { MdOutlineCalendarToday } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";
import CourseCard from '../../assets/components/cards/CourseCard';

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
                      <SmallCard
                    icon={LuUsers}
                    title="1-on-1 Mentoring"
                    subtitle="2h/week"
                    description="Weekly 2-hour personalized sessions with senior developers"
                    className='mentoring-card'
                     />
            </div>
        </div>

        <div className="why-choose-us-wrapper">
            <div className="why-choose-us-wrapper-intro">
            <h2>Choose Your Learning Path</h2>
            <p>Each path includes comprehensive documentation, weekly one-on-one mentoring sessions, and hands-on projects designed to accelerate your growth.</p>
            </div>


            <div className="why-choose-us-card-wrapper">
                  <CourseCard
                    title="Frontend Fundamentals"
                    description="Master HTML, CSS, and JavaScript from scratch with hands-on projects and expert guidance."
                    duration="8–12 weeks"
                    documents="45 Docs"
                    features={["HTML5 & Semantic markup", "CSS3 & Flexbox/Grid"]}
                    onViewCourse={() => console.log("Viewing course...")}
                    className='blue-green'
                    />
                    
                  <CourseCard
                    title="Advanced CSS & Animations"
                    description="Master modern CSS techniques, animations, and responsive design patterns."
                    duration="8–12 weeks"
                    documents="52 Docs"
                    features={["CSS Grid & Flexbox mastery", "CSS animations & transitions"]}
                    onViewCourse={() => console.log("Viewing course...")}
                    className='mentoring-card'
                    />
                  <CourseCard
                    title="UI/UX Design Systems"
                    description="Create beautiful, accessible interfaces with modern design principles and tools."
                    duration="6–8 weeks"
                    documents="38 Docs"
                    features={["Design principles & typography", "Color theory & accessibility","Figma to code workflow"]}
                    onViewCourse={() => console.log("Viewing course...")}
                    className="blue-theme"
                    />
                  <CourseCard
                    title="Modern JavaScript Frameworks"
                    description="Explore Vue.js, Svelte, and other popular frontend frameworks beyond React."
                    duration="12–14 weeks"
                    documents="75 Docs"
                    features={["HTML5 & Semantic markup", "CSS3 & Flexbox/Grid"]}
                    onViewCourse={() => console.log("Viewing course...")}
                    className="blue-theme"
                    />
                  <CourseCard
                    title="Web Performance & SEO"
                    description="Optimize websites for speed, accessibility, and search engine rankings."
                    duration="6-8 weeks"
                    documents="42 Docs"
                    features={["Core Web Vitals optimization", "SEO best practices","Accessibility standards"]}
                    onViewCourse={() => console.log("Viewing course...")}
                    className='blue-green'
                    />
                  <CourseCard
                    title="Frontend Fundamentals"
                    description="Master HTML, CSS, and JavaScript from scratch with hands-on projects and expert guidance."
                    duration="8–12 weeks"
                    documents="45 Docs"
                    features={["HTML5 & Semantic markup", "CSS3 & Flexbox/Grid"]}
                    onViewCourse={() => console.log("Viewing course...")}
                    />
            </div>
        </div>

    </section>
  )
}

export default LearningPath