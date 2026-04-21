import React from 'react';
import IMG1 from '../../../public/sn6.png';
import IMG2 from '../../../public/sn3.png';
import IMG3 from '../../../public/sn4.png';
import IMG4 from '../../../public/sn5.png';
import SolutionCard from '../../assets/components/solutionsCard/SolutionCard';
import '../solutions/SolutionsList.css';
import ViewSolution from '../../assets/components/viewSolution/ViewSolution';
import { RiSearchLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";


const SolutionsList = () => {
  return (
    <div className='all_solution_wrapper'>
      <div className="all_solution_content_container_title">
            <h2> <FiUsers className='users'/>Community Solutions</h2>
            <p>Explore solutions submitted by developers from around the world</p>
        </div>
      <div className="all_solution_container">
      <SolutionCard
        id={1}
        title="Interactive rating component"
        image={IMG1}
        profileImage={IMG1}
        userName="Charles Mambo"
        points={160}
        timeAgo="2hrs ago"
        likes={12}
        comments={4}
        views={45}
        externalLink="https://example.com"
        githubLink="https://github.com/example"
      />
      <SolutionCard
        id={2}
        title="Landing page"
        image={IMG2}
        profileImage={IMG2}
        userName="Charles Mambo"
        points={160}
        timeAgo="2hrs ago"
        likes={22}
        comments={4}
        views={88}
        externalLink="https://example.com"
        githubLink="https://github.com/example"
      />
      <SolutionCard
        id={3}
        title="Interactive rating component"
        image={IMG1}
        profileImage={IMG1}
        userName="Charles Mambo"
        points={160}
        timeAgo="2hrs ago"
        likes={17}
        comments={4}
        views={65}
        externalLink="https://example.com"
        githubLink="https://github.com/example"
      />
      <SolutionCard
        id={4}
        title="Job listing landing page"
        image={IMG3}
        profileImage={IMG3}
        userName="Charles Mambo"
        points={200}
        timeAgo="2hrs ago"
        likes={32}
        comments={9}
        views={95}
        externalLink="https://example.com"
        githubLink="https://github.com/example"
      />
      <SolutionCard
        id={5}
        title="Interactive rating component"
        image={IMG1}
        profileImage={IMG1}
        userName="Charles Mambo"
        points={160}
        timeAgo="1d ago"
        likes={52}
        comments={9}
        views={75}
        externalLink="https://example.com"
        githubLink="https://github.com/example"
      />
      <SolutionCard
        id={6}
        title="Interactive rating component"
        image={IMG4}
        profileImage={IMG4}
        userName="Charles Mambo"
        points={160}
        timeAgo="2d ago"
        likes={82}
        comments={14}
        views={45}
        externalLink="https://example.com"
        githubLink="https://github.com/example"
      />
      </div>
      {/* <ViewSolution/> */}
    </div>
  );
};

export default SolutionsList;
