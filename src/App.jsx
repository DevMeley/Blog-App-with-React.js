import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faL, fas } from "@fortawesome/free-solid-svg-icons";
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
import React from "react";

library.add(fas, far, faTwitter, faFontAwesome);

function App() {
  const [profile, setProfile] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const {token} = useAuth()


 useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true)
      if (!token) {
        console.log('No token available for API call');
        return;
      }

      try {
        const res = await fetch("https://my-blog-app-api.onrender.com/api/user/settings/account", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Use token from context
          },
        });
        
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setProfile(data);

        } else {
          const errorData = await res.json();
          console.error('API Error:', errorData);
        }
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();

    
  }, [token])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/" element={<Home profile={profile} isLoading={isLoading}/>} />
          <Route path="/Post/:id" element={<PostDetail profile={profile}/>} />
          <Route path="/publish" element={<Publish profile={profile} />} />
          <Route path="/Music" element={<Music profile={profile} />} />
          <Route path="/account/settings" element={<Settings profile={profile} />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
