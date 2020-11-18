import React from "react";

export default function TableOfContents(props) {
  return (
    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>Where to?</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <a href="https://www.google.com">
              <span
                id="toc-about"
                className="solid fa-address-card icon major style1"
              >
                <span className="label">About</span>
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.google.com">
              <span
                id="toc-products"
                className="solid fa-shopping-cart icon major style1"
              >
                <span className="label">Products</span>
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.google.com">
              <span
                id="toc-services"
                className="solid fa-handshake icon major style1"
              >
                <span className="label">Services</span>
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.google.com">
              <span
                id="toc-contact"
                className="solid fa-phone-alt icon major style1"
              >
                <span className="label">Contact</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
