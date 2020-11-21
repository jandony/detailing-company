import React, { useState, useEffect } from "react";

// Main Components
import Navbar from "./Navbar/Navbar";
import Dropdown from "./Dropdown/Dropdown";

export default function Header(props) {
  // useState Variables & Functions
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // Fetch MENU data
    fetch(
      `http://localhost:8888/DetailingCompany/wp-json/wp-api-menus/v2/menus/2`
    )
      .then((response) => response.json())
      .then((responseJSON) => {
        setMenuData(responseJSON.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <header id="header" className="alt">
      <a href="/DetailingCompany">
        <h1>Maxwell Detailing</h1>
      </a>

      <nav id="nav">
        <ul>
          <li className="special">
            {/* Menu Button */}
            <Navbar />
          </li>
        </ul>
      </nav>

      {/* Dropdown Menu */}
      <Dropdown menuData={menuData} />
    </header>
  );
}
