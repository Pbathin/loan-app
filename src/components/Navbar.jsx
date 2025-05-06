import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle"; // Import the switch component

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

          {/* Replace emoji button with switch toggle */}
          <ThemeToggle isDark={darkMode} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
