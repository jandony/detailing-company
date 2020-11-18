import React from "react";

export default function Footer(props) {
  return (
    <React.Fragment>
      <footer id="footer">
        <ul className="icons">
          <li>
            <a href="www.google.com" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="www.google.com" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="www.google.com" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="www.google.com" className="icon brands fa-dribbble">
              <span className="label">Dribbble</span>
            </a>
          </li>
          <li>
            <a href="www.google.com" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Untitled</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
          <li>
            <a href="/DetailingCompany/wp-admin">Login</a>
          </li>
        </ul>
      </footer>
    </React.Fragment>
  );
}
