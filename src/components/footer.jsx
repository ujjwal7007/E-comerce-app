import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs"
import google from "../assets/images/pay/play.jpg"

const footer = () => {
  return (
    <>
    <footer className='footer p-5'>
      <div className="container-xxl">
        <div className="row">
          <div className='col-4 d-flex flex-column'>
            <h3 className='mb-4'>Contact us</h3>
            <div className="footer-details">
              <p className='mb-3'><b>Address:</b> Ground floor, Mohan Rd, near Tikait Rai Talab, opp. Power House Road, LDA Colony, Rajajipuram, Lucknow, Uttar Pradesh 226003</p>
              <p className='mb-3'><b>Phone:</b><a href="tel:+9157865438"> Call us +9157865438</a></p>
              <p className='mb-3'><b>Hours Open:</b> From 8 A.M to 11 P.M</p>
              <p className='mb-3'><b>Follow us</b></p>
              <div className="col-4 social-icons mb-3 d-flex justify-content-around">
                <Link><AiFillTwitterCircle className='fs-4'/></Link>
                <Link><BsFacebook className='fs-4'/></Link>
                <Link><BsInstagram className='fs-4'/></Link>
                <Link><BsLinkedin className='fs-4'/></Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <h3 className="mb-4">About</h3>
            <div className="footer-details d-flex flex-column">
              <Link className='mb-3 text-black'>
                About Us
              </Link>
              <Link className='mb-3 text-black'>
                Delivery
              </Link>
              <Link className='mb-3 text-black'>
                Privacy Policy
              </Link>
              <Link className='mb-3 text-black'>
                Terms & Conditions
              </Link>
              <Link className='mb-3 text-black'>
                Fee Policy
              </Link>
            </div>
          </div>
          <div className="col-2">
            <h3 className="mb-4">Account</h3>
            <div className="footer-details d-flex flex-column">
              <Link className='mb-3 text-black'>
                Profile
              </Link>
              <Link className='mb-3 text-black'>
                View Cart
              </Link>
              <Link className='mb-3 text-black'>
                Help
              </Link>
              <Link className='mb-3 text-black'>
                Payments
              </Link>
              <Link className='mb-3 text-black'>
                My Wishlist
              </Link>
              <Link className='mb-3 text-black'>
                Coupons
              </Link>
            </div>
          </div>
          <div className="col-4">
            <h3 className='mb-3'>Install App</h3>
            <div className="footer-details">
              <p>Available On Google Play Services & App Store</p>
              <img src={google} alt='' className='img-fluid p-4' />
            </div>

          </div>
        </div>
        <hr/>
        <div className="row d-flex justify-content-between">
          <div className="col-3">
            <p>&copy; Developed by Ujjwal Gupta 2023</p>
          </div>
          <div className="col-3 d-flex justify-content-around">
            <Link className='text-black'>Privacy Policy</Link>
            <Link className='text-black'>Terms of Use</Link>
            <Link className='text-black'>Contact Me</Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default footer