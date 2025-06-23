import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Posts.css";

export default function Posts({ post, setPostId }) {
  const getImageSrc = (imagePath) => {
    if (!imagePath) return "/images/placeholder.jpg";
    
    // If path already starts with /, use as is but encode spaces
    if (imagePath.startsWith('/')) {
      return encodeURI(imagePath);
    }
    
    // Otherwise prepend /images/
    return encodeURI(`/images/${imagePath}`);
  };
  return (
    <div>
      <div className="wrapper">
        <div className="topProfile">
          <img src="Public\images\1647016869605-2.JPG" alt="" />
          <Link className={"link"} to={"/account/settings"}><p>{post.author}</p></Link>
        </div>
        <div className="imageAndHeading">
          <img src={post.image || "Public\images\placeholder.jpg"} alt="Post" />
          
          <Link className={"link"} to={`/post/${post._id}`}>
            <h2>{post.title}</h2>
          </Link>
        </div>
        <div className="contents">
          <p className="postDesc">{post.body}</p>
          <div className="icons">
            <p>{new Date(post.createdAt).toDateString()}</p>
            <div className="iconPack">
              <FontAwesomeIcon icon="fa-regular fa-heart" />
              <span>20</span>
            </div>
            <div className="iconPack">
              <FontAwesomeIcon icon="fa-regular fa-bookmark" />
              <span>20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
