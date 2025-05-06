import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "ce3b05a6955219da82eff755"; // Replace with your real API key

const useExchangeRates = (base = "USD") => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base}`
        );
        setRates(response.data.conversion_rates || {});
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch exchange rates");
        setLoading(false);
      }
    };

    fetchRates();
  }, [base]);

  return { rates, loading, error };
};

export default useExchangeRates;
