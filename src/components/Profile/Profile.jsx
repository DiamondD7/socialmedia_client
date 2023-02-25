import React from "react";
import Nav from "../Home/Navigation/Nav";
import TestImg from "../../assets/images/testimg.webp";

import "../../styles/profilestyles.css";
const Profile = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="profile-container__wrapper">
        <div className="profile-picture__wrapper">
          <img className="profile-picture" src={TestImg} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
