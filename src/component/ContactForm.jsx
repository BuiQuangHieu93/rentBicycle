import React from "react";
import "../index.css";

const ContactForm = () => {
  return (
    <div className="Form-container">
      <div className="Form-customer-service">Customer Service</div>
      <div className="Form-phone-number">0123456789</div>
      <div className="Form-detail">
        Service available Monday to Friday from 8 a.m. to 10 p.m., Saturday from
        9 a.m. to 10 p.m. and Sunday and public holidays from 9 a.m. to 7 p.m.
      </div>
      <div className="Form-detail">Cost of a local call</div>
      <div className="Contact-form">Contact form</div>
      <form className="Form-container-input">
        <div className="Name-container">
          <input
            className="Form-name input-setting"
            placeholder="First name"
            type="text"
          ></input>
          <input
            className="Form-name input-setting"
            placeholder="Last name"
            type="text"
          ></input>
        </div>
        <input
          className="Form-email input-setting"
          placeholder="E-mail"
          required
        ></input>
        <div className="Contact-type">Category *</div>
        <select
          className="Category input-setting"
          id="Category"
          required
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled></option>
          <option selected="selected" value="">
            Subscription to a pass (1&7 days){" "}
          </option>
          <option selected="selected" value="">
            Taking out a subscription
          </option>
          <option selected="selected" value="">
            Subscription take out in
          </option>
          <option selected="selected" value="">
            Other
          </option>
        </select>

        <div className="Contact-type">Sub-category of request *</div>

        <select
          className="Sub-category input-setting"
          id="Sub-category"
          required
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled></option>
        </select>

        <div className="Contact-type">Specific case *</div>

        <select
          className="Specific-case input-setting"
          id="Specific-case"
          required
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled></option>
        </select>

        <div className="Contact-type">Description *</div>

        <textarea className="Form-textarea input-setting" rows="5"></textarea>
        <input type="submit" className="Submit-btn"></input>
      </form>
    </div>
  );
};

export default ContactForm;
