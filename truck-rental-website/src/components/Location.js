import React from 'react'


function Location() {
  return (
    <div className='form'>
        <form>
            <div className='form-data-right'>
                <div className='form-data'>
                    <label for="pickup-location" className='label'>Pick Up Location</label>
                    <input type="text" id="pickup-location" placeholder="Enter Location" className='inputs'></input>
                    
                </div>
                <div></div>
                <div className='form-data'>
                    <label for="drop-off-location" className='label'>Drop Off Location</label>
                    <input type="text" id="drop-off-location" placeholder="Enter Location" className='inputs'></input>
                    
                </div>
            </div>
            <div className='form-data-left'>
                <div className='form-data'> 
                    <label for="pickup-date" className='label'>Pick Up Date</label>
                    <input type="text" id="pickup-date" placeholder="Enter Date" className='inputs'></input>
                </div>
                <div></div>
                <div>
                    <button className='submit-btn'>SUBMIT</button>
                </div>
            </div>

        </form>
    </div>
  )
}

export default Location