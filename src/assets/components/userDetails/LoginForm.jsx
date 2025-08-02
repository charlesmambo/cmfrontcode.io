import React from 'react';
import '../userDetails/Login.css';
import { IoLogoGithub } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";


const LoginForm = () => {
  return (
    <div className="login-form-main">
    <div className="side-form-container">
        <h2>Join thousands of devs building <span className='side-form-styled-text'>creative frontend solutions</span></h2>
        <p>Level up your skills with real-world challenges that matter. Build, learn, and showcase your talent.</p>

        <div className="challenges-count">
            <h3>500+ <span>Challenges</span></h3>
            <h3>50k  <span>Solutions</span></h3>
        </div>

        <div className="side-form-btn-container">
            <p>New to cmfrontendcode Challenges?</p>
            <button>Create Account</button>
        </div>
    </div>
    <div className="login-form-wrapper">
        <h2>welcome back</h2>
        <p>Sign in to continue building with cmfrontendcode Challenges.</p>

        <form action="" className="login-form">
            <div className="form-control">
                <label htmlFor="">Email Address</label>
                <input type="email" name="" placeholder='Enter your email' />
            </div>
            <div className="form-control">
                <label htmlFor="">Password</label>
                <input type="email" name="" placeholder='Enter your password' />
            </div>
            <div className="form-control sf-password">
                <div className="save-passsword">
                    <input type="checkbox" name="" id="" />
                    <p>Remember me</p>
                </div>
                <p className='fpwssd'>Forgot passowrd?</p>
            </div>
            <div className="login-form-submit-btn">
                <button type="submit">sign In</button>
            </div>

            <div className="other-login-option">
                <div className="login-option-headings">
                    <div className="divider"></div>
                    <p>or Sign With</p>
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
            <p className='create-account-text'>Don't have an account? 
                <span className='create-account-text-link'>Create one</span>
            </p>
            </div>

        </form>
    </div>
    </div>
  )
}

export default LoginForm