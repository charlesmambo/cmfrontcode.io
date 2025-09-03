import React from 'react';
import '../challenges/Challenges.css';
import { RiSearchLine } from "react-icons/ri";
import Filter from '../../assets/components/filter/Filter';

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
    </div>
  )
}

export default Challenges