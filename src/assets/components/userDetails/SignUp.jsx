import React from 'react';
import { IoEyeOffOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div>
    <div className="login-form-main">
      <div className="side-form-container">
        <h2>
          Start your 
            <span className="side-form-styled-text"> creative coding journey </span>  
          today
        </h2>
        <p>
          Level up your frontend skills with real-world challenges. Build, learn, and showcase your talent alongside thousands of developers.
        </p>

        <div className="challenges-count">
          <h3>500+ <span>Challenges</span></h3>
          <h3>50k <span>Solutions</span></h3>
        </div>
      </div>

      <div className="login-form-wrapper">
        <h2>Create your account</h2>
        <p>Join the community and start building amazing projects.</p>

        <form action="" className="login-form">
          <div className="form-control">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="form-control">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-control">
            <label>Password</label>
            <input type="password" placeholder="At least 8 Characters" />
            <IoEyeOffOutline className="psswd-icon" />
          </div>
          <div className="form-control">
            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter password" />
            <IoEyeOffOutline className="psswd-icon" />
          </div>

          <div className="login-form-submit-btn">
            <button type="submit">Create Account</button>
          </div>

          <div className="other-login-option">
            <div className="login-option-headings">
              <div className="divider"></div>
              <p> or continue with </p>
              <div className="divider"></div>
            </div>

            <div className="google-github-btn-container">
              <button>
                <IoLogoGithub />
                GitHub
              </button>
              <button>
                <FcGoogle />
                Google
              </button>
            </div>

            <p className="create-account-text">
              Already have an account?
              <span className="create-account-text-link">Sign in here</span>
            </p>
          </div>
        </form>
      </div>

    </div>
    </div>
  )
}

export default SignUp