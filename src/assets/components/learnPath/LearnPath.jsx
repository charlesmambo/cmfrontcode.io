import React from 'react'
import "../learnPath/LearnPath.css";
import { FaSeedling, FaReact, FaPenNib, FaBriefcase } from "react-icons/fa";

export default function LearningPaths() {
  const paths = [
    {
      icon: <FaSeedling />,
      title: "Beginner Frontend Path",
      desc: "Master HTML, CSS basics, and responsive design principles from the ground up.",
      challenges: 12,
    },
    {
      icon: <FaReact />,
      title: "React Developer Path",
      desc: "Components, hooks, state management, and Next.js. Build production-ready apps.",
      challenges: 18,
    },
    {
      icon: <FaPenNib />,
      title: "UI/UX Implementation Path",
      desc: "Design systems, accessibility, animations, and pixel-perfect execution.",
      challenges: 15,
    },
    {
      icon: <FaBriefcase />,
      title: "Interview Prep Path",
      desc: "Common frontend interview challenges. Algorithm visualization and optimization.",
      challenges: 20,
    },
  ];

  return (
    <section className="learning">
      <div className="learning_header">
        <h1>Level Up with Learning Paths</h1>
        <p>
          Follow curated roadmaps designed to take you from beginner to expert.
          Each path includes challenges, resources, and milestones.
        </p>
      </div>

      <div className="learning_cards">
        {paths.map((path, i) => (
          <div key={i} className="learn_card">
            <div className="learn_card_icon">{path.icon}</div>

            <h3>{path.title}</h3>
            <p>{path.desc}</p>

            <div className="learn_card_progress">
              <span>{path.challenges} Challenges</span>
              <span>0%</span>
            </div>

            <div className="learn_card_progress_bar">
              <div className="learn_progress" style={{ width: "0%" }} />
            </div>

            <button>Start Path</button>
          </div>
        ))}
      </div>
    </section>
  );
}