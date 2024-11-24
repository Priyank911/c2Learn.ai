import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage"; // Import the Register Page component

function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Redirect any unmatched routes to the login page */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
