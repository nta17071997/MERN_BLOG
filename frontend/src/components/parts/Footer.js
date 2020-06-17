import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h1>Mitte</h1>
        <p className="copyright-line">
          © Copyright 2019 - All rights reserved.
        </p>
        <ul className="social-list">
          <li>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
