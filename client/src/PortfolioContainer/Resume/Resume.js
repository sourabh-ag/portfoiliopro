import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Courses & Certificates", logoSrc: "work-history.svg" },
    { label: "Analytical Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "mySQL", ratingPercentage: 90 },
    { skill: "Tableau", ratingPercentage: 70 },
    { skill: "Advance Excel", ratingPercentage: 80 },
    { skill: "Management Information System", ratingPercentage: 80 },
    { skill: "Case Study and BRD", ratingPercentage: 80 },
    { skill: "Product Development Life Cycle", ratingPercentage: 80 },
    { skill: "ReactJS", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place. • Integerated backend server to receive mails from client side. • Mobile Responsive Website - works across all devices.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Task list",
      duration: { fromDate: "2022", toDate: "" },
      description:
        "Developed a frontend web application using JavaScript that will help you track your task by adding them to your daily task list. • Added list items in local storage. • Filter tasks on key up.",
      subHeading:
        "Technologies Used:  JavaScript",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Birla Institute Of Technology, Mesra"}
        subHeading={"BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE"}
        fromDate={"2020"}
        toDate={"Present"}
      />
      <ResumeHeading
        heading={"Cambridge Court High School, Jaipur"}
        subHeading={"Intermediate(Class XII)"}
        fromDate={"2019"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Cambridge Court High School, Jaipur"}
        subHeading={"Matriculate(Class X)"}
        fromDate={"2017"}
        toDate={"2018"}
      />
      
    </div>,

    /* COURSES & CERTIFICATES */
    
<div className="resume-screen-container" key="work-experience">
       <div className="experience-container">
         <ResumeHeading
           heading={<a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase%20Corporate/dJgTXj3M5zcSY79Hn_JPMorgan%20Chase%20&%20Co._3vvXfdgWrXd9gpXBd_1683989897149_completion_certificate.pdf" target="_main">JP Morgan Chase Co.</a>}
           subHeading={"Global Finance & Business Management"}
           fromDate={""}
           toDate={""}
         />
         <div className="experience-description">
           <span className="resume-description-text">
             - Throughout this comprehensive program, I gained in-depth knowledge of various aspects of finance and honed my business analytical skills. The course covered a wide range of topics, including Data Analysis, interpretation, Visualisation, Financial Analysis, and Business Forecasting utilizing a range of analytical Techniques & Tools such as Tableau, Advance Excel, and Powerpoint Presentation.
           </span>
           <br />
         </div>
         <ResumeHeading
           heading={"Coursera"}
           subHeading={"Tableau"}
           fromDate={""}
           toDate={""}
         />
         <div className="experience-description">
           <span className="resume-description-text">
           - Used Tableau to connect to various data sources, visualize data, and create interactive dashboards, reports, and charts and draw meaningful insights through intuitive visualizations.
           </span>
         </div>
       </div>
     </div>,

    // <div className="resume-screen-container" key="work-experience">
    //   <div className="experience-container">
    //     <ResumeHeading
    //       heading={"Jaipur Metro Rail Coporation LTD."}
    //       subHeading={"PROJECT MANAGEMENT INTERN"}
    //       fromDate={"Feb 2022"}
    //       toDate={"March 2022"}
    //     />
    //     <div className="experience-description">
    //       <span className="resume-description-text">
    //       - The internship aimed to provide an in-depth knowledge of various aspects of Project Operations design, and the challenges faced during project management of Jaipur Metro.
    //       </span>
    //     </div>
    //     <div className="experience-description">
    //       <span className="resume-description-text">
    //         - Got a brief understanding of how a large-scale project is developed from conceiving of an idea to planning to execution and finally handing it over for public use considering various other parameters like Finance, Quality Measurement, Contract Management, Public Safety, Maintenance and Timely Delivery Of Project.
    //       </span>
    //       <br />
    //     </div>
    //   </div>
    // </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Management & Consultancy"
        description="As a highly analytical individual with a passion for business strategy and data-driven decision-making I like to identify opportunities for improvement and optimisation within an organisation. and develop effective solutions. I am sound from both Technical and Business perspectives and possess good knowledge of BRD, FRD, Requirement Elicitation & Planning in PDLC and experience working with stakeholders and product owners."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
