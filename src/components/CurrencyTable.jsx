import React, { useState } from "react";

const ITEMS_PER_PAGE = 10;

const CurrencyTable = ({ exchangeRates }) => {
  const currencyEntries = Object.entries(exchangeRates || {});
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(currencyEntries.length / ITEMS_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentEntries = currencyEntries.slice(
    startIdx,
    startIdx + ITEMS_PER_PAGE
  );

  return (
    <div className="calculator-section">
      <h2>Exchange Rates</h2>
      <div className="amortization-container">
        <table className="amortization-table">
          <thead>
            <tr>
              <th>Currency</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map(([currency, rate]) => (
              <tr key={currency}>
                <td>{currency}</td>
                <td>{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-group" style={{ marginTop: "20px" }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ padding: "0 15px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CurrencyTable;
