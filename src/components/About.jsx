import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About This Loan Calculator</h2>
        <p>
          This loan calculator helps you estimate your loan payments and
          understand the amortization schedule over the life of your loan.
          Whether you're planning to buy a home, car, or need a personal loan,
          this tool can help you make informed financial decisions.
        </p>

        <h2>How It Works</h2>
        <p>
          Our calculator uses standard loan amortization formulas to calculate
          your periodic payments based on the loan amount, interest rate, term,
          and payment frequency you provide.
        </p>

        <p>The amortization formula used is:</p>
        <p>
          <strong>M = P [ i(1 + i)^n ] / [ (1 + i)^n - 1]</strong>
        </p>
        <p>Where:</p>
        <ul>
          <li>M = Payment amount per period</li>
          <li>P = Principal (loan amount)</li>
          <li>i = Interest rate per period</li>
          <li>n = Total number of payments</li>
        </ul>

        <h2>Features</h2>
        <p>Our loan calculator offers:</p>
        <ul>
          <li>Calculation of monthly, bi-weekly, or weekly payment amounts</li>
          <li>Total payment over the life of the loan</li>
          <li>Total interest paid</li>
          <li>
            Detailed amortization schedule showing how each payment is applied
            to principal and interest
          </li>
          <li>Dark and light theme options for comfortable viewing</li>
        </ul>

        <h2>Disclaimer</h2>
        <p>
          This calculator is for informational purposes only. The results should
          be considered estimates and may not reflect the actual terms offered
          by lenders. Please consult with a financial professional before making
          any major financial decisions.
        </p>
      </div>
    </section>
  );
};

export default About;
