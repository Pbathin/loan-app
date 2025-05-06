import React, { useEffect, useState } from "react";
import axios from "axios";

const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          `https://open.er-api.com/v6/latest/${baseCurrency}`
        );
        setRates(response.data.rates);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch exchange rates:", err);
        setError("Unable to fetch live exchange rates.");
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return (
    <div className="exchange-rates">
      <h2>Live Exchange Rates</h2>
      <label htmlFor="base-currency">Base Currency:</label>
      <select
        id="base-currency"
        value={baseCurrency}
        onChange={(e) => setBaseCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="AUD">AUD</option>
        <option value="CAD">CAD</option>
      </select>

      {error && <p className="error">{error}</p>}

      <table className="rates-table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {["USD", "EUR", "INR", "GBP", "JPY", "AUD", "CAD"].map((code) => (
            <tr key={code}>
              <td>{code}</td>
              <td>{rates[code] ? rates[code].toFixed(4) : "..."}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeRates;
