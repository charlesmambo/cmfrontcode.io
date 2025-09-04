import React from 'react';
import '../challenges/Challenges.css';
import { RiSearchLine } from "react-icons/ri";
import Filter from '../../assets/components/filter/Filter';
import CustomCard from '../../assets/components/customCard/CustomCard';
import IMG from "../../../public/img1.png";
import IMG2 from "../../../public/img2.png";

const options = [
  "All Difficulties",
  "Newbie",
  "Beginner",
  "Junior",
  "Intermediate",
  "Advanced",
  "Guru",
];
const category = [
  "All Categories",
  "HTML & CSS",
  "Javascript",
  "React",
];

const Challenges = () => {

const handleSelect = (value) => {
    console.log("Selected:", value);
  };
  return (
    <div className="challenges_main_wrapper">
        <div className="filter_section_container">
            <div className="search_bar">
                <RiSearchLine className='search_bar_icon'/>
               <input type="text" className='search_bar_input' name="search-bar" placeholder='Search challenges...' /> 
            </div>
            <div className="filter_category_container">
                <Filter options={options} defaultValue="All Difficulties" onSelect={handleSelect}/>
            </div>
            <div className="filter_category_container">
                <Filter options={category} defaultValue="All Categories" onSelect={handleSelect}/>
            </div>
        </div>
        
        <div className="custom_card_container_wrapper">
        <div className="custom_card_container">
            <CustomCard
                image={IMG}
                title="Order summary component"
                description="A perfect project for newbies who are starting to build confidence with layouts!"
                languages={["html", "css"]}
                buttonText="Start Challenge"
                onButtonClick={() => alert("Challenge Started!")}
            />
            <CustomCard
                image={IMG2}
                title="Stats preview card component"
                description="This is a great small challenge to help get you used to building to a design."
                languages={["html", "css"]}
                buttonText="Start Challenge"
                onButtonClick={() => alert("Challenge Started!")}
            />
            <CustomCard
                image={IMG}
                title="Social Media Dashboard"
                description="Build a comprehensive social media analytics dashboard with charts and metrics"
                languages={["html", "css", "React"]}
                buttonText="Start Challenge"
                onButtonClick={() => alert("Challenge Started!")}
            />
        </div>
        <div className="custom_card_container">
            <CustomCard
                image={IMG}
                title="Interactive rating component"
                description="This is a nice, small project to practice handling user interactions and updating the DOM."
                languages={["html", "css", "Javascript"]}
                buttonText="Start Challenge"
                onButtonClick={() => alert("Challenge Started!")}
            />
            <CustomCard
                image={IMG}
                title="3-column preview card component"
                description="This challenge is perfect for anyone wanting to test their CSS Grid skills."
                languages={["html", "css"]}
                buttonText="Start Challenge"
                onButtonClick={() => alert("Challenge Started!")}
            />
            <CustomCard
                image={IMG}
                title="E-commerce Product Card"
                description="Create a responsive product card with image, price, and add to cart functionality"
                languages={["html", "css", "Javascript"]}
                buttonText="Start Challenge"
                onButtonClick={() => alert("Challenge Started!")}
            />
        </div>
        </div>
    </div>
  )
}

export default Challenges