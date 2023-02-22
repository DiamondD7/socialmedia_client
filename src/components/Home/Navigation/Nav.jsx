import React from "react";
import HubLogo from "../../../assets/images/HiveMiniLogo.png";
import "../../../styles/navstyles.css";
const Nav = () => {
  return (
    <div>
      <div className="hub-wrapper">
        <ul className="nav-wrapper">
          <li className="firstLI">
            <img className="hub-imageLogo" src={HubLogo} />
            <input className="nav-search" type="text" placeholder="search" />
          </li>
          <li>Home</li>
          <li>Profile</li>
          <li>Connections</li>
          <li>Messaging</li>
          <li>Notification</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
