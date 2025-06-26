import React, { useState, useEffect } from "react";
import LeftSideBar from "../Components/LeftSideBar";
import MainContents from "../Components/Main/MainContents";
import Nav from "../Components/Header/Nav";
import "../Pages CSS/Home.css";
import { useAuth } from "../AuthContext";

export default function Home({ profile }) {
  const { token } = useAuth();
  return (
    <div>
      <Nav />
      <div className="All">
        { token? (
          <div className="container">
            <MainContents />
            {/* <LeftSideBar profile={profile} /> */}
          </div>
        ) : (
          <MainContents />
        )}
      </div>
    </div>
  );
}
