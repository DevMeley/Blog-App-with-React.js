import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Pages CSS/Profile.css";

export default function PersonalPost({ post, profilePhotoUrl }) {
  return (
    <div>
      <div className="wrapper">
        <div className="topProfile">
          <img src={post.authorProfilePics} alt="" />
          <Link to={"/account/settings"}>
            <p>{post.author}</p>
          </Link>
        </div>
        <div className="image-Heading">
          <img src={post.image} alt="" />
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
