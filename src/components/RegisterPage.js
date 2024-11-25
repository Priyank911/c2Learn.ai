import React, { useEffect, useState } from "react";
import "./RegisterPage.css";
import logo from "../assets/C2learn ai.png"; 

const RegisterPage = () => {
  const [days, setDays] = useState([]);
  const [years, setYears] = useState([]);
  
  // Generate days (1 to 31)
  useEffect(() => {
    const dayOptions = [];
    for (let day = 1; day <= 31; day++) {
      dayOptions.push(day);
    }
    setDays(dayOptions);

    // Generate years (from current year down to 1990)
    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let year = currentYear; year >= 1990; year--) {
      yearOptions.push(year);
    }
    setYears(yearOptions);
  }, []);

  return (
    <div className="register-page">
     <div className="logo-header">
  <a href="/login">
    <img src={logo} alt="C2Learn.ai Logo" className="logo-image" />
  </a>
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
            {/* <label>Display Name</label>
            <input
              type="text"
              placeholder="Enter your display name"
            /> */}
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
              {/* Month dropdown (static) */}
              <select required>
                <option value="">Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>

              {/* Day dropdown (dynamic) */}
              <select required>
                <option value="">Day</option>
                {days.map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>

              {/* Year dropdown (dynamic) */}
              <select required>
                <option value="">Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
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
