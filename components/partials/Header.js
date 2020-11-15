import React from "react";

export default function Header(props) {
  return (
    <header id="header" className="alt">
      <h1>
        <a href="index.html">Maxwell Detailing</a>
      </h1>
      <nav id="nav">
        <ul>
          <li className="special">
            <a href="#menu" className="menuToggle">
              <span>Menu</span>
            </a>
            <div id="menu">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="generic.html">Generic</a>
                </li>
                <li>
                  <a href="elements.html">Elements</a>
                </li>
                <li>
                  <a href="index.html">Sign Up</a>
                </li>
                <li>
                  <a href="index.html">Log In</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
