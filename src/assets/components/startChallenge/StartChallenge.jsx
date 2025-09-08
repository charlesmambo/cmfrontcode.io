import React from 'react';
import '../startChallenge/StartChallenge.css';
import { MdOutlineArrowBack } from "react-icons/md";
import Primary from '../buttons/Primary';
import { LuDownload } from "react-icons/lu";
import { LuCodeXml } from "react-icons/lu";



const StartChallenge = () => {
  return (
    <div className='start_challenge_wrapper'>
        <div className="back_btn">
            <MdOutlineArrowBack className='back_icon' />
            back to  challenge
        </div>
       <div className="start_challenge_steps">
         <div className="step_card">
            <div className="step_num">1</div>
            <div className="step_content">
                <p className='step_headings'>step 1</p>
                <p className='step_challenge_text'>step challenge</p>
            </div>
         </div>
         <div className="step_card">
            <div className="step_num">2</div>
            <div className="step_content">
                <p className='step_headings'>step 2</p>
                <p className='step_challenge_text'>Download assets</p>
            </div>
         </div>
         <div className="step_card">
            <div className="step_num step_num_grey">3</div>
            <div className="step_content">
                <p className='step_headings'>step 3</p>
                <p className='step_challenge_text'>Submit solution</p>
            </div>
         </div>
         <div className="step_card">
            <div className="step_num step_num_grey">4</div>
            <div className="step_content">
                <p className='step_headings'>step 4</p>
                <p className='step_challenge_text'>Review solutions</p>
            </div>
         </div>
       </div>

        <div className="start_challenge_content_wrapper">
       <div className="start_challenge_content">
         <div className="start_challenge_content_card">
            <div className="start_challenge_content_card_headings">
                <div className="start_challenge_content_card_headings_info">
                    <p className='start_challenge_content_card_headings_lang'>html & css</p>
                    <div className="start_challenge_content_card_headings_level">
                        Newbie
                    </div>
                </div>
                 <div className="start_challenge_content_card_headings_offer">
                        Free
                </div>
            </div>

            <div className="start_challenge_content_details">
                <h3>QR code component</h3>
                <p>This challenge is designed to sharpen your HTML and CSS skills. Working with responsive layouts and centering content can be tricky, so this will be a nice test!</p>
            </div>

            <Primary type="submit" className='start_challenge'>
              Start Challenge
            </Primary>
         </div>

         <div className="start_challenge_content_card start_challenge_content_card_resources">
           <h3>Challenge Resources</h3> 

           <div className="start_challenge_content_resources_wrapper">
           <div className="start_challenge_content_resources">
                <LuDownload className='resources_icon'/>
             <div className="start_challenge_content_resources_txt">
                <h4>Download assets</h4>
                <p>Design file & images</p>
             </div>
           </div>
           <div className="start_challenge_content_resources">
                <LuCodeXml  className='resources_icon'/>
             <div className="start_challenge_content_resources_txt">
                <h4>Submit Solution</h4>
                <p>Share your Work</p>
             </div>
           </div>
           </div>
         </div>
       </div>

     <div className="start_challenge_design_review_wrapper">
       <div className="start_challenge_design_review start_challenge_content_card">
         <h3>Design Preview</h3> 

         <div className="start_challenge_design_review_card">
            
         </div>
         <div className="start_challenge_design_review_toggles">
           <div className="design_review_toggle_btn">Desktop Design</div>
           <div className="design_review_toggle_btn design_review_toggle_outline">Mobile Design</div>
           <div className="design_review_toggle_btn design_review_toggle_outline">Active Design</div>
         </div>
       </div>

        <div className="start_challenge_content_card start_challenge_content_card_stats">
           <h3>Challenge Stats</h3> 

           <div className="start_challenge_content_resources_wrapper">
           <div className="start_challenge_stats start_challenge_stats_blue">
             <div className="start_challenge_statss">
                <h4>15,420</h4>
                <p>Participants</p>
             </div>
           </div>
           <div className="start_challenge_stats start_challenge_stats_green">
             <div className="sstart_challenge_statss">
                <h4>11,256</h4>
                <p>Completed</p>
             </div>
           </div>
           </div>
         </div>


       </div>

       </div>
    </div>
  )
}

export default StartChallenge