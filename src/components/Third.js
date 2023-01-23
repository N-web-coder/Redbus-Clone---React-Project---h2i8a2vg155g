import React from 'react'
import "../styles/Third.css";

const Third = (props) => {
  console.log(props.sameData);
  return (
    <div>
      <div className='large' >
        <div className='grid'>
        <div id='busDetail' >bus detail</div>
          {/* <div className='gridItem' ></div>
          <div className='gridItem' ></div>
          <div className='gridItem' ></div>
          <div className='gridItem' ></div>
          <div className='gridItem' ></div>
          <div className='gridItem' ></div>
          <div className='gridItem' ></div>
          <div className='gridItem' ></div>
          <div className='gridItem' ></div>
          <div className='gridItem' ></div>
          <div className='gridItem' ></div>
          <div className='gridItem' ></div>
          <div className='gridItem' ></div> */}
        <div id='book' >BOOK TICKETS</div>
        </div>
      </div>
    </div>
  )
}

export default Third