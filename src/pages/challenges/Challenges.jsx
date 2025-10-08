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
              {challengesData.map((challenge, index) => {
                let challengeLevel = "Newbie";

                // Determine challenge level
                const langs = challenge.languages.map((l) => l.toLowerCase());
                if (langs.includes("react")) {
                  challengeLevel = "Advanced";
                } else if (
                  langs.includes("javascript") &&
                  langs.includes("html") &&
                  langs.includes("css")
                ) {
                  challengeLevel = "Intermediate";
                }

                return (
                  <CustomCard
                    key={index}
                    image={challenge.image}
                    title={challenge.title}
                    description={challenge.description}
                    languages={challenge.languages}
                    buttonText="Start Challenge"
                    challengeLevel={challengeLevel} // Pass level to card
                    onButtonClick={() =>
                      setSelectedChallenge({ ...challenge, level: challengeLevel })
                    }
                  />
                );
              })}
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
            level: selectedChallenge.level, // Pass level dynamically
            price: "Free",
            title: selectedChallenge.title,
            description: selectedChallenge.description,
          }}
          resources={[
            { icon: GrView, title: "View Example Solutions" },
            { icon: HiOutlineChatBubbleOvalLeft, title: "Join Discussion" },
          ]}
          stats={[
            { value: "15,420", label: "Participants", color: "start_challenge_stats_blue" },
            { value: "11,256", label: "Completed", color: "start_challenge_stats_green" },
          ]}
        />
      )}
    </div>
  );
};

export default Challenges;
