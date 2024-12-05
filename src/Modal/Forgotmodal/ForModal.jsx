import React from 'react'
import './ForModal.css'


function ForModal(prop) {
    if (!prop.trigger) {
      return null; // Return nothing if the modal should not be displayed
    }
    return(
    <div>
           {/* <div className="inner-popup">
        <div className='h3text'>
          <h3>Sign In</h3>
        </div>
        <button className='Close-btn' >&times;</button>
        {prop.children}
        <input type='text' placeholder='Enter Mail' className='email-id'></input>
        <input type='text' placeholder='Enter Password' className='pass'></input>
        <div className='Forgot'><button>Forgot Password?</button></div>
        <div className="Submit-btn">
          <button>SUBMIT</button>
        </div>
      </div> */}
    </div>
  )
}

export default ForModal