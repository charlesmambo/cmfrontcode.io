import React from 'react'

const CompletedChallenge = () => {
  return (
    <div className='complete_challenge_card'>
        <div className="complete_challenge_card_header">
            <h4>Interactive Rating Component</h4>
            <p className='complete_challenge_card_header_level'>Newbie</p>
        </div>

        <div className="complete_challenge_card_content">
            <p className='complete_challenge_check'>
                <span>Completed</span>
                <span className='complete_challenge_date'>10/01/2025</span> 
            </p>
            <p className='complete_challenge_check ccp'>
                <span>Points Earned</span>
                <span className='complete_challenge_points'>+120</span>
            </p>
            <p className='complete_challenge_card_leng'>
                <span>html</span>
                <span>css</span>
                <span>JavaScript</span>
            </p>
        </div>
    </div>
  )
}

export default CompletedChallenge