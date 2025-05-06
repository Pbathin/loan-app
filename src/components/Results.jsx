import React from "react";

const Results = ({ results, totalPayments }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="results show">
      <h2 className="result-header">Loan Calculation Results</h2>
      <div className="result-item">
        <span className="result-label">Payment Amount:</span>
        <span>{formatCurrency(results.paymentAmount)}</span>
      </div>
      <div className="result-item">
        <span className="result-label">Total Payment:</span>
        <span>{formatCurrency(results.totalPayment)}</span>
      </div>
      <div className="result-item">
        <span className="result-label">Total Interest:</span>
        <span>{formatCurrency(results.totalInterest)}</span>
      </div>

      <h3 className="result-header">Amortization Schedule</h3>
      <div className="amortization-container">
        <table className="amortization-table">
          <thead>
            <tr>
              <th>Payment #</th>
              <th>Payment Amount</th>
              <th>Principal</th>
              <th>Interest</th>
              <th>Remaining Balance</th>
            </tr>
          </thead>
          <tbody>
            {results.amortizationSchedule.map((payment) => (
              <tr key={payment.paymentNumber}>
                <td>{payment.paymentNumber}</td>
                <td>{formatCurrency(payment.paymentAmount)}</td>
                <td>{formatCurrency(payment.principalPayment)}</td>
                <td>{formatCurrency(payment.interestPayment)}</td>
                <td>{formatCurrency(payment.remainingBalance)}</td>
              </tr>
            ))}
            {totalPayments > 60 && (
              <tr>
                <td
                  colSpan="5"
                  style={{ textAlign: "center", fontStyle: "italic" }}
                >
                  ... Showing first 60 payments out of {totalPayments} ...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
