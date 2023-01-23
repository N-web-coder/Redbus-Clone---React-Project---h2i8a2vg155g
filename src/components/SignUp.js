import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/SignUp.css";

function SignUp() {
  const renderForm = (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <div className="navbar">
        <img
          src="https://seeklogo.com/images/R/redbus-logo-13648C0E43-seeklogo.com.png"
          alt="REDBUS logo"
          className="logo"
        ></img>
        <h5>
          <NavLink
            to="/"
            style={{ color: "rgb(236, 236, 236)", textDecoration: "none" }}
          >
            Bus Tickets
          </NavLink>
        </h5>
        <h5>
          <NavLink
            to="/help"
            style={{ color: "rgb(236, 236, 236)", textDecoration: "none" }}
          >
            Help
          </NavLink>
        </h5>
        <div id="lastNav">
          <h6 className="both">Manage Booking</h6>
          <select className="both">
            <option defaultValue="Manage Booking">Bus Tickets</option>
            <option>Cancle</option>
            <option>Change Travel Date</option>
            <option>Show My Ticket</option>
            <option>Email/SMS</option>
          </select>
          <NavLink
            to="/signup"
            >
            <img
              id="sign"
              src="https://static.thenounproject.com/png/6478-200.png"
            />
          </NavLink>
        </div>
      </div>
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {renderForm}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
