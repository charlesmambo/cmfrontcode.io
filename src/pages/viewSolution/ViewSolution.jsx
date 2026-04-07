import React from 'react'
import { useParams } from 'react-router-dom';;
import '../viewSolution/ViewSolution.css';
import { FaRegHeart } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const ViewSolution = () => {
    const { id } = useParams();
  return (
    <div className='view_solution_wrapper'>
        <div className="view_solution_title">
           <h2>View Solution </h2>
        </div>

        <div className="abt_view_solution_content">
            <div className="abt_view_solution_content_left">
            <div className="abt_view_solution_content_img">
               <img src="" alt="" />
            </div>
            <div className="abt_view_solution_content_title">
                <h4>#{id}</h4>
                <div className="abt_view_solution_content_leng">
                    <span>html</span>
                    <span>css</span>
                    <span>Javascript</span>
                </div>
            </div>
            <div className="abt_view_solution_content_fl_wrapper">
            <div className="abt_view_solution_content_fl">
                    <span>
                    <FaRegHeart className='fl_icon' />
                    34
                    </span>
                    <span>
                    <FaRegComments className='fl_icon'/>
                    55
                    </span>
                    <span>
                    <MdOutlineRemoveRedEye className='fl_icon'/>
                     86
                    </span>
            </div>
            </div>
            </div>

            <div className="abt_view_solution_content_profile_card">
                <div className="abt_view_solution_content_profile_card_intro">
                <div className="abt_view_solution_content_profile_card_img">

                </div>
                <div className="pn_content">
                    <h4>Charles Mambo</h4>
                    <p>Frontend Dev</p>
                </div>
                </div>

                <div className="user_growth">
                    <div className="user_growth_content">
                        <h4>160</h4>
                        <p>Followers</p>
                    </div>
                    <div className="user_growth_content ug_middle">
                        <h4>360</h4>
                        <p>Points</p>
                    </div>
                    <div className="user_growth_content">
                        <h4>3</h4>
                        <p>Level</p>
                    </div>
                </div>

                <div className="user_contributions">
                    <h4>Contributions</h4>
                    <div className="user_contributions_content">
                        <p>Code Reviews</p>
                        <span>18</span>
                    </div>
                    <div className="user_contributions_content">
                        <p>Comments</p>
                        <span>18</span>
                    </div>
                    <div className="user_contributions_content">
                        <p>Helped Users</p>
                        <span>18</span>
                    </div>
                    <div className="user_contributions_content">
                        <p>Completed Challenges</p>
                        <span>18</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ViewSolution