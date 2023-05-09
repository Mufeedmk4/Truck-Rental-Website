import React from 'react'
import Location from './Location.js'


function Header() {
  return (
    <div className='header'>
        <img className="header-image" src="images/moving-header.jpg"></img>
        <Location />
    </div>
  )
}

export default Header