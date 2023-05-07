import React from "react";
import Typewriter from "typewriter-effect";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/sourabh-agarwal-9695021b7/">
                <i className="fa fa-linkedin" />
              </a>
              {" "}
              <a href="https://github.com/sourabh-ag">
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Sourabh</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
              <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 20,
                    strings: [
                        "mySQL",
                        "Tableau",
                        "Business Intelligence",
                        "Product Analyst",
                        "React Developer",
                        "Keen Learner",
                    ],
                }}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building insights and data visualisation using Tableau and mySQL.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn" onClick={()=> ScrollService.scrollHandler.scrollToHireMe()}> Hire Me </button>
            <a href="Sourabh Agarwal.pdf" download="Sourabh Agarwal.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
