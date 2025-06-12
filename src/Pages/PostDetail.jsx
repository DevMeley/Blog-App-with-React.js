import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Pages CSS/PageDeatil.css";
import Nav from "../Components/Header/Nav";

export default function Post() {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchpost = async () => {
      try {
        const res = await fetch(`https://my-blog-app-api.onrender.com/api/publish/${id}`);
        const data = await res.json();
        console.log(data.singlePost);
        setSinglePost(data.singlePost);
      } catch (error) {
        console.log(error);
      }
    };
    {
      setIsLoading(false);
    }
    fetchpost();
  }, [id]);
  if (isLoading) {
    return <div>Loading...</div>; // Or a loading spinner
  }
  return (
    <div>
      <Nav />
      <div className="PostContainer">
        <div className="topProfile">
          <img src="Public\Images\1647016869605.JPG" alt="" />
          <p>{singlePost.author}</p>
        </div>
        <img className="img" src="Public\Images\ux.jpg" alt="" />
        <h2>{singlePost?.title}</h2>
        <p>{singlePost.body}</p>
        <div className="iconAdd">
          <div className="icons">
            <span>{new Date(singlePost.createdAt).toDateString()}</span>
            <div className="iconPack">
              <FontAwesomeIcon icon="fa-regular fa-heart" />
              <span>20</span>
            </div>
            <div className="iconPack">
              <FontAwesomeIcon icon="fa-regular fa-bookmark" />
              <span>20</span>
            </div>
          </div>
          <div className="iconPack">
            <FontAwesomeIcon icon="fa-solid fa-share" />
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}
