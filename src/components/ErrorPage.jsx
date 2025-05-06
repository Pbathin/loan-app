import React from "react";

const ErrorPage = ({ setCurrentPage }) => {
  return (
    <section className="error-section">
      <div className="error-content">
        <div className="error-icon">⚠️</div>
        <h2>Error</h2>
        <p className="error-message">
          Something went wrong in the application.
        </p>
        <button
          className="go-home-btn"
          onClick={() => setCurrentPage("calculator")}
        >
          Go Home
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
