import React from "react";

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <label className="theme-switch">
      <input type="checkbox" checked={isDark} onChange={toggleTheme} />
      <span className="slider" />
    </label>
  );
};

export default ThemeToggle;
