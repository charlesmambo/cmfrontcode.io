import React from 'react';
import '../footer/Footer.css'
import { PiNewspaperClipping } from "react-icons/pi";
import { CgCommunity } from "react-icons/cg";
import { RiUserCommunityFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
        <div className="footer_intro">
            <h2>cmFrontCode</h2>
            <p>Master frontend development through hands-on challenges and real-world projects. Join thousands of developers improving their skills daily.</p>
        </div>
        <div className="footer_links">
            <h3>Quick links</h3>
            <ul>
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">Challenges</a>
                </li>
                <li>
                    <a href="#">Solutions</a>
                </li>
                <li>
                    <a href="#">Leaderboard</a>
                </li>
            </ul>
        </div>
        <div className="footer_links">
            <h3>Community</h3>
            <ul>
                <li>
                    <a href="#">
                        <PiNewspaperClipping  className='footer_icon'/>
                        Blog
                    </a>
                </li>
                <li>
                    <a href="#">
                        <CgCommunity className='footer_icon'/>
                        Forum
                    </a>
                </li>
                <li>
                    <a href="#">
                        <RiUserCommunityFill className='footer_icon'/>
                        Discord
                    </a>
                </li>
            </ul>
        </div>
        <div className="footer_links footer_socials_icon">
            <h3>Follow Us</h3>
            <ul>
                <li>
                    <a href="#">
                        <BsTwitterX />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer