import React, { useState } from "react";
import "../Pages CSS/Register.css";
import { Link, useNavigate } from "react-router-dom";

export default function () {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, email, password);
    try {
      const res = await fetch("https://my-blog-app-api.onrender.com/api/user/auth/register", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);

      // redirect to log in
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="background">
        <div className="signup-container">
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Fullname</p>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
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
              Sign up
            </button>
          </form>
          <p>
            Already have an account? <Link to="/auth/login">Log in </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
