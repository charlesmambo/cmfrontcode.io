import React, { useState } from "react";
import "../challenges/Challenges.css";
import { RiSearchLine } from "react-icons/ri";
import Filter from "../../assets/components/filter/Filter";
import CustomCard from "../../assets/components/customCard/CustomCard";
import IMG from "../../../public/img1.png";
import IMG2 from "../../../public/img2.png";
import StartChallenge from "../../assets/components/startChallenge/StartChallenge";
import { LuDownload, LuCodeXml } from "react-icons/lu";
import SubmitChallenge from "../../assets/components/submitChallenge/SubmitChallenge";

const options = [
  "All Difficulties",
  "Newbie",
  "Beginner",
  "Junior",
  "Intermediate",
  "Advanced",
  "Guru",
];
const category = ["All Categories", "HTML & CSS", "Javascript", "React"];

const Challenges = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [showSubmitChallenge, setShowSubmitChallenge] = useState(false);

  const handleSelect = (value) => {
    console.log("Selected:", value);
  };

  const challengesData = [
    {
      image: IMG,
      title: "Order summary component",
      description:
        "A perfect project for newbies who are starting to build confidence with layouts!",
      languages: ["html", "css"],
    },
    {
      image: IMG2,
      title: "Stats preview card component",
      description:
        "This is a great small challenge to help get you used to building to a design.",
      languages: ["html", "css"],
    },
    {
      image: IMG,
      title: "Social Media Dashboard",
      description:
        "Build a comprehensive social media analytics dashboard with charts and metrics",
      languages: ["html", "css", "React"],
    },
    {
      image: IMG,
      title: "Interactive rating component",
      description:
        "This is a nice, small project to practice handling user interactions and updating the DOM.",
      languages: ["html", "css", "Javascript"],
    },
    {
      image: IMG,
      title: "3-column preview card component",
      description:
        "This challenge is perfect for anyone wanting to test their CSS Grid skills.",
      languages: ["html", "css"],
    },
    {
      image: IMG,
      title: "E-commerce Product Card",
      description:
        "Create a responsive product card with image, price, and add to cart functionality",
      languages: ["html", "css", "Javascript"],
    },
  ];

  return (
    <div className="challenges_main_wrapper">
      {!selectedChallenge ? (
        <>
          {/* Filters */}
          <div className="filter_section_container">
            <div className="search_bar">
              <RiSearchLine className="search_bar_icon" />
              <input
                type="text"
                className="search_bar_input"
                name="search-bar"
                placeholder="Search challenges..."
              />
            </div>
            <div className="filter_category_container">
              <Filter
                options={options}
                defaultValue="All Difficulties"
                onSelect={handleSelect}
              />
            </div>
            <div className="filter_category_container">
              <Filter
                options={category}
                defaultValue="All Categories"
                onSelect={handleSelect}
              />
            </div>
          </div>

          {/* Cards */}
          <div className="custom_card_container_wrapper">
            <div className="custom_card_container">
              {challengesData.map((challenge, index) => (
                <CustomCard
                  key={index}
                  image={challenge.image}
                  title={challenge.title}
                  description={challenge.description}
                  languages={challenge.languages}
                  buttonText="Start Challenge"
                  onButtonClick={() => setSelectedChallenge(challenge)}
                />
              ))}
            </div>
          </div>
        </>
      ) : showSubmitChallenge ? (
        <SubmitChallenge onClose={() => setShowSubmitChallenge(false)} />
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
            level: "Beginner",
            price: "Free",
            title: selectedChallenge.title,
            description: selectedChallenge.description,
          }}
          resources={[
            {
              icon: LuDownload,
              title: "Download Assets",
              subtitle: "Design file & images",
            },
            {
              icon: LuCodeXml,
              title: "Submit Solution",
              subtitle: "Share your Work",
              onClick: () => setShowSubmitChallenge(true),
            },
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
