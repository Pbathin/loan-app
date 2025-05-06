import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Loan Calculator. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
