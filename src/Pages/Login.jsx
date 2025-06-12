import React from "react";
import { useState } from "react";
import "../Pages CSS/Register.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const res = await fetch("https://my-blog-app-api.onrender.com/api/user/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);

      // pick the token
      const token = data.token;

      // store the token in local storage
      localStorage.setItem("jwtToken", token);

      // navigate
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="background">
      <div className="signup-container">
        <h2>Log in</h2>
        <form onSubmit={handleLoginSubmit}>
          <label>
            <p>Email</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className="btn">
            Log in
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/auth/register">Sign up </Link>
        </p>
      </div>
    </div>
  );
}
