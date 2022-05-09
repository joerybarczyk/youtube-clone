// General imports
import React, { useContext, useEffect } from "react";
import "./LoginPage.css";

// Component imports
import { Link } from "react-router-dom";

// Hook imports
import useCustomForm from "../../hooks/useCustomForm";

// Context imports
import AuthContext from "../../context/AuthContext";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            className="custom-input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            className="custom-input"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        {isServerError ? (
          <p className="error">Login failed, incorrect credentials!</p>
        ) : null}
        <Link to="/register">Click to register!</Link>
        <button className="login-btn">Login!</button>
      </form>
    </div>
  );
};

export default LoginPage;
