import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Second.css";
import Third from "./Third";
import "bootstrap/dist/css/bootstrap.min.css"
import NoBuss from "./NoBuss";

const Second = (props) => {
  const [data, setData] = useState(props.data);
  const [clickevent, setClickEvent] = useState()
  const [passDataThird, setPassDataThird] = useState("")

  const sortBn = () => {
    const BnData = [...data];
    BnData.sort(function (a, b) {
      var c = a.busName;
      var d = b.busName;
      return c > d ? 1 : -1;
    });
    setData(BnData);
  };
  const sortPrice = () => {
    const pData = [...data];
    pData.sort(function (a, b) {
      var c = a.ticketPrice;
      var d = b.ticketPrice;
      return c > d ? 1 : -1;
    });
    setData(pData);
  };
  const sortDept = () => {
    const DeptData = [...data];
    DeptData.sort(function (a, b) {
      return a.departureTime.localeCompare(b.departureTime);
    });
    setData(DeptData);
  };
  const sortAt = () => {
    const AtData = [...data];
    AtData.sort(function (a, b) {
      return a.arrivalTime.localeCompare(b.arrivalTime);
    });
    setData(AtData);
  };

  const showAvlTickets=(id)=>{
    setPassDataThird("3rd")
    console.log(id);
  }
  
  return (
    <div className="box1">
    <div id="sort" >SORT BY : </div>
    { data.length > 0 ?
    <table>
      <thead>
        <tr>
          <th onClick={sortBn}>Bus Name</th>
          <th onClick={sortDept}>Departure Time</th>
          <th onClick={sortAt}>Arrival Time</th>
          <th onClick={sortPrice}>Ticket Price</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item,index) => (
          <tr key={index} onClick={(e)=>showAvlTickets(item.id)}>
            <td> <h7>BusName : </h7> {item.busName} <div> <h7>Date : </h7> {item.date} </div> </td>
            <td> <h7>Departure Time : </h7> {item.departureTime} <div> <h7> To : </h7> {item.source} </div> </td>
            <td> <h7>Arrival Time : </h7> {item.arrivalTime} <div> <h7>From : </h7> {item.destination} </div> </td>
            <td> <h7> Ticket Price : </h7><div> {item.ticketPrice} /-</div> </td>
          </tr>
        ))} 
      </tbody>
    </table>  : <NoBuss/> }
     
    {/* <div>{passDataThird === "3rd" && <Third sameData={data} /> }</div> */}
  </div>     
  );
};

export default Second;
