import React, { useState } from 'react';
import '../userDetails/Login.css';
import { IoLogoGithub } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline } from "react-icons/io5";
import ResetPassword from '../reset/ResetPassword';
import TextInput from '../customInputs/TextInput';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Primary from '../buttons/Primary';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext'; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye } from "react-icons/fa6";
import Btn from '../buttons/Btn';

const LoginForm = ({ onSwitchToSignUp }) => {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showReset, setShowReset] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const togglePassword = () => setShowLoginPassword(prev => !prev);
  const handleForgotPasswordClick = () => setShowReset(true);

  // Validation function
  const validateForm = () => {
    if (!email) return "Email is required.";
    if (!/\S+@\S+\.\S+/.test(email)) return "Please enter a valid email.";
    if (!password) return "Password is required.";
    if (password.length < 8) return "Password must be at least 8 characters.";
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
      return "Password must include at least one special character.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError, { position: "top-right", autoClose: 6000 });
      return;
    }

    const result = await login(email, password);
    if (result.success) {
      toast.success(result.message, { position: "top-right", autoClose: 6000 });
      setTimeout(() => navigate("/dashboard"), 300);
    } else {
      toast.error(result.message, { position: "top-right", autoClose: 6000 });
    }
  };

  return (
    <div className="login-form-main">
      <div className="side-form-container">
        <h2>
          Join thousands of devs building{" "}
          <span className="side-form-styled-text">creative frontend solutions</span>
        </h2>
        <p>Level up your skills with real-world challenges that matter. Build, learn, and showcase your talent.</p>

        <div className="challenges-count">
          <h3>500+ <span>Challenges</span></h3>
          <h3>50k <span>Solutions</span></h3>
        </div>

        <div className="side-form-btn-container">
          <p>New to cmfrontendcode Challenges?</p>
          <button>Start Building</button>
        </div>
      </div>

      <div className="login-form-wrapper">
        <h2>Welcome back</h2>
        <p>Sign in to continue building with cmfrontendcode Challenges.</p>

        <form onSubmit={handleSubmit} className="login-form">
          {/* Email */}
          <div className="form-control">
            <TextInput
              label="Email Address"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={MdOutlineEmail}
              name="email"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <TextInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={RiLockPasswordLine}
              name="password"
              required
              type={showLoginPassword ? "text" : "password"}
            />
            <span onClick={togglePassword} className="psswd-icon-wrapper">
              {showLoginPassword ? (
                <FaRegEye className="psswd-icon-active" />
              ) : (
                <IoEyeOffOutline className="psswd-icon" />
              )}
            </span>
          </div>

          {/* Remember & Forgot Password */}
          <div className="form-control sf-password">
            <div className="save-passsword">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p className="fpwssd" onClick={handleForgotPasswordClick} style={{ cursor: 'pointer' }}>
              Forgot password?
            </p>
          </div>

          {/* Submit */}
          <div className="login-form-submit-btn">
            <Btn text="Sign In" type="submit"/>
          </div>

          {/* Other login options */}
          <div className="other-login-option">
            <div className="login-option-headings">
              <div className="divider"></div>
              <p>or Sign With</p>
              <div className="divider"></div>
            </div>

            <div className="google-github-btn-container">
              <button type="button"><IoLogoGithub /> GitHub</button>
              <button type="button"><FcGoogle /> Google</button>
            </div>

            <p className="create-account-text">
              Don't have an account?
              <span className="create-account-text-link" onClick={onSwitchToSignUp}>Create one</span>
            </p>
          </div>
        </form>
      </div>

      {/* Reset Password Modal */}
      {showReset && (
        <div className="reset-psswd-container">
          <ResetPassword onClose={() => setShowReset(false)} />
        </div>
      )}

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default LoginForm;
