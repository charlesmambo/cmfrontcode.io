import React from 'react';
import '../premium/PremiumAd.css';
import { FaCheck } from "react-icons/fa";
import Btn from '../buttons/Btn';

const PremiumAd = () => {
  const benefits = [
    {
      title: "Unlimited Challenges",
      desc: "Access all 100+ premium challenges",
    },
    {
      title: "Advanced Analytics",
      desc: "Detailed progress tracking and insights",
    },
    {
      title: "Unlimited AI Reviews",
      desc: "Get AI feedback on every submission",
    },
    {
      title: "Professional Design Files",
      desc: "Figma, Sketch, and Adobe XD files",
    },
    {
      title: "All Learning Paths",
      desc: "Access to all structured roadmaps",
    },
  ];
  return (
   <section className="premium_ad_container">
      <div className="premium_ad_header">
        <span>GO PREMIUM</span>
        <h1>Unlock Premium Features</h1>
        <p>
          Take your learning to the next level with exclusive content and advanced tools.
        </p>
      </div>

      <div className="premium_ad_card">

        {/* LEFT */}
        <div className="premium_ad_left">
          <h2>Premium Benefits</h2>

          {benefits.map((item, i) => (
            <div key={i} className="premium_ad_benefit">
              <div className="premium_ad_check"><FaCheck /></div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="premium_ad_right">
          <span className="premium_ad_badge">Most Popular</span>
          <h1 className="premium_ad_price">
            $12<span className='premium_ad_price_m'>/mo</span>
          </h1>
          <p className="premium_ad_billing">Billed monthly. Cancel anytime.</p>
          <Btn text='Upgrade to Premium'/>
          <p className="premium_ad_guarantee">30-day money-back guarantee</p>
        </div>

      </div>
    </section>
  )
}

export default PremiumAd