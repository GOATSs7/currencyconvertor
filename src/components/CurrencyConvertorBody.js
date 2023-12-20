import React from "react";

const CurrencyConvertorBody = () => {
  return (
    <>
      <div className="card">
        <div className="titlediv">
          <img src="/images/rupee.png" alt="rupee" className="rupee" />

          <h1 className="titleName">Currency Converter</h1>
        </div>

        <div className="currency_exchange">
          <div className="input_container">
            <label className="input_lable">
              <b> Amount:</b>
            </label>
            <input type="number" name="amount" className="input_field" />
          </div>

          <div className="input_container">
            <label className="input_lable">
              <b>From Currency:</b>
            </label>
            <select name="currency" className="input_field">
              <option value="sangram">sangram</option>
              <option value="rutika">Rutika</option>
              <option value="Shobha">Shobha</option>
              <option value="Dadaso">Dadaso</option>
              <option value="Varsha">Varsha</option>
            </select>
          </div>

          <div className="input_container">
            <label className="input_lable">
              <b>To Currency:</b>
            </label>
            <select name="currency" className="input_field">
              <option value="sangram">sangram</option>
              <option value="rutika">Rutika</option>
              <option value="Shobha">Shobha</option>
              <option value="Dadaso">Dadaso</option>
              <option value="Varsha">Varsha</option>
            </select>
          </div>
        </div>

        <div className="output">
          <h2 className="output_amount">Converted Amount:6969</h2>
        </div>
      </div>
    </>
  );
};

export default CurrencyConvertorBody;
