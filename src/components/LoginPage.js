import React from "react";
import "./LoginPage.css";
import logo from "../assets/C2learn ai.png";

const LoginPage = () => {
  return (
    <div className="login-page">
    <div className="logo-header">
      <img src={logo} alt="C2Learn.ai Logo" className="logo-image" />
    </div>
  
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome back!</h2>
        <p className="login-subtitle">We're so excited to see you again!</p>
  
        <form>
          <label>Email or Username</label>
          <input type="text" placeholder="Enter your email or username" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
  
        <div className="login-options">
          <a href="#" className="forgot-password">
            Forgot your password?
          </a>
          <span className="divider">|</span>
          {/* <a href="/register" className="register">
            Need an account? Register
          </a> */}
          <p className="notaccount">
          Need an account?{" "}
            <a href="/register">Register</a>{" "}
          </p>
        </div>
      </div>
    </div>
  </div>  
  );
};

export default LoginPage;
