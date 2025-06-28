import React from "react";
import { useState, useEffect } from "react";
import EditModal from "./Modal/EditModal";
import EditUsernameModall from "./Modal/EditUsernameModall";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";

export default function ProfileComp({ profilePhotoUrl }) {
  const [profile, setProfile] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [username, setUsername] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
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
        setIsLoading(false);
      };
      fetchprofile();
    } else {
      navigate("/");
    }
  }, [setProfile]);
  return (
    <div>
      <div className="p">
        <div className="bodyComp">
          {isLoading ? (
             <img src="/spinner.gif" alt="" />
          ) : (
            <div className="profile-Info">
              <img src={profile.profilePics} alt="profile Photo" />
              <button
                className="editModalBtn"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <FaUserEdit />
              </button>
              <div className="profile-text">
                <div className="parent">
                  <h1 className="username">{profile.username} </h1>
                  <span
                    className="edit"
                    onClick={() => {
                      setOpenEditModal(true);
                    }}
                  >
                    Edit
                  </span>
                </div>
                <a href={profile.email}>{profile.email}</a>
              </div>
            </div>
          )}
        </div>
      </div>
      {openModal && (
        <EditModal
          setOpenModal={setOpenModal}
          profilePhoto={profilePhoto}
          setProfilePhoto={setProfilePhoto}
        />
      )}
      {openEditModal && (
        <EditUsernameModall
          setOpenEditModal={setOpenEditModal}
          username={username}
          setUsername={setUsername}
        />
      )}
    </div>
  );
}
