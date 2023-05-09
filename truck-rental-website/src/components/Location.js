import React from 'react'


function Location() {
  return (
    <div className='form'>
        <form>
            <div className='form-data-right'>
                <div className='form-data'>
                    <label for="pickup-location">Pick Up Location</label>
                    <input type="text" id="pickup-location" placeholder="Enter Location"></input>
                    
                </div>
                <div className='form-data'>
                    <label for="drop-off-location">Drop Off Location</label>
                    <input type="text" id="drop-off-location" placeholder="Enter Location"></input>
                    
                </div>
            </div>
            <div className='form-data-left'>
                <div className='form-data'> 
                    <label for="pickup-date">Pick Up Date</label>
                    <input type="text" id="pickup-date" placeholder="Enter Date"></input>
                </div>
                <div>
                    <button>SUBMIT</button>
                </div>
            </div>

        </form>
    </div>
  )
}

export default Location