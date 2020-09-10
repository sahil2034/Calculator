import React, { useState } from "react";
import PieChart from "./PieChart";
import "/public/styles.css";

function HomeLoan() {
  const [loan, setLoan] = useState(0);
  const [rate, setRate] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi1, setEMI1] = useState(rate * 0.01);
  const [emi, setEMI] = useState(emi1 * loan);
  const [totalEMI, setTotalEMI] = useState(emi * tenure);
  const [payment, setPayment] = useState(loan + rate);

  //loan amount
  function handleloan(event) {
    //the + sign converts string to number type(unary operator)
    setLoan(+event.target.value);
  }

  function handlerate(event) {
    setRate(+event.target.value);
  }

  //currently its taking only months into consideration
  function handletenure(event) {
    setTenure(+event.target.value);
  }

  function calculate(event) {
    setEMI1(rate * 0.01);
    setEMI(emi1 * loan);
    //below is total interest payable; change the formula accordingly casue i am not sure of this one
    setTotalEMI(emi * tenure);
    setPayment(loan + emi);
    event.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={calculate}>
        <div className="frame">
          <p className="text">Home loan amount</p>
          <input
            className="bar"
            onChange={handleloan}
            type="number"
            placeholder="enter loan"
            value={loan}
          />

          <p className="text">Interest Rate</p>
          <input
            className="bar"
            onChange={handlerate}
            type="number"
            placeholder="enter Rate"
            value={rate}
          />

          <p className="text">Loan Tenure</p>
          <input
            className="bar"
            onChange={handletenure}
            type="number"
            placeholder="enter Tenure"
            value={tenure}
          />
        </div>

        <button className="submit">calculate</button>
      </form>

      <hr />
      <div className="framing">
        <p>Loan EMI</p>
        <p>{emi}</p>
      </div>
      <hr />
      <div className="framing">
        <p>Total Interest Payable</p>
        <p>{totalEMI}</p>
      </div>
      <hr />
      <div className="framing">
        <p>Total Payment</p>
        <p>{payment}</p>
      </div>
      <hr />
      <PieChart principalAmount={loan} totalInterest={payment} />
    </div>
  );
}

export default HomeLoan;
