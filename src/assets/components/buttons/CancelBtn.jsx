import React from 'react'

const CancelBtn = ({ onClick }) => {
  return (
    <div className="global_action_btn">
      <button
        type="button"
        className="cancel_btn"
        onClick={onClick}
      >
        Cancel
      </button>
    </div>
  )
}

export default CancelBtn