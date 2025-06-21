import React, { useEffect, useState } from "react";
import "./LeftSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function LeftSideBar({ profile }) {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div className="leftProfile">
      <div className="profile">
        <div className="profileImage">
          <img src="Public\Images\1647016869605.JPG" alt="" />
        </div>
        <div className="profileInfo">
          <h3>{profile.username}</h3>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div className="others">
          <Link className="Link" to="/account/settings">
            <p>
              <FontAwesomeIcon icon="fa-solid fa-gear" />
              Profile
            </p>
          </Link>
          <p>
            {" "}
            <FontAwesomeIcon icon="fa-solid fa-book" />
            My writeup
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon="fa-solid fa-bookmark" />
            Bookmark{" "}
          </p>
          <p>
            <FontAwesomeIcon icon="fa-solid fa-chart-simple" />
            Stat{" "}
          </p>
          <p onClick={handleLogout}>Log Out</p>
        </div>
      </div>
    </div>
  );
}
