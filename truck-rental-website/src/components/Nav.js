import React from 'react'

function nav() {
  return (
    <div className='nav'>
        <div>
            <h1 className='nav-logo'>TTS</h1>
            <p className='nav-subtext'>Trucks, Trailers, and Storage</p>
        </div>
        <div>
            <ul className='nav-items'>
                <li>About</li>
                <li>Location</li>
                <li>Trucks/Trailers</li>
                <li>Storage</li>
            </ul>
        </div>
        
    </div>
  )
}

export default nav