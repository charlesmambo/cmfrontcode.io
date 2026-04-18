import React from 'react';
import '../codeAd/CodeReviewAd.css';
import { FaUniversalAccess, FaBolt, FaMobileAlt, FaCode } from "react-icons/fa";

const CodeReviewAd = () => {
  return (
   <section className="code_review_ad">
      <div className="code_review_ad_container">
        
        {/* LEFT */}
        <div className="code_review_ad_left">
          {/* <span className="code_review_ad_badge">AI-POWERED</span> */}

          <h1>Get Instant AI Code Feedback</h1>

          <p>
            Our advanced AI analyzes your code in real-time, providing actionable
            insights to help you write better, more efficient code.
          </p>

          <div className="code_review_ad_features">
            <div className="code_review_ad_feature">
              <span className="code_review_ad_icon green"><FaUniversalAccess /></span>
              <div>
                <h4>Accessibility Score</h4>
                <p>WCAG compliance checks and recommendations for inclusive design.</p>
              </div>
            </div>

            <div className="code_review_ad_feature">
              <span className="code_review_ad_icon blue"><FaBolt /></span>
              <div>
                <h4>Performance Tips</h4>
                <p>Optimization suggestions for faster load times and better UX.</p>
              </div>
            </div>

            <div className="code_review_ad_feature">
              <span className="code_review_ad_icon purple"><FaMobileAlt /></span>
              <div>
                <h4>Responsive Suggestions</h4>
                <p>Mobile-first design improvements and breakpoint optimization.</p>
              </div>
            </div>

            <div className="code_review_ad_feature">
              <span className="code_review_ad_icon cyan"><FaCode /></span>
              <div>
                <h4>Code Quality Analysis</h4>
                <p>Best practices, clean code patterns, and maintainability insights.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="code_review_ad_right">
          <div className="code_review_ad_report">
            <div className="code_review_ad_report_header">
              <span>AI Analysis Report</span>
              <span className="code_review_ad_score">Overall: 94/100</span>
            </div>

            <div className="metric">
              <div className="metric_top">
                <span>Accessibility</span>
                <span>98/100</span>
              </div>
              <div className="code_review_ad_bar green" style={{ width: "98%" }} />
            </div>

            <div className="metric">
              <div className="metric_top">
                <span>Performance</span>
                <span>92/100</span>
              </div>
              <div className="code_review_ad_bar blue" style={{ width: "92%" }} />
            </div>

            <div className="metric">
              <div className="metric_top">
                <span>Responsiveness</span>
                <span>96/100</span>
              </div>
              <div className="code_review_ad_bar purple" style={{ width: "96%" }} />
            </div>

            <div className="metric">
              <div className="metric_top">
                <span>Code Quality</span>
                <span>90/100</span>
              </div>
              <div className="code_review_ad_bar cyan" style={{ width: "90%" }} />
            </div>

            <div className="suggestion">
              <span>💡 Top Suggestion:</span>
              <p>
                Consider lazy loading images below the fold to improve initial
                page load time by ~30%.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
  
}

export default CodeReviewAd