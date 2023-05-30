import React from 'react'


function nav() {
  return (
    <div className='nav'>
        <div className='nav-top-text'>
            <h1 className='nav-logo'>TTS</h1>
            <p className='nav-subtext'>Trucks, Trailers, and Storage</p>
        </div>
        <div className="nav-top">
            <ul className='nav-items'>
                <li>Careers</li>
                <li>Become a Dealer</li>
                <li>Locations</li>
                <li><i class="fas fa-shopping-cart"></i> Cart</li>
            </ul>
            <button className='signin-btn'>Sign In/Orders</button>
        </div>
        
    </div>
  )
}

export default nav