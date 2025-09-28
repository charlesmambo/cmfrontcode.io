import React from 'react';
import IMG1 from '../../../public/sn6.png';
import IMG2 from '../../../public/sn3.png';
import IMG3 from '../../../public/sn4.png';
import IMG4 from '../../../public/sn5.png';
import SolutionCard from '../../assets/components/solutionsCard/SolutionCard';
import '../solutions/SolutionsList.css';
import ViewSolution from '../../assets/components/viewSolution/ViewSolution';

const SolutionsList = () => {
  return (
    <div className='all_solution_wrapper'>
      <div className="all_solution_container">
      <SolutionCard
        title="Interactive rating component"
        image={IMG1}
        profileImage={IMG1}
        userName="Charles Mambo"
        points={160}
        timeAgo="about 2 hours ago"
        likes={12}
        comments={4}
        views={45}
        externalLink="https://example.com"
        githubLink="https://github.com/example"
      />
      <SolutionCard
        title="Landing page"
        image={IMG2}
        profileImage={IMG2}
        userName="Charles Mambo"
        points={160}
        timeAgo="about 2 hours ago"
        likes={22}
        comments={4}
        views={88}
        externalLink="https://example.com"
        githubLink="https://github.com/example"
      />
      <SolutionCard
        title="Interactive rating component"
        image={IMG1}
        profileImage={IMG1}
        userName="Charles Mambo"
        points={160}
        timeAgo="about 2 hours ago"
        likes={17}
        comments={4}
        views={65}
        externalLink="https://example.com"
        githubLink="https://github.com/example"
      />
      <SolutionCard
        title="Job listing landing page"
        image={IMG3}
        profileImage={IMG3}
        userName="Charles Mambo"
        points={200}
        timeAgo="about 2 hours ago"
        likes={32}
        comments={9}
        views={95}
        externalLink="https://example.com"
        githubLink="https://github.com/example"
      />
      <SolutionCard
        title="Interactive rating component"
        image={IMG1}
        profileImage={IMG1}
        userName="Charles Mambo"
        points={160}
        timeAgo="about 2 hours ago"
        likes={52}
        comments={9}
        views={75}
        externalLink="https://example.com"
        githubLink="https://github.com/example"
      />
      <SolutionCard
        title="Interactive rating component"
        image={IMG4}
        profileImage={IMG4}
        userName="Charles Mambo"
        points={160}
        timeAgo="about 2 hours ago"
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
