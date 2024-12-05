import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="online-shopping">
        <h5>ONLINE SHOPPING</h5>
        <div className='online-shoppinglist'>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Bueaty</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Gift Cards</li>
          </ul>
        </div>

      </div>
      <div className="CUSTOME-POLICIES">
        <h5>CUSTOMER POLICIES</h5>
        <div className='listofCUSTOMER-POLICIES'>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>TERMS Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancelation</li>
            <li>Return</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="Experience">
        <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
        <div className='Googleimg'>
          <img src='https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png' alt='Google play store'></img>
          <img src='https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png' alt='App Store'></img>
        </div>
        <div className='keepintouch'>
          <h5>KEEP IN TOUCH</h5>
          <div className='FBimg'>
            <img src='https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png' alt='FBimage'></img>
            <img src='https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png' alt='twiterimage'></img>
            <img src='https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png' alt='youtubeimage'></img>
            <img src='https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png' alt='instaimage'></img>
          </div>
        </div>
      </div>
      <div className="trust">
        <div className='trust1'><img src='https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png' alt='100%'></img>
          <strong>100% ORIGINAL </strong>
          <p> guarantee for all products at myntra.com</p>
        </div>
        <div className='trust2'>
          <img src='https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png' alt='101%'></img>
          <strong>Return within 14days</strong>
          <p>of receiving your order</p>
        </div>
      </div>
      <div className='hr'><hr></hr></div>
    </div>
  )
}

export default Footer