"use client"
import React from "react";
import "../Header/Header.css";
const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="SV Tech Soft"  />
      </div>
      <nav className="navbar-links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>
            Online Training <span>&#x25BC;</span>
          </li>
          <li>Recorded Videos</li>
          <li>Job Support</li>
          <li>Blog</li>
          <li>Work with Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
