import React from "react";
import manlogo from "../assets/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg";
import "../Styles/login.css";
import { Link } from "react-router-dom";

function login() {
  return (
    <>
      <div className="landing-page">

        <div className="box-item">
          <img src={manlogo} alt="logo" className="imglogo"></img>
        </div>

        <div className="box-item-a">
          <div>
            <button className="upperflextbutton"><Link to="/" id="linkbtn">Login</Link></button>
            <button className="upperflextbutton"><Link to="/signup" id="linkbtn">Signup</Link></button>
          </div>
          <form>

            <div className="login-box">
              <div className="logintext">
                <span>Login page</span>
              </div>

              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                className="input-content"
                required
              ></input>
              <input
                type="Password"
                placeholder="@1#$&tdR"
                name="password"
                className="input-content"
                required
              ></input>
              <p className="forgotpassword">forgot password ? </p>
              <div>
                <button type="submit" className="submitbtn">
                  Submit
                </button>
              </div>
            </div>
            <p>
              Don't have an account? <Link to="/signup">Register here</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default login;
