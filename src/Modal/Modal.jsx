import {React} from 'react'
import './Modal.css'

function Modal(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className="inner-popup">
        <div className='h3text'>
          <h3>Sign In</h3>
        </div>
        <button className='Close-btn' onClick={() => props.setTrigger(false)}>&times;</button>
        {props.children}
        <input type='text' placeholder='Enter Mail' className='email-id'></input>
        <input type='text' placeholder='Enter Password' className='pass'></input>
        <div className='Forgot'><button >Forgot Password?</button></div>
        <div className="Submit-btn">
          <button>SUBMIT</button>
        </div>
      </div>

    </div>
  ) : "";
}


export default Modal