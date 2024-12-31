import React, { useState } from "react";
import "../Pages CSS/Publish.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Publish() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();
    console.log(title, body, file);
    const token = localStorage.getItem("jwtToken");
    try {
      const res = await fetch("/api/publish/post", {
        method: "POST",
        body: JSON.stringify({ title, body, file }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="publishContainer">
        <form onSubmit={handlePost}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Body..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label htmlFor="file" className="custom-file-upload">
            <FontAwesomeIcon icon="fa-solid fa-image" />
          </label>
          <input
            type="file"
            id="file"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
          <button className="btn">Post</button>
        </form>
      </div>
    </div>
  );
}
