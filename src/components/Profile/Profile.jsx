import React from "react";
import Nav from "../Home/Navigation/Nav";
import TestImg from "../../assets/images/testimg.webp";
import PostContainers from "./PostContainers";
import AboutMeContainer from "./AboutMeContainer";
import PostFeaturesContainers from "./PostFeaturesContainers";

import "../../styles/profilestyles.css";
const Profile = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="profile-container__wrapper">
        <div className="profile-container__flexWrapper">
          <div className="features__wrapper">
            <PostFeaturesContainers />
          </div>

          <div className="profile-container-summarry-picture__wrapper">
            <div className="profile-name__wrapper">
              <p className="profile-name__text">Aaron Sierra</p>
            </div>
            <div className="profile-picture__wrapper">
              <img className="profile-picture" src={TestImg} />
            </div>
            <div className="profile-description__wrapper">
              <p className="profile-description__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                nobis nulla, odit sapiente eaque officia quasi minima totam
                doloremque
              </p>
            </div>

            <div className="profile-statistics__wrapper">
              <p>100 Posts</p>
              <p> 2450 Followers</p>
              <p>300 Following</p>
            </div>
          </div>
          <div className="aboutme-container">
            <AboutMeContainer />
          </div>
        </div>
        <div className="profile-content__wrapper">
          <PostContainers />
        </div>
      </div>
    </div>
  );
};

export default Profile;
