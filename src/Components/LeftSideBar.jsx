import React, { useEffect, useState } from "react";
import "./LeftSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Spinner from "../assets/spinner.gif"

export default function LeftSideBar({ profile, isLoading }) {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
    window.location.reload();
  }

  return (
    <div className="leftProfile">
      {isLoading ? (
        <img src={Spinner} alt="" />
      ) : (
        <div className="profile">
          <div className="profileImage">
            <img src={profile.profilePics} alt="" />
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
      )}
    </div>
  );
}
