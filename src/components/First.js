import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/First.css";
import axios from "axios";
import Second from "./Second";

const First = () => {
  const [arr, setArr] = useState([]);
  const [sou, setSource] = useState("");
  const [dest, setDestination] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [sec, setSecond] = useState("");
  const [finalResult, setFinalResult] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses"
      );
      setArr(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  function handleSwap() {
    setDestination(sou);
    setSource(dest);
  }
  function handleSubmit() {
    setSecond("2nd");
  }

  let result = arr.filter((item) => item.source.toLowerCase().includes(sou));
  let result1 = arr.filter((item) =>
    item.destination.toLowerCase().includes(dest)
  );
  let result2 = arr.filter((item) => item.date.includes(dateTime));
  useEffect(() => {
    if (sou) {
      setFinalResult(result);
    }
    if (dest) {
      setFinalResult(result1);
    }
    if (dateTime) {
      setFinalResult(result2);
    }
    setSecond("");
  }, [sou, dest, dateTime]);

  return (
    <div className="box">
      <div className="bg">
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
        <div className="first">
          <input
            placeholder="SOURCE"
            type="text"
            onChange={(e) => setSource(e.target.value)}
            value={sou}
          />
          <i
            className="fa-solid fa-right-left"
            id="swap"
            onClick={handleSwap}
          ></i>
          <input
            placeholder="DESTINATION"
            type="text"
            onChange={(e) => setDestination(e.target.value)}
            value={dest}
          />
          <input
            id="time"
            type="date"
            onChange={(e) => {
              setDateTime(e.target.value);
            }}
            value={dateTime}
          />
          <button type="button" onClick={handleSubmit} data={arr}>
            Search Buses
          </button>
          <div>{sec === "2nd" && <Second data={finalResult} />}</div>
        </div>
      </div>
    </div>
  );
};

export default First;
