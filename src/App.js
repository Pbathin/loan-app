import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import About from "./components/About";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [currentPage, setCurrentPage] = useState("calculator");

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="container">
          {currentPage === "calculator" ? <Calculator /> : <About />}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
