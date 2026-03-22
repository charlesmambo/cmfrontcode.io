import React, { useState } from 'react';
import '../upgradePremium/Premium.css';
import BackBtn from '../../assets/components/buttons/BackBtn';
import { BsCheckLg, BsCreditCard } from "react-icons/bs";
import Primary from '../../assets/components/buttons/Primary';
import { LuDot } from "react-icons/lu";
import { FaPaypal, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Premium = () => {
  const navigate = useNavigate();

  const backToProfile = () => {
    navigate('/profile');
  };

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});

  // Handlers
  const handleCardNumber = (e) => {
    let value = e.target.value.replace(/\D/g, '').substring(0,16);
    setCardNumber(value.replace(/(.{4})/g, '$1 ').trim());
  };

  const handleExpiry = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) return;
    if (value.length >= 3) value = value.substring(0,2) + '/' + value.substring(2);
    setExpiry(value);
  };

  const handleCvv = (e) => setCvv(e.target.value.replace(/\D/g, '').substring(0,3));

  const handleCardHolder = (e) => setCardHolder(e.target.value.replace(/[^a-zA-Z\s]/g, ''));

  // Submit
  const handleSubmit = () => {
    const newErrors = {};
    console.log("Submit clicked");
    if (!cardNumber || cardNumber.replace(/\s/g,'').length !== 16) newErrors.cardNumber = "Enter valid card number";
    if (!cardHolder) newErrors.cardHolder = "Enter card holder name";
    if (!expiry || expiry.length !== 5) newErrors.expiry = "Enter valid expiry date";
    if (!cvv || cvv.length !== 3) newErrors.cvv = "Enter valid CVV";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Show loading toast
      const loadingToast = toast.loading("Processing payment...");

      // Simulate payment processing
      setTimeout(() => {
        toast.dismiss(loadingToast);
        toast.success("🎉 Welcome to Premium! Your payment was successful. Enjoy all the exclusive features!");

        // Clear input fields
        setCardNumber('');
        setCardHolder('');
        setExpiry('');
        setCvv('');
        setErrors({});
      }, 1500);
    }
  };

  return (
    <div className='premium_wrapper'>
      <div className="premium_back_btn">
        <BackBtn label="Back to Profile" onClick={backToProfile}/>
      </div>

      <div className="premium_content">
        <div className="premium_content_title">
          <h2>Upgrade to premium</h2>
          <p>Unlock everything and level up faster</p>
        </div>

        <div className="premium_card_wrapper">

          {/* Premium Plan Description */}
          <div className="premium_card_description">
            <p>Premium Plan</p>
            <h4>$9 <span className='premium_price_normal_font'>/ month</span></h4>
            <span className='premium_trial'>7 days free trial. Cancel anytime</span>

            <ul className='premium_benefits_list'>
              <li><BsCheckLg className='premium_icon_list'/>Access to exclusive challenges</li>
              <li><BsCheckLg className='premium_icon_list'/>1-on-1 mentorship sessions</li>
              <li><BsCheckLg className='premium_icon_list'/>Access to courses and documents</li>
              <li><BsCheckLg className='premium_icon_list'/>Advanced UI systems</li>
              <li><BsCheckLg className='premium_icon_list'/>Personalized code reviews</li>
            </ul>
          </div>

          {/* Payment Form */}
          <div className="premium_card_description">
            <p>Choose Payment Method</p>

            <div className="card_payment">

              {/* Card Number */}
              <div className="card_payment_content">
                <BsCreditCard className='card_payment_icon'/>
                <input 
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={handleCardNumber}
                />
              </div>
              {errors.cardNumber && <small className="error">{errors.cardNumber}</small>}

              {/* Card Holder */}
              <div className="card_payment_content payments_date">
                <input 
                  type="text"
                  placeholder='Card Holder Name'
                  value={cardHolder}
                  onChange={handleCardHolder}
                />
              </div>
              {errors.cardHolder && <small className="error">{errors.cardHolder}</small>}

              {/* Expiry + CVV */}
              <div className="card_payment_content payments_date">
                <input 
                  type="text"
                  placeholder='MM/YY'
                  value={expiry}
                  onChange={handleExpiry}
                />
                <input 
                  type="text"
                  placeholder='CVV'
                  value={cvv}
                  onChange={handleCvv}
                />
              </div>
              {(errors.expiry || errors.cvv) && <small className="error">{errors.expiry || errors.cvv}</small>}

              {/* Divider */}
              <div className="card_payment_content payments_date payment_divider_wrapper">
                <hr className='payment_divider'/> or <hr className='payment_divider'/>
              </div>

              {/* Other Payment Methods */}
              <div className="card_payment_content payments_date other_payment_method">
                <button type="button" className='paypal_btn'>
                  <FaPaypal className='other_payments_icon'/> PayPal
                </button>
                <button type="button">
                  <FaApple className='other_payments_icon apple_icon'/> Pay
                </button>
                <button type="button">
                  <FcGoogle className='other_payments_icon'/> Pay
                </button>
              </div>

              {/* Submit Button */}
              <div className="payment_btn_wrapper">
                <Primary 
                  type="button" 
                  className='payment_btn'
                  onClick={handleSubmit}
                >
                  Start Free Trial
                </Primary>
              </div>

              {/* Payment Info */}
              <div className="payment_trials_text">
                No change today<LuDot />
                Cancel anytime
                <LuDot />
                Secure payment
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Premium;