import React, { useState } from "react";
import "./EditModal.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export default function EditModel({
  setOpenModal,
  profilePhoto,
  setProfilePhoto,
}) {
  const navigate = useNavigate();
  const { token } = useAuth();

  const editProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (profilePhoto) {
      formData.append("profilePhoto", profilePhoto);
    }
    try {
      const res = await fetch(
        "https://my-blog-app-api.onrender.com/api/user/settings/uploadProfilePics",
        {
          method: "PUT",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setOpenModal(false);

      // navigate to home after saved
      navigate("/account/settings");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="modelOverlay">
        <div className="modelContainer">
          <h2>Edit Profile Information</h2>
          <form onSubmit={editProfile}>
            <label>
              <p>Username</p>
              <input
                type="file"
                onChange={(e) => setProfilePhoto(e.target.files[0])}
              />
            </label>
            <div className="btns">
              <button
                className="cancelBtn"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Cancel
              </button>
              <button className="saveBtn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
