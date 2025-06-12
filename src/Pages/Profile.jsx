import React from "react";
import { useState, useEffect } from "react";
import "../Pages CSS/Prodile.css";
import Nav from "../Components/Header/Nav";
import ProfileComp from "../Components/ProfileComp";
import PersonalPost from "../Components/PersonalPost";
import { useAuth } from "../AuthContext";

export default function Profile() {
  const [personalPost, setPersonalPost] = useState([]);
  useEffect(() => {
    const fetchPersonalPost = async () => {
      
      try {
        const res = await fetch("https://my-blog-app-api.onrender.com/api/publish/posts/all", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        console.log(data);
        setPersonalPost(data.allUserPost);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPersonalPost();
  }, [setPersonalPost]);
  return (
    <div>
      <Nav user={user} />
      <ProfileComp />
      <div className="bodyContainer">
        <div className="links">
          <p>My Posts</p>
        </div>
        <hr />
        {personalPost.map((post) => (
          <PersonalPost post={post} />
        ))}
      </div>
    </div>
  );
}
