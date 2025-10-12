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

const LoginForm = ({ onSwitchToSignUp }) => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showReset, setShowReset] = useState(false);
  const [error, setError] = useState("");

  const handleForgotPasswordClick = () => setShowReset(true);

  const validateForm = () => {
    if (!email) return "Email is required.";
    if (!/\S+@\S+\.\S+/.test(email)) return "Please enter a valid email.";
    if (!password) return "Password is required.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) return setError(validationError);

    const result = login(email, password);
    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="login-form-main">
      <div className="side-form-container">
        <h2>
          Join thousands of devs building{" "}
          <span className="side-form-styled-text">creative frontend solutions</span>
        </h2>
        <p>
          Level up your skills with real-world challenges that matter. Build,
          learn, and showcase your talent.
        </p>

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

          <div className="form-control">
            <TextInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={RiLockPasswordLine}
              name="password"
              required
              type="password"
            />
            <IoEyeOffOutline className="psswd-icon" />
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="form-control sf-password">
            <div className="save-passsword">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p className="fpwssd" onClick={handleForgotPasswordClick} style={{ cursor: 'pointer' }}>
              Forgot password?
            </p>
          </div>

          <div className="login-form-submit-btn">
            <Primary type="submit">
              Sign In
            </Primary>
          </div>

          <div className="other-login-option">
            <div className="login-option-headings">
              <div className="divider"></div>
              <p>or Sign With</p>
              <div className="divider"></div>
            </div>

            <div className="google-github-btn-container">
              <button type="button">
                <IoLogoGithub /> GitHub
              </button>
              <button type="button">
                <FcGoogle /> Google
              </button>
            </div>

            <p className="create-account-text">
              Don't have an account?
              <span className="create-account-text-link" onClick={onSwitchToSignUp}>Create one</span>
            </p>
          </div>
        </form>
      </div>

      {showReset && (
        <div className="reset-psswd-container">
          <ResetPassword onClose={() => setShowReset(false)} />
        </div>
      )}
    </div>
  );
};

export default LoginForm;
