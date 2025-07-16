import React, { useState } from "react";
import { Link } from "react-router-dom";
import manlogo from "../assets/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg";
import "../Styles/signup.css";

const Signup = () => {
  const userdetail = {
    firstname: "",
    lastname:"",
    email: "",
    tel: "",
    password: "",
    confirmpassword:""
  };
  const [data, setData] = useState(userdetail);
  // const navigate = useNavigate;
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData({ ...data, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if(data.password !== data.confirmpassword){
      alert("password do not match!");
      return;
    }
let getData =[];
try{
    const stored = JSON.parse(localStorage.getItem("user") || "[]");
   if(Array.isArray(stored)){
    getData = stored;
   }
    // let arr = [];
    // arr = [...getData];
    // arr.push(data);
}catch(err){
console.log("Invalid users data in localstorage. Resetting...");

}
getData.push(data);
    localStorage.setItem("user", JSON.stringify(data));
    alert("Account created Sucessfully");
    // navigate("/");
  };

  return (
    <>
      <div className="mainbox">
        <div className="box-item">
          <img src={manlogo} alt="logo" className="imglogo"></img>
        </div>

        <div className="box-item-a">
          <div>
            <button className="upperflextbutton">
              <Link to="/" id="linkbtn">
                Login
              </Link>
            </button>
            <button className="upperflextbutton">
              <Link to="/signup" id="linkbtn">
                Signup
              </Link>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="signup-box">
              <div className="signuptext">
                <span>Create Account</span>
              </div>

              <div className="namecontainer">
                <input
                  type="Name"
                  placeholder="First Name"
                  className="nameinput-content"
                  name="firstname"
                  required
                  onChange={handleInput}
                ></input>
                <input
                  type="Name"
                  placeholder="Last Name"
                  className="nameinput-content"
                  name="lastname"
                  required
                  onChange={handleInput}
                ></input>
              </div>

              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input-content"
                required
                onChange={handleInput}
              ></input>
              <input
                type="tel"
                placeholder="+91"
                name="tel"
                className="input-content"
                required
                onChange={handleInput}
              ></input>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input-content"
                required
                onChange={handleInput}
              ></input>
              <input
                type="Password"
                placeholder="confirm password"
                name="confirmpassword"
                className="input-content"
                required
                onChange={handleInput}
              ></input>

              <div>
                <button type="submit" className="submitbtn">
                  Submit
                </button>
              </div>
            </div>
            <p>
              Already have an account? <Link to="/">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
