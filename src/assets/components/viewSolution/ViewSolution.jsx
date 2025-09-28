import React from 'react';
import '../viewSolution/ViewSolution.css'

const ViewSolution = () => {
  return (
    <div className='view_solution_wrapper'>
        <div className="view_solution_content_wrapper">
        <div className="view_solution_content">
        <div className="view_solution_content_profile">
        <div className="view_solution_content_profile_img">
        <img src="" />
        </div>
        <div className="view_solution_profile_info">
            <p className='view_solution_user_name'>Charles M</p>
            <div className="view_solution_profile_content">
            <p className='view_solution_profile_info_text'>
            <span>@username</span>
            </p>
            <p className='view_solution_profile_info_text'>
            <span>100</span>  
            points
            </p>
            </div>
        </div>        
        </div>
        <h4>Leave your feedback</h4>
        </div>

        <div className="view_solution_img_container">
            <div className="view_solution_img"></div>
        </div>
        </div>
        
    </div>
  )
}

export default ViewSolution