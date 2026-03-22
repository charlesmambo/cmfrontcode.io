import React, { useState } from 'react';
import '../upgradePremium/Premium.css'
import BackBtn from '../../assets/components/buttons/BackBtn';
import { BsCheckLg } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import Primary from '../../assets/components/buttons/Primary';
import { LuDot } from "react-icons/lu";
import { FaPaypal } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaCcPaypal } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Premium = () => {
    const navigate = useNavigate();

    const backToProfile = ()=>{
        navigate('/profile');
    }

    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState({});

    // Luhn Algorithm
    const validateCardNumber = (number) => {
        const cleaned = number.replace(/\s+/g, '');
        if (!/^\d{13,19}$/.test(cleaned)) return false;

        let sum = 0;
        let shouldDouble = false;

        for (let i = cleaned.length - 1; i >= 0; i--) {
            let digit = parseInt(cleaned.charAt(i));

            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }

            sum += digit;
            shouldDouble = !shouldDouble;
        }

        return sum % 10 === 0;
    };

    const validateCardHolder = (name) => {
        return /^[a-zA-Z\s]{3,}$/.test(name);
    };

    const validateExpiry = (date) => {
        if (!/^\d{2}\/\d{2}$/.test(date)) return false;

        const [month, year] = date.split('/');
        const expMonth = parseInt(month, 10);
        const expYear = parseInt(`20${year}`, 10);

        if (expMonth < 1 || expMonth > 12) return false;

        const today = new Date();
        const expiryDate = new Date(expYear, expMonth);

        return expiryDate > today;
    };

    const validateCVV = (cvv) => {
        return /^\d{3,4}$/.test(cvv);
    };

    const handlePaymentValidation = () => {
        const newErrors = {};

        if (!validateCardNumber(cardNumber)) {
            newErrors.cardNumber = "Invalid card number";
        }

        if (!validateCardHolder(cardHolder)) {
            newErrors.cardHolder = "Invalid card holder name";
        }

        if (!validateExpiry(expiry)) {
            newErrors.expiry = "Invalid expiry date";
        }

        if (!validateCVV(cvv)) {
            newErrors.cvv = "Invalid CVV";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (handlePaymentValidation()) {
            console.log("Payment valid");
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
            
         <div className="premium_card_description">
            <p>Premium Plan</p>
            <h4>$9 <span className='premium_price_normal_font'>/ month</span></h4>
            <span className='premium_trial'>7 days free trial. Cancel anytime</span>

            <ul className='premium_benefits_list'>
                <li>
                    <BsCheckLg className='premium_icon_list'/>
                    Access to exclusive challenges
                </li>
                <li>
                    <BsCheckLg className='premium_icon_list'/>
                    1-on-1 mentorship sessions
                </li>
                <li>
                    <BsCheckLg className='premium_icon_list'/>
                    Access to courses and documents
                </li>
                <li>
                    <BsCheckLg className='premium_icon_list'/>
                    Advanced UI systems
                </li>
                <li>
                    <BsCheckLg className='premium_icon_list'/>
                    Personalized code reviews
                </li>
            </ul>
         </div>

         <div className="premium_card_description">
            <p>Choose Payment Method</p>
            <div className="card_payment">

                <div className="card_payment_content">
                    <BsCreditCard className='card_payment_icon'/>
                    <input 
                        type="text" 
                        value={cardNumber}
                        onChange={(e)=>setCardNumber(e.target.value)}
                        placeholder="Card Number"
                    />
                </div>

                <div className="card_payment_content payments_date">
                    <input 
                        type="text" 
                        placeholder='Card Holder Name'
                        value={cardHolder}
                        onChange={(e)=>setCardHolder(e.target.value)}
                    />
                </div>

                <div className="card_payment_content payments_date">
                    <input 
                        type="text" 
                        placeholder='MM/YY'
                        value={expiry}
                        onChange={(e)=>setExpiry(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='CVV'
                        value={cvv}
                        onChange={(e)=>setCvv(e.target.value)}
                    />
                </div>

                <div className="card_payment_content payments_date payment_divider_wrapper">
                    <hr className='payment_divider'/>
                    or
                    <hr className='payment_divider'/>
                </div>

                <div className="card_payment_content payments_date other_payment_method">
                   <button type="submit" className='paypal_btn'>
                       <FaPaypal className='other_payments_icon'/>PayPal
                    </button>

                   <button type="submit">
                       <FaApple className='other_payments_icon apple_icon'/> Pay
                   </button>

                   <button type="submit">
                       <FcGoogle className='other_payments_icon'/> Pay
                   </button>
                </div>

                <div className="payment_btn_wrapper">
                 <Primary 
                    type="button" 
                    className='payment_btn'
                    onClick={handleSubmit}
                 >
                   Start Free Trial
                 </Primary>
                </div>

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
  )
}

export default Premium