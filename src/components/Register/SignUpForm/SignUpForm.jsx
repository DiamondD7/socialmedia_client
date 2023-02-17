import React from "react";
import { Link } from "react-router-dom";

import "../../../styles/signupformstyles.css";
const SignUpForm = () => {
  return (
    <div>
      <div className="signupcomponent_wrapper">
        <h1 className="signup-header-text">Sign Up</h1>
        <form className="form-signup__wrapper">
          <input
            className="form-signup__input"
            type="text"
            placeholder="First Name"
          />
          <input
            className="form-signup__input"
            type="text"
            placeholder="Last Name"
          />
          <br />
          <input
            className="form-signup__input"
            type="text"
            placeholder="Email address"
          />
          <input
            className="form-signup__input"
            type="password"
            placeholder="Password"
          />
          <br />
          <input
            className="form-signup__confirmpassword"
            type="password"
            placeholder="Confirm password"
          />
          <br />
          <select className="form-signup__input">
            <option>Gender</option>
            <option></option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <select className="form-signup__input">
            <option>Occupation</option>
            <option></option>
            <option>Student</option>
            <option>Full-timer</option>
            <option>Part-timer</option>
          </select>
          <br />
          <label className="dateofbirth-text">Date of Birth</label>
          <input
            className="dateofbirth-date"
            type="date"
            placeholder="Date of Birth"
          />

          <div className="form-btns__wrapper">
            <Link to="/" className="signup-form-btn__back">
              Back
            </Link>
            <button className="signup-form-btn__confirm">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
