import React from "react";
import "./MeetingScheduler.scss";
import {Fade} from "react-reveal";
import { InlineWidget } from "react-calendly";
import emoji from "react-easy-emoji";

const MeetingScheduler = () => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="meetings">
        <div className="meeting-header">
          <h1 className="meeting-header-text">Let's Connect {emoji("🤝")}</h1>
          <p className="subTitle meeting-subtitle">
            Schedule a one-on-one meeting with me to discuss potential collaborations, projects, or just to chat about technology
          </p>
        </div>
        <div className="meeting-main-div">
          <div className="meeting-calendar-container">
            <div className="meeting-info">
              <div className="meeting-point">
                {emoji("⚡")} Real-time availability
              </div>
              <div className="meeting-point">
                {emoji("⚡")} 30-minutes
              </div>
              <div className="meeting-point">
                {emoji("⚡")} Instant confirmation
              </div>
            </div>
            <div className="meeting-calendar">
              <InlineWidget 
                url="https://calendly.com/husnain-ashfaq3939"
                styles={{
                  height: '700px',
                  width: '100%',
                }}
                prefill={{
                  email: "",
                  firstName: "",
                  lastName: "",
                  name: "",
                }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: '#55198b',
                  textColor: '#000000'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MeetingScheduler; 