import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Posts.css";

export default function Posts() {
  return (
    <div>
      <Link to={`/post`}></Link>
      <div className="wrapper">
        <div className="topProfile">
          <img src="Public\Images\1647016869605.JPG" alt=""/>
          <p>Ayantola Monsurat</p>
        </div>
        <div className="imageAndHeading">
          <img src="Public\Images\ux.jpg" alt="" />
          <h2>My journey and my first day in UX design world</h2>
        </div>
        <div className="contents">
          <p className="postDesc">
            Entering into tech world, all what was on my mind was to learn app
            development and be a developer/coder, pretty cool right? But
            starting app development learning process, I found it really
            difficult to think of an app to develop or try out, I realized I
            don’t really have a sense of design, and at the same time some
            thoughts came to my mind, what do I want to develop?, Who am I
            developing for?, Why am I developing it?. All this questions never
            seize to leave my head, so I went on Google, being my mentor for
            years and I found answer to the questions. Guess the answer I found?
            It’s nothing but User Experience (UX), that was how I realized I
            have to understand what user experience really is, which understand
            users and their pain point. As I transitioned into it, I got really
            attracted and fell in love with it. At the end of my learning
            process as a UX entry-level, I hope to be a UX designer who does
            nothing but create solutions to user’s headache and their pain
            point(s).
          </p>
          <div className="icons">
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
