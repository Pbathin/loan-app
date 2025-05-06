import React, { useState } from "react";
import Results from "./Results";

const CURRENCY_SYMBOLS = {
  USD: "$",
  EUR: "€",
  INR: "₹",
  GBP: "£",
  JPY: "¥",
  AUD: "A$",
  CAD: "C$",
};

// Exchange rates (approximate, would use an API in production)
const EXCHANGE_RATES = {
  USD: 1,
  EUR: 0.93,
  INR: 83.12,
  GBP: 0.79,
  JPY: 155.67,
  AUD: 1.52,
  CAD: 1.38,
};

const Calculator = () => {
  const [loanData, setLoanData] = useState({
    loanAmount: 200000,
    interestRate: 5,
    loanTerm: 30,
    paymentFrequency: 12,
  });

  const [currency, setCurrency] = useState("USD");
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLoanData((prev) => ({
      ...prev,
      [id]: parseFloat(value),
    }));
  };

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setCurrency(newCurrency);

    // If results are showing, recalculate with the new currency
    if (showResults) {
      calculateLoan();
    }
  };

  const resetCalculator = () => {
    setLoanData({
      loanAmount: 200000,
      interestRate: 5,
      loanTerm: 30,
      paymentFrequency: 12,
    });
    setResults(null);
    setShowResults(false);
  };

  const calculateLoan = () => {
    const { loanAmount, interestRate, loanTerm, paymentFrequency } = loanData;

    // Calculate number of payments
    const totalPayments = loanTerm * paymentFrequency;

    // Calculate interest rate per period
    const interestPerPeriod = interestRate / 100 / paymentFrequency;

    // Calculate payment amount using the formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n - 1]
    const numerator =
      interestPerPeriod * Math.pow(1 + interestPerPeriod, totalPayments);
    const denominator = Math.pow(1 + interestPerPeriod, totalPayments) - 1;
    const paymentAmount = loanAmount * (numerator / denominator);

    // Calculate total payment and total interest
    const totalPayment = paymentAmount * totalPayments;
    const totalInterest = totalPayment - loanAmount;

    // Generate amortization schedule
    const amortizationSchedule = generateAmortizationSchedule(
      loanAmount,
      interestPerPeriod,
      paymentAmount,
      totalPayments
    );

    setResults({
      paymentAmount,
      totalPayment,
      totalInterest,
      amortizationSchedule,
    });

    setShowResults(true);
  };

  const generateAmortizationSchedule = (
    principal,
    interestPerPeriod,
    paymentAmount,
    totalPayments
  ) => {
    const schedule = [];
    let remainingBalance = principal;

    for (let i = 1; i <= Math.min(totalPayments, 60); i++) {
      // Calculate interest for this period
      const interestPayment = remainingBalance * interestPerPeriod;

      // Calculate principal for this period
      const principalPayment = paymentAmount - interestPayment;

      // Update remaining balance
      remainingBalance -= principalPayment;

      // Ensure we don't have negative balance due to rounding
      if (remainingBalance < 0) {
        remainingBalance = 0;
      }

      schedule.push({
        paymentNumber: i,
        paymentAmount,
        principalPayment,
        interestPayment,
        remainingBalance,
      });
    }

    return schedule;
  };

  return (
    <section className="calculator-section">
      <h1>Loan Calculator Dashboard</h1>
      <div className="calculator-form">
        <div className="form-group ">
          <label htmlFor="paymentFrequency">Payment Frequency</label>
          <select
            id="paymentFrequency"
            value={loanData.paymentFrequency}
            onChange={handleInputChange}
          >
            <option value="12">Monthly</option>
            <option value="26">Bi-weekly</option>
            <option value="52">Weekly</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="loanAmount">
            Loan Amount ({CURRENCY_SYMBOLS[currency]})
          </label>
          <input
            type="number"
            id="loanAmount"
            placeholder={`e.g. 300000`}
            min="1"
            value={loanData.loanAmount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            type="number"
            id="interestRate"
            placeholder="e.g. 4.5"
            step="0.01"
            min="0.01"
            value={loanData.interestRate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="loanTerm">Loan Term (Years)</label>
          <input
            type="number"
            id="loanTerm"
            placeholder="e.g. 30"
            min="1"
            value={loanData.loanTerm}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="currency">Currency</label>
          <select
            id="currency"
            value={currency}
            onChange={handleCurrencyChange}
            className="currency-select"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
          </select>
        </div>
        <div className="button-group">
          <button
            type="button"
            onClick={calculateLoan}
            className="calculate-btn"
          >
            Calculate
          </button>
          <button type="button" onClick={resetCalculator} className="reset-btn">
            Reset
          </button>
        </div>
      </div>

      {showResults && results && (
        <Results
          results={results}
          totalPayments={loanData.loanTerm * loanData.paymentFrequency}
          currency={currency}
          exchangeRate={EXCHANGE_RATES[currency]}
        />
      )}
    </section>
  );
};

export default Calculator;
