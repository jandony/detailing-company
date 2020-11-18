import React from "react";
import "./About.scss";

export default function About(props) {
  return (
    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>About Detailing</h2>
        </header>

        <div id="about">
          <div className="flex-container">
            {/* First Column */}
            <div className="flex-6"></div>
            {/* Second Column */}
            <div className="flex-6">
              <div className="flex-wrapper">
                <h3>An Amazing Title</h3>

                <div className="about-row">
                  <div className="about-icon">
                    <i className="far fa-clock" />
                  </div>
                  <div className="about-text">
                    <p>
                      <b>Cleaning Duration</b>
                    </p>
                    <p>Excellent turn around time</p>
                  </div>
                </div>

                <div className="about-row">
                  <div className="about-icon">
                    <i className="fas fa-calendar-alt" />
                  </div>
                  <div className="about-text">
                    <p>
                      <b>Booking</b>
                    </p>
                    <p>Easy online scheduling</p>
                  </div>
                </div>

                <div className="about-row">
                  <div className="about-icon">
                    <i class="fas fa-user-friends" />
                  </div>
                  <div className="about-text">
                    <p>
                      <b>Communication</b>
                    </p>
                    <p>Painless client-to-customer interactions</p>
                  </div>
                </div>

                <div className="about-row">
                  <div className="about-icon">
                    <i className="fas fa-award" />
                  </div>
                  <div className="about-text">
                    <p>
                      <b>Quality</b>
                    </p>
                    <p>Top quality customer service</p>
                  </div>
                </div>

                <a href="www.google.com">
                  <button className="button primary-outline">Learn More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
