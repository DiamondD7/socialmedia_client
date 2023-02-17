import React from "react";
import HiveLogo from "../../../assets/images/HiveLogo.png";
import { Link } from "react-router-dom";

import "../../../styles/loginformstyles.css";
const LogInForm = () => {
  return (
    <div>
      <div className="loginform-wrapper">
        <div className="flex-wrapper">
          <div>
            <img src={HiveLogo} />
          </div>
          <form className="form-wrapper">
            <div className="form__inputs">
              <div>
                <div className="signin-header__wrapper">
                  <h1>Sign in</h1>
                </div>
                <input
                  className="form-inputs__username"
                  type="text"
                  placeholder="Username"
                />

                <br />

                <input
                  className="form-inputs__password"
                  type="password"
                  placeholder="Password"
                />
                <br />
                <button className="form-inputs__button">Sign In</button>
                <br />
                <div className="form-anchortags">
                  <a>No Account yet? Click </a>
                  <Link to="/signup">Here</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LogInForm;
