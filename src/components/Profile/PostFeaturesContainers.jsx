import React from "react";
import Nature from "../../assets/images/nature.jpg";
import Testpost2 from "../../assets/images/testpost2.jpg";

const PostFeaturesContainers = () => {
  return (
    <div className="features-summary__wrapper">
      <h3 className="features-title__text">Features</h3>
      <div className="features-container">
        <img src={Nature} className="feature1" />
        <img src={Testpost2} className="feature1" />
        <img className="feature1" />
      </div>
    </div>
  );
};

export default PostFeaturesContainers;
