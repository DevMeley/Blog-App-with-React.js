import React, { useState } from "react";
import "./EditModal.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export default function EditUsernameModall({ setOpenEditModal, username, setUsername }) {
  const navigate = useNavigate();
  const {token} = useAuth()

  const editUsername = async (e) => {
    e.preventDefault();
    
    
    try {
      const res = await fetch("https://my-blog-app-api.onrender.com/api/user/settings/editUsername", {
        method: "PUT",
        body: JSON.stringify({username}),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setOpenEditModal(false);

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
          <form onSubmit={editUsername}>
            <label>
              <p>Username</p>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <div className="btns">
              <button
                className="cancelBtn"
                onClick={() => {
                  setOpenEditModal(false);
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
