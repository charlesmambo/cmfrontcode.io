import React from 'react';
import { SlBadge } from "react-icons/sl";


const Achievement = () => {
  return (
    <div className='achivements_action_card'>
        <h4>Achievements</h4>

        <div className="achivements_action_card_content_wrapper">
          <div className="achivements_action_card_content">
            <SlBadge className='achivements_action_card_icon'/> 
            <div className="achivements_action_card_heading">
                <h5>First Challenge</h5>
                <p className='achivements_action_card_heading_text'>Complete your first challenge</p>
            </div>
           </div>
          <div className="achivements_action_card_content">
            <SlBadge className='achivements_action_card_icon'/> 
            <div className="achivements_action_card_heading">
                <h5>Code Reviewer</h5>
                <p className='achivements_action_card_heading_text'>Give 10 helpful reviews</p>
            </div>
           </div>
          <div className="achivements_action_card_content">
            <SlBadge className='achivements_action_card_icon'/> 
            <div className="achivements_action_card_heading">
                <h5>Point Collector</h5>
                <p className='achivements_action_card_heading_text'>Earn 1000 points</p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Achievement