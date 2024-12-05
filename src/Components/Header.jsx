import {React,useState} from 'react'
import Modal from '../Modal/Modal'

const Header = (props) => {
    const [popupButton,setButtonpopup]= useState(false)

    return (
        <div className='headersection'>
            <div className='left'>
                <div className='title'>
                   <img src='https://mumbaimirror.indiatimes.com/photo/80601325.cms' alt='logoimg' className='image'></img>
                </div>
            </div>
            <div className='center'>
                <ul>
                    <li>MEN</li>
                    <li>KIDS</li>
                    <li>WOMEN</li>
                    <li>BEAUTY</li>
                    <li>STUDIO</li>
                    <li>HOME</li>
                </ul>
            </div>
            <div className="search">
                {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                <input type='text' placeholder='Search' className='testbox'/>
            </div>
            <div className='right'>
                <div className="sign"><button className='Sign-btn' onClick={() => setButtonpopup(true)} >Sign In</button></div>
                <div className="cart">Cart</div>
            </div>
            <Modal trigger = {popupButton} setTrigger={setButtonpopup}>
            </Modal>
        </div>
    )
}

export default Header