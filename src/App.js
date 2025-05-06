// src/App.jsx - Main Application Component
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [currentPage, setCurrentPage] = useState("calculator");

  const renderPage = () => {
    switch (currentPage) {
      case "calculator":
        return <Calculator />;
      case "about":
        return <About />;
      case "error":
        return <ErrorPage setCurrentPage={setCurrentPage} />;
      default:
        return <Calculator />;
    }
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="container">{renderPage()}</div>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
