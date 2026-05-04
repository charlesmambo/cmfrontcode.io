import React, { useEffect, useState } from 'react';
import { IoEyeOffOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import TextInput from '../customInputs/TextInput';
import { LuUser } from 'react-icons/lu';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Primary from '../buttons/Primary';
import { FaRegEye } from "react-icons/fa6";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Btn from '../buttons/Btn';

const SignUp = ({ onSwitchToLogin }) => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Password toggle state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Password toggle functions
  const togglePassword = () => setShowPassword(prev => !prev);
  const toggleConfirm = () => setShowConfirm(prev => !prev);

  // Form validation
  const validateForm = () => {
    if (!name.trim()) return "Full Name is required.";
    if (!email.trim()) return "Email Address is required.";
    if (!/\S+@\S+\.\S+/.test(email)) return "Please enter a valid email.";
    if (!password) return "Password is required.";
    if (password.length < 8) return "Password must be at least 8 characters.";
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) 
      return "Password must include at least one special character.";
    if (password !== confirmPassword) return "Passwords do not match.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      toast.error(error, { position: "top-right", autoClose: 4000 });
      return;
    }
    toast.success("Account created successfully!", { position: "top-right", autoClose: 4000 });
    // Continue with your signup logic here
  };

  return (
    <div className="login-form-main">
      <div className="side-form-container">
        <h2>
          Start your <span className="side-form-styled-text">creative coding journey</span> today
        </h2>
        <p>Level up your frontend skills with real-world challenges. Build, learn, and showcase your talent.</p>
        <div className="challenges-count">
          <h3>500+ <span>Challenges</span></h3>
          <h3>50k <span>Solutions</span></h3>
        </div>
      </div>

      <div className="login-form-wrapper">
        <h2>Create your account</h2>
        <p>Join the community and start building amazing projects.</p>

        <form onSubmit={handleSubmit} className="login-form">
          {/* Full Name */}
          <div className="form-control">
            <TextInput
              label="Full Name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              icon={LuUser}
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <TextInput
              label="Email Address"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={MdOutlineEmail}
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <TextInput
              label="Password"
              placeholder="At least 8 Characters with special chars"
              icon={RiLockPasswordLine}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={togglePassword} className="psswd-icon-wrapper">
              {showPassword ? <FaRegEye className="psswd-icon-active" /> : <IoEyeOffOutline className="psswd-icon" />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="form-control">
            <TextInput
              label="Confirm Password"
              placeholder="Re-enter password"
              icon={RiLockPasswordLine}
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span onClick={toggleConfirm} className="psswd-icon-wrapper">
              {showConfirm ? <FaRegEye className="psswd-icon-active" /> : <IoEyeOffOutline className="psswd-icon" />}
            </span>
          </div>

          <div className="login-form-submit-btn">
            <Btn text="Create Account" type="submit"/>
          </div>

          <div className="other-login-option">
            <div className="login-option-headings">
              <div className="divider"></div>
              <p>or continue with</p>
              <div className="divider"></div>
            </div>

            <div className="google-github-btn-container">
              <button type="button"><IoLogoGithub /> GitHub</button>
              <button type="button"><FcGoogle /> Google</button>
            </div>

            <p className="create-account-text">
              Already have an account? 
              <span className="create-account-text-link" onClick={onSwitchToLogin}>Sign in here</span>
            </p>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignUp;
