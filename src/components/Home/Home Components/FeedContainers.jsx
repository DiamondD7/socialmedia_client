import React, { useState, useEffect } from "react";
import NaturePic from "../../../assets/images/nature.jpg";
import AJS from "../../../assets/images/AJS.jpg";
import {
  BiLike,
  BiShare,
  BiCommentDetail,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
const FeedContainers = () => {
  const [dotsModal, setDotsModal] = useState(false);

  const clickDots = () => {
    if (dotsModal === true) {
      setDotsModal(false);
    } else {
      setDotsModal(true);
    }
  };
  return (
    <div className="feed-main__wrapper">
      <div className="feed-wrapper" id="feedMainWrapper">
        <button className="dots-btn" onClick={clickDots}>
          <BiDotsHorizontalRounded
            size="19px"
            style={{ backgroundColor: "white" }}
          />
        </button>
        {dotsModal && (
          <div className="dropdown-dots__wrapper">
            <button className="dropdown__btns">Quick Message</button>
            <br />
            <button className="dropdown__btns">Save</button>
            <br />
            <button className="dropdown__btns">Unfollow</button>
            <br />
            <button className="dropdown__btns">Report</button>
            <br />
            <button className="dropdown__btns">Hide</button>
          </div>
        )}

        <div className="feed-post__wrapper">
          <div>
            <img className="feed-post1" src={NaturePic} />
          </div>
          <div className="feed-post-div">
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
                  <BiLike size="20px" style={{ backgroundColor: "white" }} />
                </li>
                <li>
                  <BiCommentDetail
                    size="20px"
                    style={{ backgroundColor: "white" }}
                  />
                </li>
                <li>
                  <BiShare size="20px" style={{ backgroundColor: "white" }} />
                </li>
              </ul>
              <p className="feed-post__date">18/02/2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="feed-wrapper">
        <button className="dots-btn">
          <BiDotsHorizontalRounded
            size="19px"
            style={{ backgroundColor: "white" }}
          />
        </button>
      </div>
      <div className="feed-wrapper">
        <button className="dots-btn">
          <BiDotsHorizontalRounded
            size="19px"
            style={{ backgroundColor: "white" }}
          />
        </button>
      </div>
    </div>
  );
};

export default FeedContainers;
