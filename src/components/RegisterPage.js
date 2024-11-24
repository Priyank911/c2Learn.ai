import React from "react";
import "./RegisterPage.css";
import logo from "../assets/C2learn ai.png"; 
const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="logo-header">
        <img src={logo} alt="C2Learn.ai Logo" className="logo-image" />
      </div>
      <div className="register-container">
        <div className="register-card">
          <h2 className="register-title">Create an account</h2>
          <form>
            <label>Email *</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <label>Display Name</label>
            <input
              type="text"
              placeholder="Enter your display name"
            />
            <label>Username *</label>
            <input
              type="text"
              placeholder="Enter your username"
              required
            />
            <label>Password *</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
            <label>Date of Birth *</label>
            <div className="dob-inputs">
              <select required>
                <option value="">Month</option>
                <option value="January">January</option>
                {/* Add other months */}
              </select>
              <select required>
                <option value="">Day</option>
                {/* Add days */}
              </select>
              <select required>
                <option value="">Year</option>
                {/* Add years */}
              </select>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="email-updates" />
              <label htmlFor="email-updates">
                (Optional) It's okay to send me emails with updates, tips, and special offers.
              </label>
            </div>
            <button type="submit" className="register-button">
              Continue
            </button>
          </form>
          <p className="terms">
            By registering, you agree to C2Learn.ai's{" "}
            <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p>
          <a href="/login" className="login-link">
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
