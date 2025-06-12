import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "./AuthContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import Home from "./Pages/Home";
import PostDetail from "./Pages/PostDetail";
import NoPage from "./Pages/NoPage";
import Nav from "./Components/Header/Nav";
import Publish from "./Pages/Publish";
import Music from "./Pages/Music";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Settings from "./Pages/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

library.add(fas, far, faTwitter, faFontAwesome);

function App() {
  const [profile, setProfile] = useState("");
  const [loggedIn, setLoggedIn] =  useState(() => !!localStorage.getItem("token"));

  //  useEffect to validate token
   useEffect(()=>{
    const token = localStorage.getItem('jwtToken');
      if (token) {
        setLoggedIn(true); 
      }
   },[])

  useEffect(() => {
    const fetchprofile = async () => {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        console.error("No token found, redirecting to login.");
      }
      try {
        const res = await fetch("https://my-blog-app-api.onrender.com/api/user/settings/account", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        console.log(data);
        if (data.message === "jwt expired") {
          localStorage.setItem("jwtToken", "");
        }
        else{
          localStorage.setItem("token", token);
  setLoggedIn(true);
        }
        setProfile(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchprofile();
  }, [setProfile]);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/" element={<Home profile={profile} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/Post/:id" element={<PostDetail profile={profile} loggedIn={loggedIn}/>} />
          <Route path="/publish" element={<Publish profile={profile} loggedIn={loggedIn}/>} />
          <Route path="/Music" element={<Music profile={profile} loggedIn={loggedIn}/>} />
          <Route path="/account/settings" element={<Settings profile={profile} loggedIn={loggedIn}/>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
