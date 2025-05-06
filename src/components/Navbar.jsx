import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = ({ setCurrentPage }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">Loan Calculator</div>
        <div className="nav-links">
          <a href="#" onClick={() => setCurrentPage("calculator")}>
            Calculator
          </a>
          <a href="#" onClick={() => setCurrentPage("about")}>
            About
          </a>
          <a href="#" onClick={() => setCurrentPage("error")}>
            Error Page
          </a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
