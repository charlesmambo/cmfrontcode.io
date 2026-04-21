import React, { useState } from "react";
import "../challenges/Challenges.css";
import { RiSearchLine } from "react-icons/ri";
import Filter from "../../assets/components/filter/Filter";
import CustomCard from "../../assets/components/customCard/CustomCard";
import IMG from "../../../public/img1.png";
import IMG2 from "../../../public/img2.png";
import StartChallenge from "../../assets/components/startChallenge/StartChallenge";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { GrView } from "react-icons/gr";

const Challenges = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  // ✅ CLEAN DATA MODEL (no guessing anymore)
  const challengesData = [
    {
      image: IMG,
      title: "Order summary component",
      description:
        "A perfect project for newbies who are starting to build confidence with layouts!",
      languages: ["HTML", "CSS"],
      level: "Newbie",
      isPremium: false,
    },
    {
      image: IMG2,
      title: "Stats preview card component",
      description:
        "This is a great small challenge to help get you used to building to a design.",
      languages: ["HTML", "CSS"],
      level: "Newbie",
      isPremium: false,
    },
    {
      image: IMG,
      title: "Social Media Dashboard",
      description:
        "Build a comprehensive social media analytics dashboard with charts and metrics",
      languages: ["HTML", "CSS", "React"],
      level: "Advanced",
      isPremium: true,
    },
    {
      image: IMG,
      title: "Interactive rating component",
      description:
        "Practice handling user interactions and updating the DOM.",
      languages: ["HTML", "CSS", "JavaScript"],
      level: "Intermediate",
      isPremium: false,
    },
    {
      image: IMG2,
      title: "Interactive rating component",
      description:
        "Practice handling user interactions and updating the DOM.",
      languages: ["HTML", "CSS", "JavaScript"],
      level: "Intermediate",
      isPremium: true,
    },
    {
      image: IMG,
      title: "Interactive rating component",
      description:
        "Practice handling user interactions and updating the DOM.",
      languages: ["HTML", "CSS", "JavaScript"],
      level: "Intermediate",
      isPremium: false,
    },
  ];

  return (
    <div className="challenges_main_wrapper">
      {!selectedChallenge ? (
        <>
          {/* HERO */}
          <div className="challenges_header">
            <h1>Challenges</h1>
            <p className="subtitle">
              Practice real-world frontend development skills
            </p>
            <p className="count">
              {challengesData.length} challenges available
            </p>
          </div>

          {/* FILTER BAR */}
          <div className="filter_container">
            <input
              type="text"
              placeholder="Search challenges..."
              className="filter_input"
            />

            <div className="select_wrapper">
              <select className="filter_select">
                <option>All Levels</option>
                <option>Newbie</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div className="select_wrapper">
              <select className="filter_select">
                <option>All Languages</option>
                <option>HTML</option>
                <option>CSS</option>
                <option>JavaScript</option>
                <option>React</option>
              </select>
            </div>

            <div className="select_wrapper">
              <select className="filter_select">
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>

          {/* CARDS */}
          <div className="custom_card_container_wrapper">
            <div className="custom_card_container">
              {challengesData.map((challenge, index) => (
                <CustomCard
                  key={index}
                  image={challenge.image}
                  title={challenge.title}
                  description={challenge.description}
                  languages={challenge.languages}
                  challengeLevel={challenge.level}
                  isPremium={challenge.isPremium}
                  onButtonClick={() => setSelectedChallenge(challenge)}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <StartChallenge
          onBack={() => setSelectedChallenge(null)}
          steps={[
            { number: 1, title: "Step 1", text: "Start challenge", active: true },
            { number: 2, title: "Step 2", text: "Download assets", active: true },
            { number: 3, title: "Step 3", text: "Submit solution", active: false },
            { number: 4, title: "Step 4", text: "Review solutions", active: false },
          ]}
          challenge={{
            language: selectedChallenge.languages.join(", "),
            level: selectedChallenge.level,
            price: selectedChallenge.isPremium ? "Premium" : "Free",
            title: selectedChallenge.title,
            description: selectedChallenge.description,
          }}
          resources={[
            { icon: GrView, title: "View Example Solutions" },
            { icon: HiOutlineChatBubbleOvalLeft, title: "Join Discussion" },
          ]}
          stats={[
            {
              value: "15,420",
              label: "Participants",
              color: "start_challenge_stats_blue",
            },
            {
              value: "11,256",
              label: "Completed",
              color: "start_challenge_stats_green",
            },
          ]}
        />
      )}
    </div>
  );
};

export default Challenges;
