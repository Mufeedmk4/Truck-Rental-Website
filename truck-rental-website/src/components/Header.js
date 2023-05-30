import React from 'react'
import Location from './Location.js'
import Offers from './Offers.js'

function Header() {
  return (
    <div className='header'>
        <img src="images/moving-header.jpg"></img>
        <Location />
        <Offers />
    </div>
  )
}

export default Header