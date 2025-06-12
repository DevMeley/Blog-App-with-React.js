import React, { useState } from "react";
import "../Pages CSS/Publish.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Publish() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();
    console.log(title, body, image)

    const formData = new FormData()
    formData.append("title", title)
    formData.append("body", body)
    
    if (image) {
      formData.append("image", image)
    }

    const token = localStorage.getItem("jwtToken")
    try {
      const res = await fetch("https://my-blog-app-api.onrender.com/api/publish/post", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
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
          {image && (<img className="imagePlaceholder" src={URL.createObjectURL(image)}/>)}
          <label htmlFor="file" className="custom-file-upload">
            <FontAwesomeIcon icon="fa-solid fa-image" />
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button className="btn">Post</button>
        </form>
      </div>
    </div>
  );
}
