import React, { useState, useEffect } from "react";
import LeftSideBar from "../Components/LeftSideBar";
import MainContents from "../Components/Main/MainContents";
import Nav from "../Components/Header/Nav";
import "../Pages CSS/Home.css";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";

export default function Home({ profile, profilePhotoUrl, isLoading }) {
  const { token } = useAuth();
  const[openMenu, setOpenMenu] = useState(false)

    const handleLogout = () =>{
      localStorage.removeItem("token");
      setUser(null);
      navigate("/");
      window.location.reload();
    }
  
  return (
    <div>
      <Nav openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <div className="All">
        <div className="searchBar">
          <input type="text" placeholder="Search..."/>
        </div>
        {openMenu && 
        <div className="profile-menu">
          <div className="top">
            <img src={profile.profilePics} alt="" />
            <h3>{profile.username}</h3>
          </div>
          <div className="bottom">
            <Link className="Link" to="/account/settings">
              <p>
                <FaUser />
                Profile
              </p>
            </Link>
            <p>
              <FaBook/>
              My writeup
            </p>
            <p>
              <FaBookmark/>
              Bookmark
            </p>
            <p>
              <IoStatsChart/>
              Stat
            </p>
            <p onClick={handleLogout}>Log Out</p>
          </div>
        </div>
        }
        {token ? (
          <div className="container">
            <MainContents profilePhotoUrl={profilePhotoUrl} />
            <LeftSideBar profile={profile} isLoading={isLoading} handleLogout={handleLogout} />
          </div>
        ) : (
          <MainContents profilePhotoUrl={profilePhotoUrl} />
        )}
      </div>
    </div>
  );
}
