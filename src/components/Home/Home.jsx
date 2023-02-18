import React from "react";

import "../../styles/homehubstyles.css";
import Nav from "./Navigation/Nav";
const Home = () => {
  return (
    <div>
      <div>
        <Nav />
        <div className="hub-main__wrapper"></div>
      </div>
    </div>
  );
};

export default Home;
