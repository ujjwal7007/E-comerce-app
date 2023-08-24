import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs"

const footer = () => {
  return (
    <>
    <footer className='footer p-5'>
      <div className="container-xxl">
        <div className="row">
          <div className='col-4 d-flex flex-column'>
            <h3 className='mb-5'>Contact us</h3>
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
        </div>
        <hr/>
        <div className="row">
          <div className="col-9">
            <p>&copy; Developed by Ujjwal Gupta 2023</p>
          </div>
          <div className="col-3 d-flex justify-content-between">
            <Link>Privacy Policy</Link>
            <Link>Terms of Use</Link>
            <Link>Contact Me</Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default footer