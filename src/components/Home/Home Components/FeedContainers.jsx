import React from "react";
import NaturePic from "../../../assets/images/nature.jpg";
import AJS from "../../../assets/images/AJS.jpg";
import { BiLike, BiShare, BiCommentDetail } from "react-icons/bi";

import { HiArrowRight } from "react-icons/hi";
const FeedContainers = () => {
  return (
    <div className="feed-main__wrapper">
      <div className="feed-wrapper">
        <div className="feed-post__wrapper">
          <div>
            <img className="feed-post1" src={NaturePic} />
          </div>
          <div>
            <div className="feed-post__profilePicUser__wrapper">
              <img className="feed-post__profilepicture" src={AJS} />
              <label className="feed-post__labelUserName">@nameName</label>
            </div>
            <p className="feed-post__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              qui dicta quas debitis culpa officia rem nihil reiciendis ducimus
              doloribus voluptatum laborum numquam cumque sunt, asperiores
              voluptatibus blanditiis eligendi cupiditate! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Saepe, perspiciatis minus!
              Repellat quis, sit velit suscipit illum deserunt. Ipsum qui
              provident nemo suscipit impedit corrupti facilis minus. Cum,
              sapiente accusantium?
            </p>

            <div className="feed-post__icons">
              <ul className="feed-post__iconsUl_wrapper">
                <li>
                  <BiLike size="20px" color="blue" />
                </li>
                <li>
                  <BiCommentDetail size="20px" color="blue" />
                </li>
                <li>
                  <BiShare size="20px" />
                </li>
              </ul>
              <p className="feed-post__date">18/02/2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="feed-wrapper"></div>
      <div className="feed-wrapper"></div>
    </div>
  );
};

export default FeedContainers;
