import React from 'react'

const SaveBtn = ({ onClick }) => {
  return (
    <div className="global_action_btn">
      <button
        type="button"
        className="edit_btn"
        onClick={onClick}
      >
        Save Changes
      </button>
    </div>
  )
}

export default SaveBtn