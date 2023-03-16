import React from "react";

const ConnectionDisplay = () => {
  return (
    <div>
      <div className="connectiondisplay-main__wrapper">
        <div className="connections__wrapper">
          <div className="image-temp"></div>
          <p className="connection-name__text">Aaron Julian Sierra</p>
          <div className="connections-btns">
            <button className="btnEmpty btn-connect">connect</button>
            <button className="btnEmpty btn-block">block</button>
          </div>
        </div>

        <div className="connections__wrapper">
          <div className="image-temp"></div>
          <p className="connection-name__text">Michael B Jordan</p>
          <div className="connections-btns">
            <button className="btnEmpty btn-connect">connect</button>
            <button className="btnEmpty btn-block">block</button>
          </div>
        </div>

        <div className="connections__wrapper">
          <div className="image-temp"></div>
          <p className="connection-name__text">Cole World</p>
          <div className="connections-btns">
            <button className="btnEmpty btn-connect">connect</button>
            <button className="btnEmpty btn-block">block</button>
          </div>
        </div>

        <div className="connections__wrapper">
          <div className="image-temp"></div>
          <p className="connection-name__text">Kendrick Lamar</p>
          <div className="connections-btns">
            <button className="btnEmpty btn-connect">connect</button>
            <button className="btnEmpty btn-block">block</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionDisplay;
