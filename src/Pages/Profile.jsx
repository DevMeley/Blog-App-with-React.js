import React, { useState, useEffect } from "react";
import "../Pages CSS/Profile.css";
import Nav from "../Components/Header/Nav";
import ProfileComp from "../Components/ProfileComp";
import PersonalPost from "../Components/PersonalPost";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import Spinner from "../assets/spinner.gif"

export default function Profile({ profilePhotoUrl }) {
  const [personalPost, setPersonalPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { token } = useAuth();

  useEffect(() => {
    setIsLoading(true);
    if (token) {
      const fetchPersonalPost = async () => {
        try {
          const res = await fetch(
            "https://my-blog-app-api.onrender.com/api/publish/posts/all",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await res.json();
          setPersonalPost(data.allUserPost);
        } catch (error) {
          console.log(error);
        }
        setIsLoading(false);
      };
      fetchPersonalPost();
    } else {
      navigate("/");
    }
  }, [setPersonalPost]);

  return (
    <div>
      <Nav />
      <div className="profile-body">
        <ProfileComp />
        {isLoading ? (
           <img src={Spinner} alt="" />
        ) : (
          <div className="bodyContainer">
            <div className="links">
              <p>My Posts</p>
            </div>
            <hr />
            {personalPost.map((post) => (
              <PersonalPost key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
