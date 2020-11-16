import React from "react";

// Main Components
import Navbar from "./Navbar/Navbar";
import Dropdown from "./Dropdown/Dropdown";

export default function Header(props) {
  return (
    <header id="header" className="alt">
      <h1>
        <a href="index.html">Maxwell Detailing</a>
      </h1>

      <nav id="nav">
        <ul>
          <li className="special">
            {/* Menu Button */}
            <Navbar />
          </li>
        </ul>
      </nav>

      {/* Dropdown Menu */}
      <Dropdown />
    </header>
  );
}
