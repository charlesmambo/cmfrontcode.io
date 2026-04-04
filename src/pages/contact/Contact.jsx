import React, { useState, useEffect } from 'react';
import '../contact/Contact.css'
import TextInput from '../../assets/components/customInputs/TextInput'; import SecondaryInput from '../../assets/components/customInputs/SecondaryInput'; 
import Textarea from '../../assets/components/customInputs/Textarea'; import Primary from '../../assets/components/buttons/Primary'; 
import { MdOutlineMarkunread } from "react-icons/md"; 
import { FaXTwitter } from "react-icons/fa6"; 
import { FaLinkedinIn } from "react-icons/fa"; 
import { FaYoutube } from "react-icons/fa"; 
import { AiFillTikTok } from "react-icons/ai"; 
import { FaLinkedin } from "react-icons/fa"; 
import { FaRegMessage } from "react-icons/fa6"; 
import { BiMessageRoundedDots } from "react-icons/bi"; 
import CTC from '../../../public/ctc.png'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Email validation regex
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = () => {
    // Check for empty fields
    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Clear error and submit
    setError('');
    alert('Message sent successfully!');

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  }
   // Clear error as soon as inputs are corrected
  useEffect(() => {
    if (name && email && message && validateEmail(email)) {
      setError('');
    }
  }, [name, email, message]);

  return (
    <div className='contact_container'>
      <div className="ctc_hero_wrapper">
        <div className="ctc_hero">
          <div className="contact_title">
            <h2>Contact Us</h2>
            <p>
              Have questions or feedback? <br />
              We would love to hear from you!
            </p>
          </div>

          <div className="contact_from">
            <div className="contact_form_title">
              <h4>Get in Touch</h4>
              <p>Fill out the form below and we will get back to you as soon as possible.</p>
            </div>

            <form className='contact_form_container' onSubmit={(e) => e.preventDefault()}>
              <div className="contact_form_control">
                <SecondaryInput 
                  type="text" 
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ borderColor: error && !name ? 'red' : '' }}
                />
              </div>

              <div className="contact_form_control">
                <SecondaryInput 
                  type="email" 
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ borderColor: error && (!email || !validateEmail(email)) ? 'red' : '' }}
                />
              </div>

              <div className="contact_form_control">
                <Textarea 
                  placeholder="Tell us what you need..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ borderColor: error && !message ? 'red' : '' }}
                />
              </div>

              {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

              <Primary type="button" onClick={handleSubmit}>
                Send Message
              </Primary>
            </form>
          </div>
        </div>

        <div className="ctc_hero_img">
          <img src={CTC} alt="contact illustration" />
        </div>
      </div>

      <div className="other_contacts">
        <div className="other_contact_title">
          <h3>Other ways to reach us</h3>
        </div>

        <div className="other_contact_content">
          <div className="other_contact_content_card">
            <p className='cm_icon'><MdOutlineMarkunread /></p>
            <h4>Email Us</h4>
            <p>Reach out via email at support@cmfrontendCode.co.za and we will respond as soon as we can.</p>
          </div>
          <div className="other_contact_content_card">
            <p className='cm_icon'><FaRegMessage /></p>
            <h4>Join our community</h4>
            <p>Connect with other developers on our forum or Discord server for support, ideas, and collaboration.</p>
          </div>
          <div className="other_contact_content_card">
            <p className='cm_icon'><BiMessageRoundedDots /></p>
            <h4>Follow us</h4>
            <p>Stay updated by following us on</p>

            <ul>
              <li><a href="#"><FaXTwitter /></a></li>
              <li><a href="#"><FaLinkedin /></a></li>
              <li><a href="#"><FaYoutube /></a></li>
              <li><a href="#"><AiFillTikTok /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;