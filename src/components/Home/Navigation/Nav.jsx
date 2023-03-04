import React from "react";
import { Link } from "react-router-dom";
import HubLogo from "../../../assets/images/HiveMiniLogo.png";
import "../../../styles/navstyles.css";
const Nav = () => {
  return (
    <div>
      <div className="hub-wrapper">
        <ul className="nav-wrapper">
          <li className="firstLI">
            <Link to="/hub">
              <img className="hub-imageLogo" src={HubLogo} />
            </Link>
            <input className="nav-search" type="text" placeholder="search" />
          </li>
          <li>
            <Link to="/hub" style={{ textDecoration: "none" }}>
              Feed
            </Link>
          </li>
          <li>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/connections" style={{ textDecoration: "none" }}>
              Connections
            </Link>
          </li>
          <li>Messaging</li>
          <li>Notification</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
