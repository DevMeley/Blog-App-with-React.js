import React from "react";
import { useState, useEffect } from "react";
import EditModal from "./Modal/EditModal";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfileComp() {
  const [profile, setProfile] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { user } = useAuth();
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const fetchprofile = async () => {
        try {
          const res = await fetch(
            "https://my-blog-app-api.onrender.com/api/user/settings/account",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await res.json();
          console.log(data);
          setProfile(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchprofile();
    } else {
      navigate("/");
    }
  }, [setProfile]);
  return (
    <div>
      <div className="p"></div>
      <div className="bodyContainer">
        <div className="profileInfo">
          <img src="" alt="profile Photo" />
          <div className="profile-text">
            <h1>{profile.username}</h1>
            <a href={profile.email}>{profile.email}</a>
          </div>
        </div>
        <button
          className="editModalBtn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Edit Profile
        </button>
      </div>
      {openModal && <EditModal setOpenModal={setOpenModal} />}
    </div>
  );
}
