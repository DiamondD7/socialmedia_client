import React from "react";
import HiveMiniLogo from "../../assets/images/HiveMiniLogo.png";

import "../../styles/footerstyles.css";
const Footer = () => {
  return (
    <div>
      <div className="footer-wrapper">
        <div>
          <ul className="footer-ul__wrapper">
            <li>About us</li>
            <li>News</li>
            <li>Careers</li>
            <li>Data & Privacy</li>
            <li>Programmes</li>
          </ul>
        </div>
        <div>
          <ul className="footer-secondul__wrapper">
            <li>API</li>
            <li>Help</li>
            <li>Locations</li>
            <li>Non-Users</li>
            <li>Terms</li>
          </ul>
        </div>
        <div>
          <ul className="footer-secondul__wrapper">
            <li>Sign Up</li>
            <li>Services</li>
            <li>Portal</li>
            <li>Watch</li>
            <li>Messaging</li>
          </ul>
        </div>
        <div>
          <img className="footer-img__spinning" src={HiveMiniLogo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
