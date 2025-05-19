import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateAccount.css";
import Users from "./Users";

function CreateAccount() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div id="createaccount_div">
      <div className="full_form">
        <p id="text_div">Let's discuss on something cool together!!!</p>
        <div className="form_div">
          <h2>Create Your Account</h2>
          <div className="details_div">
            <div className="name_div">
              <label id="name_label">Name</label>
              <input
                className="name_input"
                placeholder="input your name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <br />
            <div className="designation_div">
              <label id="designation_label">Designation</label>
              <input
                className="designation_input"
                placeholder="input your designation"
                type="text"
                value={designation}
                onChange={(e) => {
                  setDesignation(e.target.value);
                }}
              ></input>
            </div>
            <br />
            <div className="email_div">
              <label id="email_label">Email</label>
              <input
                className="email_input"
                placeholder="input your email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <br />
            <div className="password_div">
              <label id="password_label">Password</label>
              <input
                className="password_input"
                placeholder="input your password"
              ></input>
            </div>

            <Link to="/information" id="sign_btn">
              Sign up
            </Link>

            {/* <button id="sign_btn">
              <Link to="/information"></Link>
              Sign up
            </button> */}

            <div id="already_div">
              <p id="already_text">Already have an account?</p>
              <Link to="/" id="link_btn">
                Sign in
              </Link>
            </div>

            <Link to="/users" className="show_users_link">
              Show Users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
