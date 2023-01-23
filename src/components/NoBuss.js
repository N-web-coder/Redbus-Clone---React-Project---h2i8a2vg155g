import React, { useState } from 'react'
import '../styles/NoBuss.css';

const NoBuss = () => {

  return (
    <div>
        <div className='not' >
            <h1>Oops! No buses found.</h1>
            <img src='https://www.redbus.in/images/no_bus.png'/>
            <h4>No routes available</h4>
        </div>
    </div>
  )
}

export default NoBuss