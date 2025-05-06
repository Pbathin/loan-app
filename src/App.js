import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import NotFound from "./components/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import CurrencyTable from "./components/CurrencyTable";

function App() {
  const [currentPage, setCurrentPage] = useState("calculator");
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    const fetchExchangeRates = async () => {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      const data = await response.json();
      setExchangeRates(data.rates);
    };

    fetchExchangeRates();
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "calculator":
        return <Calculator />;
      case "about":
        return <About />;
      case "exchangeRates":
        return <CurrencyTable exchangeRates={exchangeRates} />;
      case "error":
        return <ErrorPage setCurrentPage={setCurrentPage} />;
      case "notfound":
        return <NotFound />;
      default:
        return <NotFound />;
    }
  };

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="app">
          <Navbar setCurrentPage={setCurrentPage} />
          <div className="container">{renderPage()}</div>
          {/* <Footer /> */}
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
