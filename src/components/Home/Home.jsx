import React from "react";
import Nav from "./Navigation/Nav";
import StatusContainer from "./Home Components/StatusContainer";

import "../../styles/homehubstyles.css";
import FeedContainers from "./Home Components/FeedContainers";
const Home = () => {
  return (
    <div>
      <div>
        <Nav />
        <div className="hub-main__wrapper">
          <div className="components_wrapper">
            {/* Home Components here */}
            <StatusContainer />
            <FeedContainers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;