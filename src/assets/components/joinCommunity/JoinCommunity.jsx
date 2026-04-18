import React from 'react';
import '../joinCommunity/JoinCommunity.css';
import { FaDiscord } from "react-icons/fa";
import { LuGitPullRequestArrow } from "react-icons/lu";
import { BiSolidMessageRounded } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";


const JoinCommunity = () => {
const cards = [
  {
    title: "Discord Community",
    desc: "Real-time chat with 5,000+ developers",
    link: "Join Discord →",
    color: "indigo",
    icon: <FaDiscord />,
  },
  {
    title: "Code Reviews",
    desc: "Get feedback from experienced devs",
    link: "Request Review →",
    color: "cyan",
    icon: <LuGitPullRequestArrow />,
  },
  {
    title: "Discussions",
    desc: "Ask questions and share knowledge",
    link: "Browse Topics →",
    color: "purple",
    icon: <BiSolidMessageRounded />,
  },
  {
    title: "Mentorship",
    desc: "Connect with senior developers",
    link: "Find a Mentor →",
    color: "pink",
    icon: <HiUsers />,
  },
];

  return (
    <section className="join_community">

      <div className="join_community_container">
        <p className="join_community_tag">CONNECT & LEARN</p>

        <h2 className="join_community_title">
          Join a Growing Developer Community
        </h2>

        <p className="join_community_subtitle">
          Learn from others, share your work, and grow together with thousands of developers.
        </p>

        <div className="join_community_cards">
          {cards.map((card, index) => (
            <div key={index} className={`join_community_card join_community_card--${card.color}`}>
              <div className="join_card_icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <a href="#">{card.link}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JoinCommunity