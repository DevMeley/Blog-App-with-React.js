import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Posts.css";

export default function Posts({ post, setPostId }) {
  return (
    <div>
      <div className="wrapper">
        <div className="topProfile">
          <img src="Public\Images\1647016869605.JPG" alt="" />
          <p>{post.author}</p>
        </div>

        <div className="imageAndHeading">
          <img src={`http://localhost:2300${post.image}`} alt="" />
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
