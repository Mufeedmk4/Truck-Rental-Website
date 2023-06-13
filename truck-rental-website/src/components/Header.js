import React from 'react'
import Location from './Location.js'
import Offers from './Offers.js'
import Modules from './Modules.js'

function Header() {
  return (
    <div className='header'>
        <img src="images/moving-header.jpg"></img>
        <Location />
        <Offers />
        <Modules />
    </div>
  )
}

export default Header