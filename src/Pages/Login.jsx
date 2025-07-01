import React, { useState } from "react";
import "../Pages CSS/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); 

    try {
      const res = await fetch(
        "https://my-blog-app-api.onrender.com/api/user/auth/login",
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed. Please try again.");
        return;
      }

      
      const token = data.token;

      
      localStorage.setItem("token", token);
      setUser({ ...user, token });

      // navigate
      navigate("/");
      window.location.reload();
    } catch (error) {
      setError("An error occurred. Please try again.");
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error && (
            <div style={{ color: "red", marginBottom: "10px", fontSize:"12px" }}>{error}</div>
          )}
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
