import React from 'react';
import '../reset/ResetPassword.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const ResetPassword = ({ onClose }) => {
  return (
    <div className='reset-password-container'>
      <h2>Forgot your password?</h2>
      <p>No worries! We'll email you a secure reset link to get you back into your account.</p>

      <IoIosCloseCircleOutline
        className='pswd-reset-icon'
        onClick={onClose}
        style={{ cursor: 'pointer' }}
      />

      <form>
        <div className="psswd-form-control">
          <label>Email Address</label>
          <input className='psswd-reset-input' type="email" placeholder='Enter your email address' />
          <MdOutlineMail className='pswd-email-icon' />
        </div>
        <div className="login-form-submit-btn reset-pwd-btn">
          <button type="submit">Send Reset Link</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
