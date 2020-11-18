import React from "react";

export default function Navbar(props) {
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("wrapper-lightbox").style.backgroundColor =
      "rgba(0, 0, 0, 0.85)";
  }

  return (
    <React.Fragment>
      {/* Menu Button */}
      <a href="#menu" className="menuToggle" onClick={openNav}>
        <span>Menu</span>
      </a>
    </React.Fragment>
  );
}
