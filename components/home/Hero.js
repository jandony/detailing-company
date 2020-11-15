import React from "react";

export default function Hero(props) {
  return (
    <section id="banner">
      <video id="heroVideo" width="100%" height="auto" autoPlay loop muted>
        <source
          src="/DetailingCompany/wp-content/themes/react-theme/react-src/src/media/car-closeup.mp4"
          type="video/mp4"
        />
      </video>
      <div className="inner">
        <h2>Maxwell Detailing</h2>
        <p>Something cool about detailing or the services.</p>
        <ul className="actions special">
          <li>
            <a href="index.html" className="button primary">
              Book Now
            </a>
          </li>
        </ul>
      </div>
      <a href="#one" className="more scrolly">
        Learn More
      </a>
    </section>
  );
}
