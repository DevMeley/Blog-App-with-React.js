import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useAuth } from "../../AuthContext";

export default function Nav({profilePhotoUrl}) {
  const {user} = useAuth()
  const {token} = useAuth()
  
  return (
    <div>
      <nav>
        <div className="nav">
          <div className="logoAndSearch">
            <Link className="logoAndSearch" to={"/"}><h2>ThinkBig</h2></Link>
            <form>
              <input
                type="text"
                // value={querySearch}
                onChange={(e) => setQuerySearch(e.target.value)}
              />
            </form>
          </div>
          <div className="publish">
            {token? (
              <div className="publish">
                <Link to="/publish">
                  <button>
                    <FontAwesomeIcon
                      icon="fa-solid fa-pen"
                      style={{ paddingRight: "10px" }}
                    />
                    Post
                  </button>
                </Link>
                <div className="notifyAndProfile">
                  <span>
                    <FontAwesomeIcon icon="fa-solid fa-bell" />
                  </span>
                  {/* <Link className="Link" to="/account/settings">
                  <div className="profileimg">
                    <img src={profilePhotoUrl} alt="" />
                  </div>
                  </Link> */}
                </div>
              </div>
            ) : (
              <Link to="/auth/register">
                <button>Sign up</button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
