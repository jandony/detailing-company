import React from "react";
import "../Dropdown/Dropdown.scss";

export default function Dropdown(props) {
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("wrapper-lightbox").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
  }

  function dropdown() {
    const Dropdown = document.getElementById("dropdown-content");
    const Icon = document.getElementById("dropdown-icon");

    if (Dropdown.style.display === "none") {
      Dropdown.style.display = "block";
      Dropdown.style.height = "100%";
      Icon.style.transform = "rotate(180deg)";
    } else {
      Dropdown.style.display = "none";
      Dropdown.style.height = "0%";
      Icon.style.transform = "rotate(0deg)";
    }
  }
  return (
    <React.Fragment>
      {/* Slide Menu */}
      <div id="mySidenav" className="sidenav">
        <div id="wrapper-lightbox" className="wrapper">
          <div className="container">
            <div id="closebtn-banner"></div>
            <button className="closebtn" onClick={closeNav}>
              &times;
            </button>
            <hr />
            <div
              id="about-page"
              className="dropdown-item menu-item"
              onClick={dropdown}
            >
              About <i id="dropdown-icon" class="fas fa-chevron-down" />
              <div id="dropdown-content">
                <a href="www.google.com" className="menu-item">
                  Page 1
                </a>
                <a href="www.google.com" className="menu-item">
                  Page 2
                </a>
                <a href="www.google.com" className="menu-item">
                  Page 3
                </a>
              </div>
            </div>
            <a id="services-page" href="www.google.com" className="menu-item">
              Services
            </a>
            <a id="clients-page" href="www.google.com" className="menu-item">
              Clients
            </a>
            <a id="contact-page" href="www.google.com" className="menu-item">
              Contact
            </a>
            <hr />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
