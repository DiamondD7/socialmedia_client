import React from "react";
import { BiLike, BiShare, BiCommentDetail } from "react-icons/bi";
import Nature from "../../assets/images/nature.jpg";

const PostContainers = () => {
  return (
    <div>
      <div className="post-container__wrapper">
        <button className="post-button__wrapper">
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
              </ul>
            </div>
          </div>
        </button>

        <div className="post__wrapper"></div>
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
