import React from "react";
import "../Dropdown/Dropdown.scss";

export default function Dropdown(props) {
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("wrapper-lightbox").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
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
            <a href="www.google.com">About</a>
            <a href="www.google.com">Services</a>
            <a href="www.google.com">Clients</a>
            <a href="www.google.com">Contact</a>
            <hr />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
