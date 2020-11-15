import React from "react";

export default function CTA(props) {
  return (
    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Schedule an Appointment</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="index.html" className="button fit primary">
              Book Now
            </a>
          </li>
          <li>
            <a href="index.html" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
