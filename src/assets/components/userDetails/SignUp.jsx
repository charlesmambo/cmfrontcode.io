import React from 'react';
import { IoEyeOffOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import TextInput from '../customInputs/TextInput';
import { LuUser } from 'react-icons/lu';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Primary from '../buttons/Primary';

const SignUp = ({ onSwitchToLogin }) => {
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
            <TextInput
                label="Full Name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                icon={LuUser}
                name="fullName"
                required
            />
          </div>
          <div className="form-control">
                <TextInput
                label="Email Address"
                placeholder="Enter your email"
                icon={MdOutlineEmail}
                name="Email"
                required
            />
          </div>

          <div className="form-control">
            <TextInput
                label="Password"
                placeholder="At least 8 Characters"
                icon={RiLockPasswordLine}
                name="Pasword"
                required
                type="password"
            />
            <IoEyeOffOutline className="psswd-icon" />
          </div>
          <div className="form-control">
            <TextInput
                label="Confirm Password"
                placeholder="Re-enter password"
                icon={RiLockPasswordLine}
                name="Pasword"
                required
                type="password"
            />
            <IoEyeOffOutline className="psswd-icon" />
          </div>

          <div className="login-form-submit-btn">
            <Primary type="submit">
                Create Account
            </Primary>
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
              <span className="create-account-text-link"
              onClick={onSwitchToLogin}
              >Sign in here</span>
            </p>
          </div>
        </form>
      </div>

    </div>
    </div>
  )
}

export default SignUp