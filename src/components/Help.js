import React from "react";
import "../styles/Help.css";
import { NavLink } from "react-router-dom";

const Help = () => {
  return (
    <div>
      <div className="help">
        <div className="navbar">
          <img
            src="https://seeklogo.com/images/R/redbus-logo-13648C0E43-seeklogo.com.png"
            alt="REDBUS logo"
            className="logo"
          ></img>
          <h5>
            <NavLink to="/"  style={{ color: "rgb(236, 236, 236)", textDecoration: "none" }} >BUS TICKETS</NavLink>
          </h5>
          <h5>
            <NavLink to="/help"  style={{ color: "rgb(236, 236, 236)", textDecoration: "none" }} >Help</NavLink>
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
              to="/signUp"
              > 
              <img
                id="sign"
                src="https://static.thenounproject.com/png/6478-200.png"
              />
            </NavLink>
          </div>
        </div>
        <h1 className="name">redBus Help</h1>
        <div className="image"></div>
        <div className="support">24/7 Customer Support</div>
        <div className="footer">
          <div id="sixth">
            <div>
              <img src="https://s3.rdbuz.com/web/images/home/sgp/r_logo.png" />
            </div>
            <h6>
              redBus is the world's largest{" "}
              <strong>online bus ticket booking</strong> service trusted by over
              25 million happy customers globally. redBus offers bus ticket
              booking through its website,iOS and Android mobile apps for all
              major routes.
            </h6>
            <img
              id="twitter"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png"
            />
            <img
              id="fb"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbRpI_gK5tFrnBv3KR8WepIOfiCUX_pdmUm_u4Ju0&s"
            />
            <h6>Ⓒ 2023 ibibogroup All rights reserved</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
