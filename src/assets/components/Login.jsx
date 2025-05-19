import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="full_login_page">
      <div className="complete_div">
        <p id="text_divs">Let's discuss on something cool together!!!</p>

        <div id="container">
          <h1 id="header">Sign in to account</h1>
          <div className="original_text">
            <div className="input_div">
              <div className="email">
                <label className="email_label">Email</label>
                <input id="email_input" placeholder="Email"></input>
              </div>

              <br />
              <div className="password">
                <label className="password_label">Password</label>
                <input id="password_input" placeholder="Password"></input>
              </div>

              <br />
            </div>

            <button className="sign_in_btn">Sign in</button>
            <br />
            <br />
            <div id="create_new_div">
              <p id="dont_account_div">Don't have account?</p>
              <Link to="create" id="texts">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
