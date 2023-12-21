import React, { useState, useEffect } from "react";
import axios from "axios";
const CurrencyConvertorBody = () => {
  const [exchangeRate, setExchangeRate] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const apiUrl = `https://v6.exchangerate-api.com/v6/9345b9b99681eeed742d82e9/latest/${fromCurrency}`;
    axios
      .get(apiUrl)
      .then((res) => {
        setExchangeRate(res.data.conversion_rates);
      })
      .catch((error) => {
        console.error("Error fetching exchange rates:", error);
      });
  }, [fromCurrency]);

  useEffect(() => {
    document.title = "Currency Converter";
    const conersionRate = exchangeRate[toCurrency];
    if (conersionRate) {
      const Converted = amount * conersionRate;
      setConvertedAmount(Converted.toFixed(2));
    }
  }, [amount, fromCurrency, toCurrency, exchangeRate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "amount":
        setAmount(value);
        console.log(amount);
        break;
      case "fromCurrency":
        setFromCurrency(value);
        break;
      case "toCurrency":
        setToCurrency(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="card">
        <div className="titlediv">
          <img src="/images/rupee.png" alt="rupee" className="rupee" />
          <div className="titleName">
            <h1>Currency Converter</h1>
          </div>
        </div>

        <div className="currency_exchange">
          <div className="input_container">
            <label className="input_lable">
              <b> Amount:</b>
            </label>
            <input
              type="text"
              name="amount"
              value={amount}
              onChange={handleChange}
              className="input_field"
            />
          </div>

          <div className="input_container">
            <label className="input_lable">
              <b>From Currency:</b>
            </label>
            <select
              name="fromCurrency"
              value={fromCurrency}
              onChange={handleChange}
              className="input_field"
            >
              {Object.keys(exchangeRate).map((currency) => {
                return (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="input_container">
            <label className="input_lable">
              <b>To Currency:</b>
            </label>
            <select
              name="toCurrency"
              value={toCurrency}
              onChange={handleChange}
              className="input_field"
            >
              {Object.keys(exchangeRate).map((currency) => {
                return (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="output">
          <h2>
            Converted Amount : {convertedAmount} {toCurrency}
          </h2>
        </div>
      </div>
    </>
  );
};

export default CurrencyConvertorBody;
