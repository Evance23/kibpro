import "./FooterStyles.css";

import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="right">
          <h4>Kibetech.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam 
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#088F8F", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#088F8F", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#088F8F", marginRight: "1rem" }}
            />
          </div>
        </div>
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#088F8F", marginRight: "2rem" }}
            />
            <div> 
              <p>Kibetech</p>
              <p>Nairobi</p>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#088F8F", marginRight: "2rem" }}
                />
                0701020304
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#088F8F", marginRight: "2rem" }}
                />
                evancesoftdev@gmail.com
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
