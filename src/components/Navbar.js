import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const colorSelector1 = (color) => {
    props.colorChanger("#4C3A51");
  };
  const colorSelector2 = (color) => {
    props.colorChanger("#4C0033");
  };
  const colorSelector3 = (color) => {
    props.colorChanger("#37306B");
  };
  const colorSelector4 = (color) => {
    props.colorChanger("#1D3E53");
  };
  
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="buttons">
            <button
              type="button"
              className="mx-1 color-button1"
              onClick={colorSelector1}
            ></button>
            <button
              type="button"
              className="mx-1 color-button2"
              onClick={colorSelector2}
            ></button>
            <button
              type="button"
              className="mx-1 color-button3"
              onClick={colorSelector3}
            ></button>
            <button
              type="button"
              className="mx-1 color-button4"
              onClick={colorSelector4}
            ></button>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
