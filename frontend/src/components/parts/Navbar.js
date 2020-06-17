import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="search-button" href="#">
            <i className="fa fa-search" />
          </a>
          <form className="form-search">
            <input type="search" placeholder="Search:" />
          </form>
          <ul className="navbar-nav m-auto">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">All Posts</Link>
            </li>
            <li>
              <Link to="/single">Single</Link>
            </li>
            <li>
              <Link to="/single">Contacts</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto social-list">
            <li>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
