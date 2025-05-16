import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_EXCHANGE_RATE_API_KEY;
const BASE_URL = "https://v6.exchangerate-api.com/v6";

const useExchangeRates = (baseCurrency = "USD") => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `${BASE_URL}/${API_KEY}/latest/${baseCurrency}`
        );
        const data = await response.json();

        if (data.result === "success") {
          setRates(data.conversion_rates);
        } else {
          throw new Error("Failed to fetch exchange rates");
        }
      } catch (err) {
        setError(err.message);
        // Fallback rates in case API fails
        setRates({
          USD: 1,
          EUR: 0.93,
          INR: 83.12,
          GBP: 0.79,
          JPY: 155.67,
          AUD: 1.52,
          CAD: 1.38,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return { rates, loading, error };
};

export default useExchangeRates;
