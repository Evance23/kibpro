import "./FooterStyles.css"


import React from 'react'
import {FaHome, FaPhone} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="right"></div>
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:'#088F8F', marginRight:"2rem"}}/>
                    <div>
                        <p>Kibetech</p>
                        <p>Nairobi</p>

                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color:'#088F8F', marginRight:"2rem"}}/>0701020304</h4>
                    
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
