import React, { useState } from "react";
import "../submitChallenge/SubmitChallenge.css";
import Primary from "../buttons/Primary";
import { IoMdClose } from "react-icons/io";

const SubmitChallenge = ({
  title = "Solution Information",
  defaultValues = {
    projectTitle: "",
    repoUrl: "",
    liveUrl: "",
  },
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <div className="submit_challenge_wrapper">
      <div className="submit_challenge_header">
        <h3>{title}</h3>
        <IoMdClose
          className="submit_challenge_icon"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />
      </div>

      <form className="submit_challenge_form" onSubmit={handleSubmit}>
        <div className="submit_challenge_form_control">
          <label htmlFor="projectTitle">Project Title</label>
          <input
            type="text"
            name="projectTitle"
            placeholder="e.g Banking Landing page"
            value={formData.projectTitle}
            onChange={handleChange}
          />
        </div>

        <div className="submit_challenge_form_control">
          <label htmlFor="repoUrl">Repository URL</label>
          <input
            type="text"
            name="repoUrl"
            placeholder="GitHub repo link"
            value={formData.repoUrl}
            onChange={handleChange}
          />
        </div>

        <div className="submit_challenge_form_control">
          <label htmlFor="liveUrl">Live Site URL</label>
          <input
            type="text"
            name="liveUrl"
            placeholder="Deployed site link"
            value={formData.liveUrl}
            onChange={handleChange}
          />
        </div>

        <div className="submit_challenge_form_control">
          <label htmlFor="liveUrl">Notes  <span className="submit_challenge_notes"> ( Optional )</span></label>
         <textarea name="" id="" placeholder="Explain your experience"></textarea>
        </div>

        <div className="submit_challege_btn">
          <Primary type="button" className="cancel-btn sumbit_solution_btns" onClick={onClose}>Cancel</Primary>
          <Primary type="button" className="sumbit_solution_btns">Submit</Primary>
        </div>
      </form>
    </div>
  );
};

export default SubmitChallenge;
