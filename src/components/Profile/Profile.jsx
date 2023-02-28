import React from "react";
import Nav from "../Home/Navigation/Nav";
import TestImg from "../../assets/images/testimg.webp";

import "../../styles/profilestyles.css";
import PostContainers from "./PostContainers";
const Profile = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="profile-container__wrapper">
        <div className="profile-container__flexWrapper">
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
          <div className="profile-summary__wrapper">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum
              minima, laboriosam similique ut accusamus dolorem quod vero animi
              deleniti corporis perferendis aspernatur omnis doloribus maxime,
              ab alias minus harum? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eligendi sunt animi autem rem libero earum aut?
              Impedit, odio qui? Ipsa, dolorum pariatur ea quis sunt molestias
              similique necessitatibus accusantium temporibus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Error autem, voluptate
              minus ad quisquam accusamus omnis in asperiores numquam eos
              obcaecati porro explicabo natus libero ab? Itaque Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Optio veritatis culpa
              perspiciatis reprehenderit rem harum odio nobis iusto! Dicta
              assumenda vero expedita incidunt molestias velit fugiat quasi
              facere ipsam quas!
            </p>
            <div className="profile-summmary-navigation__container">
              <ul className="profile-summary__nav__wrapper">
                <li>
                  <button>About Me</button>
                </li>
                <li>
                  <button>Hobbies</button>
                </li>
                <li>
                  <button>Links</button>
                </li>
                <li>
                  <button>Favourites</button>
                </li>
                <li>
                  <button>Quote of the day</button>
                </li>
                <li>
                  <button>Music</button>
                </li>
              </ul>
            </div>
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
