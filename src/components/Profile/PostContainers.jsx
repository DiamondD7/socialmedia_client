import React, { useState } from "react";
import {
  BiLike,
  BiShare,
  BiCommentDetail,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import Nature from "../../assets/images/nature.jpg";
import TestPost2 from "../../assets/images/testpost2.jpg";
import { testing } from "../../assets/testData"; //delete temp data, change it to the real data later
const PostContainers = () => {
  const [openThreeDotsMenu, setOpenThreeDotsMenu] = useState(null);

  const clickThreeDots = (id) => {
    if (openThreeDotsMenu === null) {
      setOpenThreeDotsMenu(id);
    } else {
      if (openThreeDotsMenu !== id) {
        setOpenThreeDotsMenu(id);
      } else {
        setOpenThreeDotsMenu(null);
      }
    }
  };
  return (
    <div>
      <div className="post-container__wrapper">
        {testing.map((items) => (
          <button key={items.Id} className="post-button__wrapper">
            <div
              className="post__wrapper"
              style={{
                backgroundImage: `url(${Nature})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <div className="post-content__wrapper">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae earum harum omnis quasi obcaecati minus illum
                  laborum commodi, minima laudantium molestias facilis qui
                  exercitationem provident ullam dolorum repellendus
                  perspiciatis sapiente.
                </p>
              </div>

              <div className="post-icons__wrapper">
                <ul className="post-icons">
                  <li>
                    <button>
                      <BiLike
                        size="20px"
                        style={{ backgroundColor: "transparent" }}
                      />
                    </button>
                  </li>
                  <li>
                    <button>
                      <BiCommentDetail
                        size="20px"
                        color="blue"
                        style={{ backgroundColor: "transparent" }}
                      />
                    </button>
                  </li>
                  <li>
                    <button>
                      <BiShare
                        size="20px"
                        style={{ backgroundColor: "transparent" }}
                      />
                    </button>
                  </li>

                  <li>
                    <button onClick={() => clickThreeDots(items.Id)}>
                      <BiDotsHorizontalRounded
                        size="20px"
                        style={{ backgroundColor: "transparent" }}
                      />
                    </button>
                  </li>
                </ul>
                {openThreeDotsMenu === items.Id ? (
                  <div className="dropdown-threedots__wrapper">
                    <button className="dropdown-btns">Favorites</button>
                    <br />
                    <button className="dropdown-btns">Edit</button>
                    <br />
                    <button className="dropdown-btns">Hide</button>
                    <br />
                    <button className="dropdown-btns deleteBtn">Delete</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </button>
        ))}

        <button className="post-button__wrapper">
          <div
            className="post__wrapper"
            style={{
              backgroundImage: `url(${TestPost2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <div className="post-content__wrapper">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae earum harum omnis quasi obcaecati minus illum laborum
                commodi, minima laudantium molestias facilis qui exercitationem
                provident ullam dolorum repellendus perspiciatis sapiente.
              </p>
            </div>

            <div className="post-icons__wrapper">
              <ul className="post-icons">
                <li>
                  <button>
                    <BiLike
                      size="20px"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </button>
                </li>
                <li>
                  <button>
                    <BiCommentDetail
                      size="20px"
                      color="blue"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </button>
                </li>
                <li>
                  <button>
                    <BiShare
                      size="20px"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </button>
                </li>
                <li>
                  <button>
                    <BiDotsHorizontalRounded
                      size="20px"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </button>
        <div className="post__wrapper"></div>
        <div className="post__wrapper"></div>
        <div className="post__wrapper"></div>
        <div className="post__wrapper"></div>
        <div className="post__wrapper"></div>
      </div>
    </div>
  );
};

export default PostContainers;
