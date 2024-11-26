import React from "react";
import "./LoginPage.css";
import logo from "../assets/C2learn ai.png";
import sunGif from "../assets/sun.gif";
import panda from "../assets/panda.png"

const LoginPage = () => {
  return (
    <div className="login-page">
      <img src={sunGif} alt="Sun" className="sun-gif" />
      <div className="logo-header">
  <a href="/login">
    <img src={logo} alt="C2Learn.ai Logo" className="logo-image" />
  </a>
</div>
<img src={panda} alt="Animal" className="panda-png" />
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Welcome Back!</h2>
          <p className="login-subtitle">Let’s continue your learning journey.</p>

          <form>
            <label>Email or Username</label>
            <input
              type="text"
              placeholder="Enter your email or username"
              className="input-field"
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input-field"
            />
            <button type="submit" className="login-button">
              Log In
            </button>
          </form>

          <div className="login-options">
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
            <span className="divider">|</span>
            <p className="notaccount">
              Need an account?{" "}
              <a href="/register" className="register-link">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
