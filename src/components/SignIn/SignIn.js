import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="SignIn-container">
      <div>
        <h1 className="signIn">SignIn</h1>
        <form>
          <div className="input-type">
            <p className="Input-name">Email</p>
            <div className="input-group">
              <label htmlFor="email"></label>
              <input type="email" name="email" required></input>
            </div>
          </div>
          <div className="input-type">
            <p className="Input-name">Password</p>
            <div className="input-group">
              <label htmlFor="Password"></label>
              <input type="password" name="password" required></input>
            </div>
          </div>
          <input className="from-submit" type="submit" value="Sign In"></input>
          <p className="signIn-or-signUp">
            New to Ema-John?<Link to="/SignUp">Create New Account</Link>
          </p>
          <div className="horizontal-role">
            <hr></hr>
            or
            <hr></hr>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
