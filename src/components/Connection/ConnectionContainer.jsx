import React from "react";
import Nav from "../Home/Navigation/Nav";

import "../../styles/connectionstyles.css";
import ConnectionDisplay from "./ConnectionDisplay";
const ConnectionContainer = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="connection-main__wrapper">
        <div className="search-input__wrapper">
          <input className="search-input" type="text" placeholder="search" />
        </div>
        <div>
          <ul className="search-categories__wrapper">
            <li>
              <button>Top</button>
            </li>
            <li>
              <button>Accounts</button>
            </li>
            <li>
              <button>Places</button>
            </li>
            <li>
              <button>Tags</button>
            </li>
            <li>
              <button>Others</button>
            </li>
          </ul>
        </div>

        <div>
          <ConnectionDisplay />
        </div>
      </div>
    </div>
  );
};

export default ConnectionContainer;
