import React from "react";
import "../Dropdown/Dropdown.scss";

export default function Dropdown(props) {
  // Props variables
  const menuData = props.menuData;

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("wrapper-lightbox").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
  }

  function dropdown(itemID) {
    const Dropdown = document.getElementById(`dropdown-content-${itemID}`);
    const Icon = document.getElementById(`dropdown-icon-${itemID}`);
    console.log(itemID);

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

            {menuData.map((item) => {
              if (item.children) {
                return (
                  <div
                    id={item.object_slug}
                    className="dropdown-item menu-item"
                    onClick={() => dropdown(`${item.id}`)}
                    key={item.id}
                  >
                    {item.title}
                    <i
                      id={`dropdown-icon-${item.id}`}
                      className="fas fa-chevron-down dropdown-icon"
                    />
                    <div
                      id={`dropdown-content-${item.id}`}
                      className="dropdown-content"
                    >
                      {item.children.map((item) => {
                        return (
                          <a
                            key={item.id}
                            href={item.url}
                            className="menu-item"
                          >
                            {item.title}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                return (
                  <a
                    id={item.object_slug}
                    href={item.url}
                    className="menu-item"
                    key={item.id}
                  >
                    {item.title}
                  </a>
                );
              }
            })}

            {/* <div
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
            </a> */}
            <hr />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
